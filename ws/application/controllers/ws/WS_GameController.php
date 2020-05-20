<?php

require_once( APPPATH . 'controllers/ws/WS_MainController.php' );

class WS_GameController extends WS_MainController {

    public function __construct() {
        parent::__construct();

        $this->load->model( 'player' );
        $this->load->model( 'room' );
        $this->load->model( 'team' );
        $this->load->model( 'game' );

    }

    public function ownData_options() {
        parent::setOptions();
    }
    protected function ownData_get() {
        $player = $this->get( 'player' );
        $retmsg = '';
        $code = '';

        $authorization = $this->input->get_request_header( 'Authorization' );
        $token = explode( ' ', $authorization );
        if ( count( $token ) > 1 ) {
            $token = $token[1];
        }
        $retmsg = '';
        $code = '';
        if ( $player == '' ) {
            $retmsg = 'Faltan datos obligatorios';
            $code = parent::HTTP_BAD_REQUEST;
        } else {
            if ( $this->player->userAndTokenValid( $player, $token ) ) {
                if ( $this->room->playedAlreadyInRoom( $player ) ) {
                    $retmsg = $this->game->getPlayerCurrentRoomData( $player );
                    $code = parent::HTTP_OK;
                } else {
                    $retmsg = 'El jugador no se encuentra en partida';
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

    public function enemyData_options() {
        parent::setOptions();
    }

    public function enemyData_get() {
        $player = $this->get( 'player' );
        $retmsg = '';
        $code = '';

        $authorization = $this->input->get_request_header( 'Authorization' );
        $token = explode( ' ', $authorization );
        if ( count( $token ) > 1 ) {
            $token = $token[1];
        }
        $retmsg = '';
        $code = '';
        if ( $player == '' ) {
            $retmsg = 'Faltan datos obligatorios';
            $code = parent::HTTP_BAD_REQUEST;
        } else {
            if ( $this->player->userAndTokenValid( $player, $token ) ) {
                if ( $this->room->playedAlreadyInRoom( $player ) ) {
                    $retmsg = $this->game->getEnemyCurrentRoomData( $player );
                    $code = parent::HTTP_OK;
                } else {
                    $retmsg = 'El jugador no se encuentra en partida';
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

    public function isGameStarted_options() {
        parent::setOptions();
    }

    public function isGameStarted_get() {
        $player = $this->get( 'player' );
        $retmsg = '';
        $code = '';

        $authorization = $this->input->get_request_header( 'Authorization' );
        $token = explode( ' ', $authorization );
        if ( count( $token ) > 1 ) {
            $token = $token[1];
        }
        $retmsg = '';
        $code = '';
        if ( $player == '' ) {
            $retmsg = 'Faltan datos obligatorios';
            $code = parent::HTTP_BAD_REQUEST;
        } else {
            if ( $this->player->userAndTokenValid( $player, $token ) ) {
                if ( $this->room->playedAlreadyInRoom( $player ) ) {
                    $retmsg = $this->game->isGameStarted( $player );
                    $code = parent::HTTP_OK;
                } else {
                    $retmsg = 'El jugador no se encuentra en partida';
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
