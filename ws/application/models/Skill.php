<?php

class Skill extends CI_Model {
    private $id;
    private $name;
    private $description;
    private $class;
    private $mode;
    private $cost;
    private $damage;
    private $type;

    public function __construct() {
        $this->id = null;
        $this->name = '';
        $this->description = '';
        $this->class = '';
        $this->mode = '';
        $this->cost = null;
        $this->damage = null;
        $this->type = null;
    }

    public function setAll( $id = null, $name = '', $description = '', $class = '', $mode = '', $cost = null, $damage = null, $type = null ) {
        $this->id = $id;
        $this->name = $name;
        $this->description = $description;
        $this->class = $class;
        $this->mode = $mode;
        $this->cost = $cost;
        $this->damage = $damage;
        $this->type = $type;
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

    public function setClass( $class ) {
        $this->class = $class;
    }

    public function getClass() {
        return $this->class;
    }

    public function setMode( $mode ) {
        $this->mode = $mode;
    }

    public function getMode() {
        return $this->mode;
    }

    public function setCost( $cost ) {
        $this->cost = $cost;
    }

    public function getCost() {
        return $this->cost;
    }

    public function setDamage( $damage ) {
        $this->damage = $damage;
    }

    public function getDamage() {
        return $this->damage;
    }

    public function setType( $type ) {
        $this->type = $type;
    }

    public function getType() {
        return $this->type;
    }

    public function getAllSkills() {
        $this->load->database( 'rpg' );
        $query = $this->db->query( 'SELECT s.id, s.name, s.description, s.class, s.mode, s.cost, s.damage, types.name AS type FROM skills AS s LEFT JOIN types ON s.type=types.id;' );
        $rows = $query->result_array();
        return $rows;
    }

    public function getSkillsByClass( $class ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT s.id, s.name, s.description, s.class, s.mode, s.cost, s.damage, types.name AS type FROM skills AS s LEFT JOIN types ON s.type=types.id WHERE class='".$class."' ;" );
        $rows = $query->result_array();
        return $rows;
    }
}

?>
