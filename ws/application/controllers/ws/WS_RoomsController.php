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
            $retmsg = $this->rooms->getWaitingRooms();
            $code = parent::HTTP_OK;
            parent::setHeaders();
        } else {
            $retmsg = 'Token de sesión inválido';
            $code = parent::HTTP_UNAUTHORIZED;
        }

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
                        $retmsg = 'Adición correcta';
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

        $this->response( $retmsg, $code );
    }

}
