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

    public function skillsByClass_get() {
        parent::setOptions();
    }
    protected function skillsByClass_get() {
        $class = $this->get( 'class' );
        $retmsg = '';
        $code = '';

        if ( parent::isTokenValid() ) {
            $skills = $this->skill->skillsByClass( $class );
            if ( count( $skills ) > 0 ) {
                $retmsg = $skills;
                $code = parent::HTTP_OK;
                $this->setHeaders();
            }
        } else {
            $retmsg = 'Token de sesión inválido';
            $code = parent::HTTP_UNAUTHORIZED;
        }

        $this->response( $retmsg, $code );
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
}
