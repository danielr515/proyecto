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
        $query = $this->db->query( "SELECT DISTINCT c.name, c.id,, hp AS basehp, currhp, mana AS basemana, currmana , atk AS baseatk, curratk, def AS basedef, currdef, spatk AS basespatk, currspatk, spdef AS basespdef, currspdef, speed AS basespeed, currspeed  FROM characterbattlehistory AS ch LEFT JOIN characters AS c ON  ch.character = c.id WHERE player='" . $player . "' AND ch.room='" . $id . "';
		" );
        $rows = $query->result_array();
        foreach ( $rows as $index=>$row ) {
            $rows[$index]['skills'] = $this->getCharacterSkills( $row['id'] );
        }
        return $rows;
    }

    private function getCharacterSkills( $id ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT s.id, s.name, t.name, cost FROM skills AS s LEFT JOIN types AS t ON s.type = t.id WHERE s.id='" . $id . "';" );
        return $query->result_array()[0];
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
}

?>
