<?php

require_once( APPPATH . 'controllers/ws/WS_MainController.php' );

class WS_TypesController extends WS_MainController {

    public function __construct() {
        parent::__construct();

        $this->load->model( 'skill' );
    }

    public function skills_options() {
        parent::setOptions();
    }
    protected function skills_get() {
        $retmsg = '';
        $code = '';

        if ( parent::isTokenValid() ) {
            $skills = $this->skill->getAllSkills();
            if ( count( $skills ) > 0 ) {
                $retmsg = $skills;
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
