<?php

require_once( APPPATH . 'controllers/ws/WS_MainController.php' );

class WS_SkillsController extends WS_MainController {

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

    public function skillsByClass_options() {
        parent::setOptions();
    }
    protected function skillsByClass_get() {
        $class = $this->get( 'class' );
        $retmsg = '';
        $code = '';

        if ( parent::isTokenValid() ) {
            $skills = $this->skill->getSkillsByClass( $class );
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

    protected function addSkill_options() {
        parent::setOptions();
    }

    protected function addSkill_post() {
        $skill = $this->post( 'skill' );
        $adminUname = $this->post( 'admin' );

        $authorization = $this->input->get_request_header( 'Authorization' );
        $token = explode( ' ', $authorization );
        if ( count( $token ) > 1 ) {
            $token = $token[1];
        }
        $retmsg = '';
        $code = '';
        if ( $skill['name'] == '' || $skill['description'] == '' || $skill['class'] == '' || $skill['mode'] == '' || $skill['cost'] == '' || $skill['damage'] == '' || $skill['type'] == '' ) {
            $retmsg = 'Faltan datos obligatorios';
            $code = parent::HTTP_BAD_REQUEST;
        } else {
            if ( !isset( $adminUname ) || !isset( $token ) ) {
                $retmsg = 'Datos erróneos';
                $code = parent::HTTP_UNAUTHORIZED;
            } else {
                $admin = $this->admin->getUserByLogoutData( $adminUname, $token );
                if ( $admin->getUname() != '' ) {
                    if ( !$this->skill->existsSkillByName( $skill ) ) {
                        $return = $this->character->addNewSkill( $skill );
                        if ( $return ) {
                            $retmsg = 'Adición correcta';
                            $code = parent::HTTP_OK;
                        } else {
                            $retmsg = 'Error al insertar';
                            $code = parent::HTTP_INTERNAL_ERROR;
                        }
                    } else {
                        $retmsg = 'Ya existe la habilidad que estás intentando insertar';
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
