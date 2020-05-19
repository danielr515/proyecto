<?php

class Room extends CI_Model {
    private $id;
    private $name;
    private $type;
    private $passwd;
    private $player1;
    private $player2;
    private $status;
    private $p1status;
    private $p2status;
    private $p1team;
    private $p2team;
    private $turn;

    public function __construct() {
        $this->id = null;
        $this->name = '';
        $this->type = '';
        $this->passwd = '';
        $this->player1 = '';
        $this->player2 = '';
        $this->status = '';
        $this->p1status = '';
        $this->p2status = '';
        $this->p1team = null;
        $this->p2team = null;
        $this->turn = null;
    }

    public function setAll( $id = null, $name = '', $type = '', $passwd = '', $player1 = '', $player2 = '', $status = '', $p1status = '', $p2status = '', $p1team = null, $p2team = null, $turn = null ) {
        $this->id = $id;
        $this->name = $name;
        $this->type = $type;
        $this->passwd = $passwd;
        $this->player1 = $playe1;
        $this->player2 = $player2;
        $this->status = $status;
        $this->p1status = $p1status;
        $this->p2status = $p2status;
        $this->p1team = $p1team;
        $this->p2team = $p2team;
        $this->turn = $turn;
    }

    public function getId() {
        return $this->id;
    }

    public function setId( $id ) {
        $this->id = $id;

    }

    public function getName() {
        return $this->name;
    }

    public function setName( $name ) {
        $this->name = $name;

    }

    public function getType() {
        return $this->type;
    }

    public function setType( $type ) {
        $this->type = $type;

    }

    public function getPasswd() {
        return $this->passwd;
    }

    public function setPasswd( $passwd ) {
        $this->passwd = $passwd;

    }

    public function getPlayer1() {
        return $this->player1;
    }

    public function setPlayer1( $player1 ) {
        $this->player1 = $player1;

    }

    public function getPlayer2() {
        return $this->player2;
    }

    public function setPlayer2( $player2 ) {
        $this->player2 = $player2;

    }

    public function getStatus() {
        return $this->status;
    }

    public function setStatus( $status ) {
        $this->status = $status;

    }

    public function getP1status() {
        return $this->p1status;
    }

    public function setP1status( $p1status ) {
        $this->p1status = $p1status;

    }

    public function getP2status() {
        return $this->p2status;
    }

    public function setP2status( $p2status ) {
        $this->p2status = $p2status;

    }

    public function getP1team() {
        return $this->p1team;
    }

    public function setP1team( $p1team ) {
        $this->p1team = $p1team;

    }

    public function getP2team() {
        return $this->p2team;
    }

    public function setP2team( $p2team ) {
        $this->p2team = $p2team;
    }

    public function getTurn() {
        return $this->turn;
    }

    public function setTurn( $turn ) {
        $this->turn = $turn;

    }

    public function getWaitingRooms() {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT *, '' AS passwd FROM rooms WHERE status='WAITING'" );
        return $query->result_array();
    }

    public function createRoom( $room, $player ) {
        $this->load->database( 'rpg' );
        $this->db->trans_begin();
        $query = $this->db->query( "INSERT INTO rooms (name, type, passwd, player1, status) VALUES ('" . $room['name'] . "', '" . $room['type'] . "', '" . $room['passwd'] . "', '" . $player . "', 'WAITING');" );
        if ( $this->db->trans_status() === FALSE ) {
            var_dump( 'rollback' );
            $this->db->trans_rollback();
            return false;
        } else {
            $this->db->trans_commit();
            return true;
        }
    }

    public function playedAlreadyInRoom( $player ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT id FROM rooms WHERE (player1 ='" . $player . "' OR player2='" . $player . "') AND status!='FINISHED';" );
        // TRUE si existen registros, FALSE si no existen
        return $query->num_rows() >= 1;
    }

    public function validRoom( $roomid, $roompasswd ) {
        $this->load->database( 'rpg' );
        $this->db->select( 'id' );
        $where = array(
            'id' => $roomid,
            'passwd' => $roompasswd,
            'player2' => null
        );
        $query = $this->db->get_where( 'rooms', $where );
        return $query->num_rows() > 0;
    }

    public function enter( $roomid, $roompasswd, $player ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( " UPDATE rooms SET player2='" . $player . "' 	WHERE id=" . $roomid . ';' );
        return $query;
    }

    public function getThisRoomId( $room, $player ) {
        $this->load->database( 'rpg' );
        $query = $this->db->query( "SELECT max(id) FROM rooms WHERE player1='" . $player . "' AND name='" . $room['name'] . "'" );
        return $query->result_array()[0]['max'];
    }

}
?>

