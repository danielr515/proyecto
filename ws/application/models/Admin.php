<?php

class Admin extends CI_Model {
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

    public function getEmail() {
        return $this->email;
    }

    public function getUname() {
        return $this->uname;
    }

    public function getPasswd() {
        return $this->passwd;
    }

    public function getStatus() {
        return $this->status;
    }

    public function getSessionToken() {
        return $this->sessiontoken;
    }

    public function setEmail( $email ) {
        $this->email = $email;
    }

    public function setUname( $uname ) {
        $this->uname = $uname;
    }

    public function setPasswd( $passwd ) {
        $this->passwd = $passwd;
    }

    public function setStatus( $status ) {
        $this->status = $status;
    }

    public function setSessionToken( $sessiontoken ) {
        $this->sessiontoken = $sessiontoken;
    }

    public function checkReaderEmail( $email ) {
        //Mirar si a la nostra BD existeix aquest email
        $this->db->select( 'email' );
        $this->db->where( array( 'email' => $email ) );
        $query = $this->db->get( 'reader' );

        return $query->num_rows() == 1;
    }

    public function getUserByLoginData( $uname, $passwd ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT * FROM admins WHERE uname='" . $uname . "' AND passwd='" . $passwd . "';
        " );
        $rows = $query->result_array();
        $admin = new Admin();
        if ( count( $rows ) > 0 ) {
            $admin->setAll( $rows[0]['email'], $rows[0]['uname'], $rows[0]['passwd'], $rows[0]['status'], $rows[0]['sessiontoken'] );
        }
        return $admin;
    }

    public function getUserByLogoutData( $uname, $token ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT * FROM admins WHERE uname='" . $uname . "' AND sessiontoken='" . $token . "';
        " );
        $rows = $query->result_array();
        $admin = new Admin();
        if ( count( $rows ) > 0 ) {
            $admin->setAll( $rows[0]['email'], $rows[0]['uname'], $rows[0]['passwd'], $rows[0]['status'], $rows[0]['sessiontoken'] );
        }
        return $admin;
    }

    public function registerNewAdmin( $user ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "INSERT INTO admins (email, uname, passwd, status) VALUES ( '" . $user['email'] . "', '" . $user['email'] . "', '" . $user['email'] . "', 'offline' )" );
        var_dump( $query );
    }

    public function setLastSessionToken( $token, $status ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "UPDATE admins SET status = '" . $status . "', sessiontoken = '" . $token . "' WHERE uname = '" . $this->getUname() . "';
        " );

    }
}

?>
