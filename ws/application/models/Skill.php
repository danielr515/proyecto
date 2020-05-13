<?php

class Skill extends CI_Model {
    private $id;
    private $name;
    private $class;
    private $mode;
    private $cost;
    private $damage;
    private $type;

    public function __construct() {
        $this->id = null;
        $this->name = '';
        $this->class = '';
        $this->mode = '';
        $this->cost = null;
        $this->damage = null;
        $this->type = null;
    }

    public function setAll( $id = null, $name = '', $class = '', $mode = '', $cost = null, $damage = null, $type = null ) {
        $this->id = $id;
        $this->name = $name;
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
}

?>
