<?php

class Player extends CI_Model {
    private $email;
    private $uname;
    private $passwd;
    private $status;
    private $sessiontoken;
    private $rankpoints;
    private $money;

    public function __construct() {
        $this->email = '';
        $this->uname = '';
        $this->passwd = '';
        $this->status = '';
        $this->sessiontoken = '';
        $this->rankpoints = null;
        $this->money = null;
    }

    public function setAll( $email = '', $uname = '', $passwd = '', $status = '', $sessiontoken = '', $rankpoints = null, $money = null ) {
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

    public function setRankpoints( $rankpoints ) {
        $this->rankpoints = $rankpoints;
    }

    public function getRankpoints() {
        return $this->rankpoints;
    }

    public function setMoney( $money ) {
        $this->money = $money;
    }

    public function getMoney() {
        return $this->money;
    }

    public function userAndTokenValid( $uname, $token ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT sessiontoken FROM players WHERE uname='". $uname ."' AND sessiontoken='" . $token . "'  ;" );
        return $query->num_rows() > 0;
    }

    public function login( $uname, $passwd ) {
        $this->load->database( 'rpg' );
        $this->db->select( 'uname' );
        $where = array(
            'uname' => $uname,
            'passwd' => $passwd
        );
        $query = $this->db->get_where( 'players', $where );
        return $query->num_rows() > 0;
    }

    public function logout( $uname ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "UPDATE players SET status='offline', sessiontoken=''  WHERE uname='" . $uname . "'" );
        return $query;
    }

    public function addToken( $uname, $token ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "UPDATE players SET status='online', sessiontoken='" . $token . "'  WHERE uname='" . $uname . "'" );
        return $query;
    }

    public function existsUser( $user ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT uname FROM players WHERE email='" . $user['email'] . "' OR uname='". $user['uname'] ."';" );
        return $query->num_rows() > 0;
    }

    public function registerPlayer( $user ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "INSERT INTO players VALUES ('" . $user['email'] . "', '" . $user['uname'] . "', '" . $user['passwd'] . "', 'offline', '', 500, 0);" );
        return $query;
    }

}

?>
