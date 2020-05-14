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

    public function addNewType( $type ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "INSERT INTO types (name, description) VALUES ( '" . $type['name'] . "', '" . $type['description'] . "');" );
        // TRUE si se inserta, FALSE si falla
        return $query;
    }

    public function existTypeByName( $type ) {
        $this->load->database( 'rpg' );
        $this->db->select( 'name' );
        $where = array(
            'name' => $type['name']
        );
        $query = $this->db->get_where( 'types', $where );
        // TRUE si existen registros, FALSE si no existen
        return $query->num_rows() >= 1;
    }
}

?>
