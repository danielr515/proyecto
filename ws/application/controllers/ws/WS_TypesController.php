<?php

require_once( APPPATH . 'controllers/ws/WS_MainController.php' );

class WS_TypesController extends WS_MainController {

    public function __construct() {
        parent::__construct();

        $this->load->model( 'type' );

    }
    protected function types_get() {
        $retmsg = '';
        $code = '';

        if ( parent::isTokenValid() ) {
            $types = $this->type->getAllTypes();
            if ( count( $types ) > 0 ) {
                $retmsg = $types;
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
