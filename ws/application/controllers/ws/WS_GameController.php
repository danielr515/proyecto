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

    public function selectCharacter_options() {
        parent::setOptions();
    }

    public function selectCharacter_post() {
        $character = $this->post( 'character' );
        $player = $this->post( 'player' );
        $room = $this->post( 'room' );
        $turn = $this->post( 'turn' );

        $authorization = $this->input->get_request_header( 'Authorization' );
        $token = explode( ' ', $authorization );
        if ( count( $token ) > 1 ) {
            $token = $token[1];
        }
        $retmsg = '';
        $code = '';
        if ( $character == '' OR $room == '' OR $turn == '' ) {
            $retmsg = 'Faltan datos obligatorios';
            $code = parent::HTTP_BAD_REQUEST;
        } else {
            if ( $this->player->userAndTokenValid( $player, $token ) ) {
                if ( $this->room->playedAlreadyInRoom( $player ) ) {
                    $return = $this->game->selectCharacter( $player, $room, $turn, $character );
                    if ( $return ) {
                        $retmsg = 'Selección correcta';
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

    public function isSelectedCharacterEnemy_options() {
        parent::setOptions();
    }

    public function isSelectedCharacterEnemy_get() {
        $player = $this->get( 'player' );
        $room = $this->get( 'room' );
        $turn = $this->get( 'turn' );
        $retmsg = '';
        $code = '';

        $authorization = $this->input->get_request_header( 'Authorization' );
        $token = explode( ' ', $authorization );
        if ( count( $token ) > 1 ) {
            $token = $token[1];
        }
        $retmsg = '';
        $code = '';
        if ( $player == '' OR $room == '' OR $turn == '' ) {
            $retmsg = 'Faltan datos obligatorios';
            $code = parent::HTTP_BAD_REQUEST;
        } else {
            if ( $this->player->userAndTokenValid( $player, $token ) ) {
                if ( $this->room->playedAlreadyInRoom( $player ) ) {
                    $retmsg = $this->game->isSelectedCharacterEnemy( $player, $room, $turn );
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
