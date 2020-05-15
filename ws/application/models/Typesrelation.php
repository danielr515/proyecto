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
        $query = $this->db->query( 'INSERT INTO typesrelation VALUES ( ' . $typeatk . ', ' . $typedef . ', 1);' );
        return $query;
    }

    public function existsRelation( $typesrelation ) {
        $this->load->database( 'rpg' );
        $this->db->select( 'typeatk, typedef' );
        $where = array(
            'typeatk' => $typesrelation['typeatk'],
            'typedef' => $typesrelation['typedef']
        );
        $query = $this->db->get_where( 'typesrelation', $where );
        return $query->num_rows() >= 1;
    }

    public function editRelation( $typesrelation ) {
        $this->load->database( 'rpg' );
        $this->db->trans_begin();
        $this->db->set( $typesrelation );
        $where = array(
            'typeatk' => $typesrelation['typeatk'],
            'typedef' => $typesrelation['typedef']
        );
        $this->db->update( 'typesrelation', $typesrelation, $where );
        if ( $this->db->trans_status() === FALSE ) {
            var_dump( 'rollback' );
            $this->db->trans_rollback();
            return false;
        } else {
            $this->db->trans_commit();
            return true;
        }
    }
}

?>
