<?php

use chriskacerguis\RestServer\RestController;

require_once( APPPATH . 'libraries/codeigniter-restserver/src/RestController.php' );
require_once( APPPATH . 'libraries/codeigniter-restserver/src/Format.php' );

class WS_MainController extends RestController {

    public function __construct() {
        parent::__construct();
    }

    protected function setHeaders( $token = null ) {
        $this->output->set_header( 'Access-Control-Allow-Headers: Origin, X-Requested-With, Content-type, Accept, Authorization' );
        $this->output->set_header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS' );
        $this->output->set_header( 'Access-Control-Allow-Origin: *' );
        if ( isset( $token ) ) {
            $this->output->set_header( 'Access-Control-Expose-Headers: Authorization' );
            $this->output->set_header( 'Authorization: Bearer ' . $token );
        }

    }

    protected function _parse_post() {
        if ( $this->request->format === 'json' ) {
            //Truc per tal que el JSON quedi ben carregat ( parsejat ) a $_POST
            $_POST = json_decode( file_get_contents( 'php://input' ), true );
        }
        parent::_parse_post();
    }

    protected function setOptions() {
        $this->output->set_header( 'Access-Control-Allow-Headers: Origin, X-Requested-With, Content-type, Accept, Authorization, Access-Control-Expose-Headers' );
        $this->output->set_header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS' );
        $this->output->set_header( 'Access-Control-Allow-Origin: *' );
        $this->output->set_header( 'Access-Control-Expose-Headers: Authorization' );
        // $this->output->set_header( 'Authentication: Beared xxx' );

        $this->response( NULL, RestController::HTTP_OK );
    }

    private function generateToken() {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen( $characters );
        $token = '';
        for ( $i = 0; $i < 20; ++$i ) {
            $token .= $characters[rand( 0, $charactersLength - 1 )];
        }
        return $token;
    }
}
