<?php

class Game extends CI_Model {

    public function __construct() {

    }

    public function getPlayerCurrentRoomData( $player ) {
        $idAndTurn = $this->getRoomId( $player );
        $data = array(
            'roomid' => $idAndTurn['id'],
            'turn' => $idAndTurn['turn'],
            'characters' => $this->getCurrentCharacters( $player, $idAndTurn['id'] )
        );
        if ( $idAndTurn['turn']>0 ) {
            $data['currchar'] = $this->getActiveCharacter( $player, $idAndTurn['id'], $idAndTurn['turn'] );
        }
        return $data;
    }

    private function getRoomId( $player ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT DISTINCT id, turn FROM rooms WHERE (player1='" . $player . "' OR player2='" . $player . "') AND status!='FINISHED';" );
        return $query->result_array()[0];
    }

    private function getCurrentCharacters( $player, $id ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT c.name, c.id, hp AS basehp, currhp, mana AS basemana, currmana , atk AS baseatk, curratk, def AS basedef, currdef, spatk AS basespatk, currspatk, spdef AS basespdef, currspdef, speed AS basespeed, currspeed  FROM characterbattlehistory AS ch LEFT JOIN characters AS c ON  ch.character = c.id WHERE player='" . $player . "' AND ch.room='" . $id . "';
		" );
        $rows = $query->result_array();

        foreach ( $rows as $index=>$row ) {
            $rows[$index]['skills'] = $this->getCharacterSkills( $row['id'] );
        }
        return $rows;
    }

    private function getCharacterSkills( $id ) {
        $this->load->database( 'rpg' );
        $skills = array();
        $skillsquery = $this->db->query( 'SELECT skill1, skill2, passive, ultimate FROM characters WHERE id='. $id .';' );
        $skillsrows = $skillsquery->result_array()[0];
        $query = $this->db->query( "SELECT s.id, s.name, t.name AS type, cost FROM skills AS s LEFT JOIN types AS t ON s.type = t.id WHERE s.id='" . $skillsrows['skill1'] . "';" );
        array_push( $skills, $query->result_array() );
        $query = $this->db->query( "SELECT s.id, s.name, t.name AS type, cost FROM skills AS s LEFT JOIN types AS t ON s.type = t.id WHERE s.id='" . $skillsrows['skill2'] . "';" );
        array_push( $skills, $query->result_array() );
        $query = $this->db->query( "SELECT s.id, s.name, t.name AS type, cost FROM skills AS s LEFT JOIN types AS t ON s.type = t.id WHERE s.id='" . $skillsrows['passive'] . "';" );
        array_push( $skills, $query->result_array() );
        $query = $this->db->query( "SELECT s.id, s.name, t.name AS type, cost FROM skills AS s LEFT JOIN types AS t ON s.type = t.id WHERE s.id='" . $skillsrows['ultimate'] . "';" );
        array_push( $skills, $query->result_array() );
        return $skills;
    }

    private function getActiveCharacter( $player, $room, $turn ) {
        $this->load->database( 'rpg' );
        $this->db->select( 'character' );
        $where = array(
            'player' => $player,
            'room' => $room,
            'turn' => $turn
        );
        $query = $this->db->get_where( 'characterbattlehistory', $where );
        return $query->result_array()[0];
    }

    public function isGameStarted( $player ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT id FROM rooms WHERE (player1='" . $player . "' OR player2='" . $player . "') AND status='PLAYING';" );
        return $query->num_rows() > 0;
    }
}

?>
