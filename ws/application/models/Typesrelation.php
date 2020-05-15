<?php

class Typesrelation extends CI_Model {
    private $typeatk;
    private $typedef;
    private $relation;

    public function __construct() {
        $this->typeatk = null;
        $this->typedef = null;
        $this->relation = null;
    }

    public function setAll( $typeatk = null, $typedef = '', $relation = '' ) {
        $this->typeatk = $typeatk;
        $this->typedef = $typedef;
        $this->relation = $relation;
    }

    public function setTypeAtk( $typeatk ) {
        $this->typeatk = $typeatk;
    }

    public function getTypeAtk() {
        return $this->typeatk;
    }

    public function setTypeDef( $typedef ) {
        $this->typedef = $typedef;
    }

    public function getTypeDef() {
        return $this->typedef;
    }

    public function setRelation( $relation ) {
        $this->relation = $relation;
    }

    public function getRelation() {
        return $this->relation;
    }

    public function getWeakness( $type ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( 'SELECT types.id, types.name FROM typesrelation LEFT JOIN types ON typesrelation.typeatk = types.id WHERE typedef = ' . $type . ' AND relation = 2;' );
        $rows = $query->result_array();
        return $rows;
    }

    public function getResistances( $type ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( 'SELECT types.id, types.name FROM typesrelation LEFT JOIN types ON typesrelation.typeatk = types.id WHERE typedef = ' . $type . ' AND relation = 0.5;' );
        $rows = $query->result_array();
        return $rows;
    }

    public function insertNewRelation( $typeatk, $typedef ) {
        $this->load->database( 'rpg' );
        $this->db->query( 'BEGIN;' );
        $query = $this->db->query( 'INSERT INTO typesrelation VALUES ( ' . $typeatk . ', ' . $typedef . ', 1);' );
        if ( !$query ) {
            $this->db->query( 'ROLLBACK;' );
            return false;
        }
        $this->db->query( 'COMMIT;' );

        return $query;
    }
}

?>
