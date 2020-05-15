<?php

require_once( APPPATH . 'controllers/ws/WS_MainController.php' );

class WS_CharactersController extends WS_MainController {

    public function __construct() {
        parent::__construct();

        $this->load->model( 'character' );
        $this->load->model( 'type' );
        $this->load->model( 'skill' );

    }
    protected function characters_get() {
        $retmsg = '';
        $code = '';
        if ( parent::isTokenValid() ) {
            $characters = $this->character->getAllCharacters();
            if ( count( $types ) > 0 ) {
                $retmsg = $characters;
                $code = parent::HTTP_OK;
                parent::setHeaders();
            }
        } else {
            $retmsg = 'Token de sesión inválido';
            $code = parent::HTTP_UNAUTHORIZED;
        }

        $this->response( $retmsg, $code );
    }

}
