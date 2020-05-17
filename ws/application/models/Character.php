<?php

class Character extends CI_Model {
    private $id;
    private $name;
    private $hp;
    private $mana;
    private $atk;
    private $def;
    private $spatk;
    private $spdef;
    private $speed;
    private $skill1;
    private $skill2;
    private $passive;
    private $ultimate;
    private $type1;
    private $type2;

    public function __construct() {
        $this->id = null;
        $this->name = '';
        $this->hp = null;
        $this->mana = null;
        $this->atk = null;
        $this->def = null;
        $this->spatk = null;
        $this->spdef = null;
        $this->speed = null;
        $this->skill1 = null;
        $this->skill2 = null;
        $this->passive = null;
        $this->ultimate = null;
        $this->type1 = null;
        $this->type2  = null;

    }

    public function setAll( $id = null, $name = '', $hp = null, $mana = null, $atk = null, $def = null, $spatk = null, $spdef = null, $speed = null, $skill1 = null, $skill2 = null, $passive = null, $ultimate = null, $type1 = null, $type2  = null ) {
        $this->id = $id;
        $this->name = $name;
        $this->hp = $hp;
        $this->mana = $mana;
        $this->atk = $atk;
        $this->def = $def;
        $this->spatk = $spatk;
        $this->spdef = $spdef;
        $this->speed = $speed;
        $this->skill1 = $skill1;
        $this->skill2 = $skill2;
        $this->passive = $passive;
        $this->ultimate = $ultimate;
        $this->type1 = $type1;
        $this->type2  = $type2;

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

    public function setHp( $hp ) {
        $this->hp = $hp;
    }

    public function getHp() {
        return $this->hp;
    }

    public function setMana( $mana ) {
        $this->mana = $mana;
    }

    public function getMana() {
        return $this->mana;
    }

    public function setAtk( $atk ) {
        $this->atk = $atk;
    }

    public function getAtk() {
        return $this->atk;
    }

    public function setDef( $def ) {
        $this->def = $def;
    }

    public function getDef() {
        return $this->def;
    }

    public function setSpAtk( $spatk ) {
        $this->spatk = $spatk;
    }

    public function getSpAtk() {
        return $this->spatk;
    }

    public function setSpDef( $spdef ) {
        $this->spdef = $spdef;
    }

    public function getSpDef() {
        return $this->spdef;
    }

    public function setSpeed( $speed ) {
        $this->speed = $speed;
    }

    public function getSpeed() {
        return $this->speed;
    }

    public function setSkill1( $skill1 ) {
        $this->skill1 = $skill1;
    }

    public function getSkill1() {
        return $this->skill1;
    }

    public function setSkill2( $skill2 ) {
        $this->skill2 = $skill2;
    }

    public function getSkill2() {
        return $this->skill2;
    }

    public function setPassive( $passive ) {
        $this->passive = $passive;
    }

    public function getPassive() {
        return $this->passive;
    }

    public function setUltimate( $ultimate ) {
        $this->ultimate = $ultimate;
    }

    public function getUltimate() {
        return $this->ultimate;
    }

    public function setType1( $type1 ) {
        $this->type1 = $type1;
    }

    public function getType1() {
        return $this->type1;
    }

    public function setType2( $type2 ) {
        $this->type2 = $type2;
    }

    public function getType2() {
        return $this->type2;
    }

    public function getAllCharacters() {
        $this->load->database( 'rpg' );
        $query = $this->db->query( 'SELECT c.id, c.name, c.hp, c.mana, c.atk, c.def, c.spatk, c.spdef, c.speed, s1.name as skill1, s2.name as skill2, s3.name as passive, s4.name as ultimate, t1.name as type1, t2.name as type2 FROM characters as c LEFT JOIN skills as s1 ON s1.id = c.skill1 LEFT JOIN skills as s2 ON s2.id = skill2 LEFT JOIN skills as s3 ON s3.id = c.passive LEFT JOIN skills as s4 ON s4.id = c.ultimate LEFT JOIN types as t1 ON t1.id = c.type1 LEFT JOIN types as t2 ON t2.id = c.type2;' );
        $rows = $query->result_array();
        return $rows;
    }

    public function addNewType( $character ) {
        $this->load->database( 'rpg' );
        $this->db->trans_begin();
        $query = $this->db->query( "INSERT INTO characters (name, hp, mana, atk, def, spatk, spdef, speed, skill1, skill2, pasive, ultimate, type1, type2) VALUES ( '" . $character['name'] . "', " . $character['hp'] . ', ' . $character['mana'] . ', ' . $character['atk'] . ', ' . $character['def'] . ', ' . $character['spatk'] . ', ' . $character['spdef'] . ', ' . $character['speed'] . ', ' . $character['skill1'] . ', ' . $character['skill2'] . ', ' . $character['passive'] . ', ' . $character['ultimate'] . ', ' . $character['type1'] . ', ' . $character['type2'] . ');' );
        if ( $this->db->trans_status() === FALSE ) {
            var_dump( 'rollback' );
            $this->db->trans_rollback();
            return false;
        } else {
            $this->db->trans_commit();
            return true;
        }
    }

    public function existscCharacterByName( $character ) {
        $this->load->database( 'rpg' );
        $this->db->select( 'name' );
        $where = array(
            'name' => $character['name']
        );
        $query = $this->db->get_where( 'characters', $where );
        // TRUE si existen registros, FALSE si no existen
        return $query->num_rows() >= 1;
    }
}

?>
