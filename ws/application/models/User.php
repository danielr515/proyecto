<?php

class User extends CI_Model {
    private $email;
    private $uname;
    private $passwd;
    private $status;
    private $sessiontoken;

    public function __construct() {
        $this->email = '';
        $this->uname = '';
        $this->passwd = '';
        $this->status = '';
        $this->sessiontoken = '';
    }

    public function setAll( $email = '', $uname = '', $passwd = '', $status = '', $sessiontoken = '' ) {
        $this->email = $email;
        $this->uname = $uname;
        $this->passwd = '';
        $this->status = $status;
        $this->sessiontoken = $sessiontoken;
    }

    public function setEmail( $email ) {
        $this->email = $email;
    }

    public function getEmail() {
        return $this->email;
    }

    public function setUname( $uname ) {
        $this->uname = $uname;
    }

    public function getUname() {
        return $this->uname;
    }

    public function setPasswd( $passwd ) {
        $this->passwd = $passwd;
    }

    public function getPasswd() {
        return $this->passwd;
    }

    public function setStatus( $status ) {
        $this->status = $status;
    }

    public function getStatus() {
        return $this->status;
    }

    public function setSessionToken( $sessiontoken ) {
        $this->sessiontoken = $sessiontoken;
    }

    public function getSessionToken() {
        return $this->sessiontoken;
    }

    public function tokenExists( $token ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT sessiontoken FROM users WHERE sessiontoken='" . $token . "';" );
        if ( count( $rows ) > 0 ) {
            return true;
        }
        return false;
    }
}

?>
