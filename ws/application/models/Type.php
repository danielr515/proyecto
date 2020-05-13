<?php

class Type extends CI_Model {
    private $id;
    private $name;
    private $description;

    public function __construct() {
        $this->id = null;
        $this->name = '';
        $this->description = '';
    }

    public function setAll( $id = null, $name = '', $description = '' ) {

        $this->id = $id;
        $this->name = $name;
        $this->description = $description;
    }

    public function setId( $id ) {
        $this->id = $id;
    }

    public function getId() {
        return $this->id;
    }

    public function setName( $name ) {
        $this->name = $name;
    }

    public function getName() {
        return $this->name;
    }

    public function setDescription( $description ) {
        $this->description = $description;
    }

    public function getDescription() {
        return $this->description;
    }

    public function getAllTypes() {
        $this->load->database( 'rpg' );
        $query = $this->db->query( 'SELECT * FROM types' );
        $rows = $query->result_array();
        return $rows;
    }
}

?>
