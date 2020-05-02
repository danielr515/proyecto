<?php

use chriskacerguis\RestServer\RestController;

require_once( APPPATH . 'libraries/codeigniter-restserver/src/RestController.php' );
require_once( APPPATH . 'libraries/codeigniter-restserver/src/Format.php' );

class WS_LoginController extends RestController {

    public function __construct() {
        parent::__construct();

        $this->load->model( 'admin' );
    }

    protected function loginAdmin_get() {
        $uname =  $this->get( 'uname' );
        $passwd = $this->get( 'passwd' );
        $retmsg = '';
        $code = '';
        if ( !isset( $uname ) || !isset( $passwd ) ) {
            $restmsg = 'Falta nombre de usuario o contraseña.';
            $code = RestController::HTTP_BAD_REQUEST;
        } else {
            $user = $this->admin->getUserByLoginData( $uname, $passwd );
            if ( $user->getUname() != '' ) {
                $restmsg = 'Login correcto';
                $code = RestController::HTTP_OK;
            } else {
                $restmsg = 'Datos incorectos';
                $code = RestController::HTTP_UNAUTHORIZED;
            }
        }
        // $this->setHeaders();
        $this->response( $retmsg, $code );
    }

    protected function setHeaders( $token = null ) {
        $this->output->set_header( 'Access-Control-Allow-Headers: Origin, X-Requested-With, Content-type, Accept' );
        $this->output->set_header( 'Access-Control-Allow-Methods: GET, POST, OPTIONS' );
        $this->output->set_header( 'Access-Control-Allow-Origin: *' );
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
