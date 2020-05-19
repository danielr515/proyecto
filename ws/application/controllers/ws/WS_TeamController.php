<?php

require_once( APPPATH . 'controllers/ws/WS_MainController.php' );

class WS_TeamsController extends WS_MainController {

    public function __construct() {
        parent::__construct();

        $this->load->model( 'team' );
    }

    public function skillsByClass_options() {
        parent::setOptions();
    }
    protected function skillsByClass_get() {
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
                $retmsg = $this->team->getTeamsByPlayer( $player );
                $code = parent::HTTP_OK;
            } else {
                $retmsg = 'Datos erróneos';
                $code = parent::HTTP_UNAUTHORIZED;
            }
        }

        $this->response( $retmsg, $code );
    }
}
