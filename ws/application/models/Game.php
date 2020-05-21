<?php

class Game extends CI_Model {

    public function __construct() {

    }

    public function getPlayerCurrentRoomData( $player ) {
        $idAndTurn = $this->getRoomId( $player );
        $data = array(
            'roomid' => $idAndTurn['id'],
            'turn' => $idAndTurn['turn'],
            'characters' => $this->getCurrentCharacters( $player, $idAndTurn['id'] ),
            'currchar' => $this->getActiveCharacter( $player, $idAndTurn['id'], $idAndTurn['turn'] )
        );

        return $data;
    }

    private function getRoomId( $player ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT DISTINCT id, turn FROM rooms WHERE (player1='" . $player . "' OR player2='" . $player . "') AND status!='FINISHED';" );
        return $query->result_array()[0];
    }

    private function getCurrentCharacters( $player, $id ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT c.name, c.id, ch.id AS tmpid, hp AS basehp, currhp, mana AS basemana, currmana , atk AS baseatk, curratk, def AS basedef, currdef, spatk AS basespatk, currspatk, spdef AS basespdef, currspdef, speed AS basespeed, currspeed  FROM characterbattlehistory AS ch LEFT JOIN characters AS c ON  ch.character = c.id WHERE player='" . $player . "' AND ch.room='" . $id . "';
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
        $skills['skill1'] = $query->result_array()[0];
        $query = $this->db->query( "SELECT s.id, s.name, t.name AS type, cost FROM skills AS s LEFT JOIN types AS t ON s.type = t.id WHERE s.id='" . $skillsrows['skill2'] . "';" );
        $skills['skill2'] = $query->result_array()[0];
        $query = $this->db->query( "SELECT s.id, s.name, t.name AS type, cost FROM skills AS s LEFT JOIN types AS t ON s.type = t.id WHERE s.id='" . $skillsrows['passive'] . "';" );
        $skills['passive'] = $query->result_array()[0];
        $query = $this->db->query( "SELECT s.id, s.name, t.name AS type, cost FROM skills AS s LEFT JOIN types AS t ON s.type = t.id WHERE s.id='" . $skillsrows['ultimate'] . "';" );
        $skills['ultimate'] = $query->result_array()[0];
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
        $query = $this->db->get_where( 'battlehistory', $where );
        return $query->result_array()[0]['character'];
    }

    public function isGameStarted( $player ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT id FROM rooms WHERE (player1='" . $player . "' OR player2='" . $player . "') AND status='PLAYING';" );
        return $query->num_rows() > 0;
    }

    public function isSelectedCharacterEnemy( $player, $room, $turn ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT id FROM battlehistory WHERE player='" . $player . "' AND room=" . $room . ' AND turn=' . $turn . ';' );
        return $query->num_rows() > 0;
    }

    public function getEnemyCurrentRoomData( $player, $room, $turn ) {
        $this->load->model( 'character' );
        $enemyName = '';
        if ( $this->isPlayer1( $player, $room ) ) {
            $enemyName = $this->getEnemyName( 'player1', 'player2', $player,  $room );
        } else {
            $enemyName = $this->getEnemyName( 'player2', 'player1', $player,  $room );
        }
        $data = array(
            'roomid' => $room,
            'turn' => $turn,
            'name' => $enemyName,
            'currchar' => $this->getEnemyActiveChar( $enemyName, $room, $turn )
        );
        return $data;
    }

    public function isPlayer1( $player, $id ) {
        $this->load->database( 'rpg' );
        $this->db->select( 'id' );
        $where = array(
            'player1' => $player,
            'id' => $id
        );
        $query = $this->db->get_where( 'rooms', $where );
        return $query->num_rows() > 0;
    }

    public function getEnemyName( $me, $enemy, $player, $id ) {
        $this->load->database( 'rpg' );
        $this->db->select( $enemy );
        $where = array(
            $me => $player,
            'id' => $id
        );
        $query = $this->db->get_where( 'rooms', $where );
        return $query->result_array()[0][$enemy];
    }

    public function getEnemyActiveChar( $enemyName, $room, $turn ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( 'SELECT c.name, c.id, hp AS basehp, currhp, mana AS basemana, currmana FROM characterbattlehistory AS ch LEFT JOIN characters AS c ON ch.character = c.id WHERE ch.id = (SELECT character FROM battlehistory WHERE room=' . $room . ' AND turn = ' . $turn . " AND player ='" . $enemyName . "') AND player='" . $enemyName . "' AND ch.room=" . $room . ' AND ch.turn=' . $turn . ";
		" );
        return $query->result_array()[0];
    }

    public function selectCharacter( $player, $room, $turn, $character ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( 'UPDATE battlehistory SET character=' . $character . " WHERE player='" . $player . "' AND room=" . $room . ' AND turn=' . $turn . ';' );
        return $query;
    }
}

?>
