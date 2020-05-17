<?php

require_once( APPPATH . 'controllers/ws/WS_MainController.php' );

class WS_CharactersController extends WS_MainController {

    public function __construct() {
        parent::__construct();

        $this->load->model( 'character' );
        $this->load->model( 'type' );
        $this->load->model( 'skill' );

    }
    protected function characters_options() {
        parent::setOptions();
    }
    protected function characters_get() {
        $retmsg = '';
        $code = '';
        if ( parent::isTokenValid() ) {
            $characters = $this->character->getAllCharacters();
            if ( count( $characters ) > 0 ) {
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

    protected function addCharacter_options() {
        parent::setOptions();
    }

    protected function addCharacter_post() {
        $character = $this->post( 'character' );
        $adminUname = $this->post( 'admin' );

        $authorization = $this->input->get_request_header( 'Authorization' );
        $token = explode( ' ', $authorization );
        if ( count( $token ) > 1 ) {
            $token = $token[1];
        }
        $retmsg = '';
        $code = '';
        if ( $character['name'] == '' || $character['subname'] == '' || $character['type1'] == null || $character['skill1'] == null || $character['skill2'] == null || $character['passive'] == null || $character['ultimate'] == null || $character['hp'] == null || $character['mana'] == null || $character['atk'] == null || $character['def'] == null || $character['spatk'] == null || $character['spdef'] == null || $character['speed'] == null ) {
            $retmsg = 'Faltan datos obligatorios';
            $code = parent::HTTP_BAD_REQUEST;
        } else {
            if ( !isset( $adminUname ) || !isset( $token ) ) {
                $retmsg = 'Datos erróneos';
                $code = parent::HTTP_UNAUTHORIZED;
            } else {
                $admin = $this->admin->getUserByLogoutData( $adminUname, $token );
                if ( $admin->getUname() != '' ) {
                    $character['name'] = $character['name'] . ', ' . $character['subname'];
                    if ( !$this->character->existsCharacterByName( $character ) ) {
                        $return = $this->character->addNewCharacter( $character );
                        if ( $return ) {
                            $retmsg = 'Adición correcta';
                            $code = parent::HTTP_OK;
                        } else {
                            $retmsg = 'Error al insertar';
                            $code = parent::HTTP_INTERNAL_ERROR;
                        }
                    } else {
                        $retmsg = 'Ya existe el tipo que estás intentando insertar';
                        $code = parent::HTTP_BAD_REQUEST;
                    }
                } else {
                    $retmsg = 'Datos erróneos';
                    $code = parent::HTTP_UNAUTHORIZED;
                }
            }
        }

        $this->response( $retmsg, $code );
    }

}
