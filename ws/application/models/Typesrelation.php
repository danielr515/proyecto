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
}

?>