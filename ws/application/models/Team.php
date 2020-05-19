<?php

class Team extends CI_Model {
    private $id;
    private $name;
    private $player;
    private $char1;
    private $char2;
    private $char3;
    private $char4;
    private $item1;
    private $item2;
    private $item3;
    private $item4;

    public function __construct() {
        $this->id = null;
        $this->name = '';
        $this->player = '';
        $this->char1 = null;
        $this->char2 = null;
        $this->char3 = null;
        $this->char4 = null;
        $this->item1 = null;
        $this->item2 = null;
        $this->item3 = null;
        $this->item4 = null;
    }

    public function setAll( $id = null, $name = '', $player = '', $char1 = null, $char2 = null, $char3 = null, $char4 = null, $item1 = null, $item2 = null, $item3 = null, $item4 = null ) {
        $this->id = $id;
        $this->name = $name;
        $this->player = '';
        $this->char1 = $char1;
        $this->char2 = $char2;
        $this->char3 = $char3;
        $this->char4 = $char4;
        $this->item1 = $item1;
        $this->item2 = $item2;
        $this->item3 = $item3;
        $this->item4 = $item4;
    }

    public function getId() {
        return $this->id;
    }

    public function setId( $id ) {
        $this->id = $id;
    }

    public function getName() {
        return $this->name;
    }

    public function setName( $name ) {
        $this->name = $name;
    }

    public function getPlayer() {
        return $this->player;
    }

    public function setPlayer( $player ) {
        $this->player = $player;

    }

    public function getChar1() {
        return $this->char1;
    }

    public function setChar1( $char1 ) {
        $this->char1 = $char1;

    }

    public function getChar2() {
        return $this->char2;
    }

    public function setChar2( $char2 ) {
        $this->char2 = $char2;

    }

    public function getChar3() {
        return $this->char3;
    }

    public function setChar3( $char3 ) {
        $this->char3 = $char3;
    }

    public function getChar4() {
        return $this->char4;
    }

    public function setChar4( $char4 ) {
        $this->char4 = $char4;

    }

    public function getItem1() {
        return $this->item1;
    }

    public function setItem1( $item1 ) {
        $this->item1 = $item1;

    }

    public function getItem2() {
        return $this->item2;
    }

    public function setItem2( $item2 ) {
        $this->item2 = $item2;

    }

    public function getItem3() {
        return $this->item3;
    }

    public function setItem3( $item3 ) {
        $this->item3 = $item3;
    }

    public function getItem4() {
        return $this->item4;
    }

    public function setItem4( $item4 ) {
        $this->item4 = $item4;

    }

    public function getTeamsByPlayer( $player ) {
        $this->load->database( 'rpg' );
        $this->laod->model( 'character' );
        $this->db->select( '*' );
        $where = array(
            'player' => $player
        );
        $query = $this->db->get_where( 'teams', $where );
        $rows = $query->result_array();
        foreach ( $rows as $index=>$index ) {
            $rows[$index]['char1'] = $this->character->getCharById( $row['char1'] );
            $rows[$index]['char2'] = $this->character->getCharById( $row['char2'] );
            $rows[$index]['char3'] = $this->character->getCharById( $row['char3'] );
            $rows[$index]['char4'] = $this->character->getCharById( $row['char4'] );
        }
        var_dump( $rows );
        return $rows;
    }
}

?>
