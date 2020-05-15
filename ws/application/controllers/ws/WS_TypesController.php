<?php

require_once( APPPATH . 'controllers/ws/WS_MainController.php' );

class WS_TypesController extends WS_MainController {

    public function __construct() {
        parent::__construct();

        $this->load->model( 'type' );
        $this->load->model( 'typesrelation' );

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

    protected function typesWithWeakness_options() {
        parent::setOptions();
    }
    protected function typesWithWeakness_get() {
        $retmsg = '';
        $code = '';
        $types = $this->type->getAllTypes();

        if ( parent::isTokenValid() ) {
            $types = $this->type->getAllTypes();
            if ( count( $types ) > 0 ) {
                for ( $i = 0; $i<count( $types );
                $i++ ) {
                    $types[$i]['weakness'] = $this->typesrelation->getWeakness( $types[$i]['id'] );
                    $types[$i]['resistances'] = $this->typesrelation->getResistances( $types[$i]['id'] );
                }
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

    protected function addType_options() {
        parent::setOptions();
    }
    protected function addType_post() {
        $type = $this->post( 'type' );
        $adminUname = $this->post( 'admin' );

        $authorization = $this->input->get_request_header( 'Authorization' );
        $token = explode( ' ', $authorization );
        if ( count( $token ) > 1 ) {
            $token = $token[1];
        }
        $retmsg = '';
        $code = '';
        if ( $type['name'] == '' ) {
            $retmsg = 'Faltan datos obligatorios';
            $code = parent::HTTP_BAD_REQUEST;
        } else {
            if ( !isset( $adminUname ) || !isset( $token ) ) {
                $retmsg = 'Datos erróneos';
                $code = parent::HTTP_UNAUTHORIZED;
            } else {
                $admin = $this->admin->getUserByLogoutData( $adminUname, $token );
                if ( $admin->getUname() != '' ) {
                    if ( !$this->type->existTypeByName( $type ) ) {
                        $return = $this->type->addNewType( $type );
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
