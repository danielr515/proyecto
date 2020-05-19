<?php

require_once( APPPATH . 'controllers/ws/WS_MainController.php' );

class WS_RoomsController extends WS_MainController {

    public function __construct() {
        parent::__construct();

        $this->load->model( 'room' );

        $this->load->model( 'player' );

    }

    public function waitingRooms_options() {
        parent::setOptions();
    }
    protected function waitingRooms_get() {
        $retmsg = '';
        $code = '';

        if ( parent::isTokenValid() ) {
            $retmsg = $this->room->getWaitingRooms();
            $code = parent::HTTP_OK;
        } else {
            $retmsg = 'Token de sesión inválido';
            $code = parent::HTTP_UNAUTHORIZED;
        }
        parent::setHeaders();
        $this->response( $retmsg, $code );
    }

    protected function createRoom_options() {
        parent::setOptions();
    }
    protected function createRoom_post() {
        $room = $this->post( 'room' );
        $player = $this->post( 'player' );

        $authorization = $this->input->get_request_header( 'Authorization' );
        $token = explode( ' ', $authorization );
        if ( count( $token ) > 1 ) {
            $token = $token[1];
        }
        $retmsg = '';
        $code = '';
        if ( $room['name'] == '' || $room['type'] == '' || ( $room['type'] == 'PRIVATE' && $room['passwd'] == '' ) ) {
            $retmsg = 'Faltan datos obligatorios';
            $code = parent::HTTP_BAD_REQUEST;
        } else {
            if ( $this->player->userAndTokenValid( $player, $token ) ) {
                if ( !$this->room->playedAlreadyInRoom( $player ) ) {
                    $return = $this->room->createRoom( $room, $player );
                    if ( $return ) {
                        $roomid = $this->room->getThisRoomId( $room, $player );
                        $retmsg = array(
                            'retmsg' => 'Adición correcta',
                            'roomid' => $roomid
                        );
                        $code = parent::HTTP_OK;
                    } else {
                        $retmsg = 'Error al insertar';
                        $code = parent::HTTP_INTERNAL_ERROR;
                    }
                } else {
                    $retmsg = 'Este jugador ya se encuentra en una sala en curso';
                    $code = parent::HTTP_UNAUTHORIZED;
                }
            } else {
                $retmsg = 'Datos erróneos';
                $code = parent::HTTP_UNAUTHORIZED;
            }
        }
        parent::setHeaders();
        $this->response( $retmsg, $code );
    }

    protected function enterRoom_options() {
        parent::setOptions();
    }

    protected function enterRoom_post() {
        $roomid = $this->post( 'id' );
        $roompasswd = $this->post( 'passwd' );
        $player = $this->post( 'player' );

        $authorization = $this->input->get_request_header( 'Authorization' );
        $token = explode( ' ', $authorization );
        if ( count( $token ) > 1 ) {
            $token = $token[1];
        }
        $retmsg = '';
        $code = '';
        if ( $roomid == '' ) {
            $retmsg = 'Faltan datos obligatorios';
            $code = parent::HTTP_BAD_REQUEST;
        } else {
            if ( $this->player->userAndTokenValid( $player, $token ) ) {
                if ( !$this->room->playedAlreadyInRoom( $player ) ) {
                    if ( $this->room->validRoom( $roomid, $roompasswd ) ) {
                        $return = $this->room->enter( $roomid, $roompasswd, $player );
                        if ( $return ) {
                            $retmsg = 'Entrada correcta';
                            $code = parent::HTTP_OK;
                        } else {
                            $retmsg = 'Error al entrar';
                            $code = parent::HTTP_INTERNAL_ERROR;
                        }
                    } else {
                        $retmsg = 'La sala no es válida o ya ha sido ocupada';
                        $code = parent::HTTP_UNAUTHORIZED;
                    }
                } else {
                    $retmsg = 'Este jugador ya se encuentra en una sala en curso';
                    $code = parent::HTTP_UNAUTHORIZED;
                }
            } else {
                $retmsg = 'Datos erróneos';
                $code = parent::HTTP_UNAUTHORIZED;
            }
        }
        parent::setHeaders();
        $this->response( $retmsg, $code );
    }

    protected function setTeam_options() {
        parent::setOptions();
    }

    protected function setTeam_post() {
        $team = $this->post( 'team' );
        $player = $this->post( 'player' );

        $authorization = $this->input->get_request_header( 'Authorization' );
        $token = explode( ' ', $authorization );
        if ( count( $token ) > 1 ) {
            $token = $token[1];
        }
        $retmsg = '';
        $code = '';
        if ( $team == '' ) {
            $retmsg = 'Faltan datos obligatorios';
            $code = parent::HTTP_BAD_REQUEST;
        } else {
            if ( $this->player->userAndTokenValid( $player, $token ) ) {
                if ( $this->room->playedAlreadyInRoom( $player ) ) {
                    $return = $this->room->setTeam( $player, $team );
                    if ( $return ) {
                        $retmsg = 'Entrada correcta';
                        $code = parent::HTTP_OK;
                    } else {
                        $retmsg = 'Error al entrar';
                        $code = parent::HTTP_INTERNAL_ERROR;
                    }
                } else {
                    $retmsg = 'Este jugador no se encuentra en una sala en curso';
                    $code = parent::HTTP_UNAUTHORIZED;
                }
            } else {
                $retmsg = 'Datos erróneos';
                $code = parent::HTTP_UNAUTHORIZED;
            }
        }
        parent::setHeaders();
        $this->response( $retmsg, $code );
    }

}
