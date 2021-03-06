<?php

use chriskacerguis\RestServer\RestController;

require_once( APPPATH . 'libraries/codeigniter-restserver/src/RestController.php' );
require_once( APPPATH . 'libraries/codeigniter-restserver/src/Format.php' );

class WS_LoginController extends RestController {

    public function __construct() {
        parent::__construct();

        $this->load->model( 'admin' );
        $this->load->model( 'player' );

    }

    protected function loginAdmin_get() {
        $uname =  $this->get( 'uname' );
        $passwd = $this->get( 'passwd' );
        $retmsg = '';
        $code = '';
        if ( !isset( $uname ) || !isset( $passwd ) ) {
            $retmsg = 'Falta nombre de usuario o contraseña.';
            $code = RestController::HTTP_BAD_REQUEST;
        } else {
            $user = $this->admin->getUserByLoginData( $uname, $passwd );
            if ( $user->getUname() != '' ) {
                $token = $this->generateToken();
                $user->setLastSessionToken( $token, 'online' );
                $this->setHeaders( $token );
                $retmsg = 'Login correcto';
                $code = RestController::HTTP_OK;
            } else {
                $retmsg = 'Datos erróneos';
                $code = RestController::HTTP_UNAUTHORIZED;
            }
        }
        // $this->setHeaders();
        $this->response( $retmsg, $code );
    }

    protected function logoutAdmin_options() {
        $this->setOptions();
    }
    protected function registerAdmin_options() {
        $this->setOptions();
    }

    protected function logoutAdmin_post() {
        $uname =  $this->post( 'uname' );
        $authorization = $this->input->get_request_header( 'Authorization' );
        $token = explode( ' ', $authorization );
        if ( count( $token ) > 1 ) {
            $token = $token[1];
        }
        $retmsg = '';
        $code = '';
        if ( !isset( $token ) || !isset( $uname ) ) {
            $retmsg = 'Falta el usuario o el token de autenticación';
            $code = RestController::HTTP_BAD_REQUEST;
        } else {
            $user = $this->admin->getUserByLogoutData( $uname, $token );
            if ( $user->getUname() != '' ) {
                $user ->setLastSessionToken( '', 'offline' );
                $this->setHeaders();
                $retmsg = 'Logout correcto';
                $code = RestController::HTTP_OK;
            } else {
                $retmsg = 'Datos erróneos';
                $code = RestController::HTTP_UNAUTHORIZED;
            }
        }

        $this->response( $retmsg, $code );
    }

    protected function registerAdmin_post() {
        $user = $this->post( 'user' );
        $adminUname = $this->post( 'admin' );

        $authorization = $this->input->get_request_header( 'Authorization' );
        $token = explode( ' ', $authorization );
        if ( count( $token ) > 1 ) {
            $token = $token[1];
        }
        $retmsg = '';
        $code = '';
        if ( $user['email'] == '' || $user['uname'] == '' || $user['passwd'] == '' ) {
            $retmsg = 'Faltan los datos de registro';
            $code = RestController::HTTP_BAD_REQUEST;
        } else {
            if ( !isset( $adminUname ) || !isset( $token ) ) {
                $retmsg = 'Datos erróneos';
                $code = RestController::HTTP_UNAUTHORIZED;
            } else {
                $admin = $this->admin->getUserByLogoutData( $adminUname, $token );
                if ( $admin->getUname() != '' ) {
                    if ( !$this->admin->existsAdmin( $user ) ) {
                        $return = $this->admin->registerNewAdmin( $user );
                        if ( $return ) {
                            $retmsg = 'Registro correcto';
                            $code = RestController::HTTP_OK;
                        } else {
                            $retmsg = 'Error al insertar';
                            $code = RestController::HTTP_INTERNAL_ERROR;
                        }
                    } else {
                        $retmsg = 'El nombre de usuario o el email ya está en uso';
                        $code = RestController::HTTP_BAD_REQUEST;
                    }
                } else {
                    $retmsg = 'Datos erróneos';
                    $code = RestController::HTTP_UNAUTHORIZED;
                }
            }

        }

        $this->response( $retmsg, $code );
    }

    protected function loginPlayer_options() {
        $this->setOptions();
    }
    protected function loginPlayer_get() {
        $uname =  $this->get( 'uname' );
        $passwd = $this->get( 'passwd' );
        $retmsg = '';
        $code = '';
        if ( !isset( $uname ) || !isset( $passwd ) ) {
            $retmsg = 'Falta nombre de usuario o contraseña.';
            $code = RestController::HTTP_BAD_REQUEST;
        } else {
            if ( $this->player->login( $uname, $passwd ) ) {
                $token = $this->generateToken();
                $result = $this->player->addToken( $uname, $token );
                if ( $result ) {
                    $this->setHeaders( $token );
                    $retmsg = 'Login correcto';
                    $code = RestController::HTTP_OK;
                } else {
                    $retmsg = 'Error de servidor';
                    $code = RestController::HTTP_INTERNAL_ERROR;
                }
            } else {
                $retmsg = 'Datos erróneos';
                $code = RestController::HTTP_UNAUTHORIZED;
            }
        }
        $this->response( $retmsg, $code );
    }
    protected function registerPlayer_options() {
        $this->setOptions();
    }
    protected function registerPlayer_post() {
        $user = $this->post( 'user' );

        $retmsg = '';
        $code = '';
        if ( $user['email'] == '' || $user['uname'] == '' || $user['passwd'] == '' ) {
            $retmsg = 'Faltan los datos de registro';
            $code = RestController::HTTP_BAD_REQUEST;
        } else {
            if ( !$this->player->existsUser( $user ) ) {
                $return = $this->player->registerPlayer( $user );
                if ( $return ) {
                    $retmsg = 'Registro correcto';
                    $code = RestController::HTTP_OK;
                } else {
                    $retmsg = 'Error al registrar';
                    $code = RestController::HTTP_INTERNAL_ERROR;
                }
            } else {
                $retmsg = 'El nombre de usuario o el email ya está en uso';
                $code = RestController::HTTP_BAD_REQUEST;
            }
        }
        $this->setHeaders();
        $this->response( $retmsg, $code );
    }

    protected function logoutPlayer_options() {
        $this->setOptions();
    }

    protected function logoutPlayer_post() {
        $uname =  $this->post( 'uname' );
        $authorization = $this->input->get_request_header( 'Authorization' );
        $token = explode( ' ', $authorization );
        if ( count( $token ) > 1 ) {
            $token = $token[1];
        }
        $retmsg = '';
        $code = '';
        if ( $this->player->userAndTokenValid( $uname, $token ) ) {
            $this->player->logout( $uname );
            $retmsg = 'Logout correcto';
            $code = RestController::HTTP_OK;
        } else {
            $retmsg = 'Datos erróneos';
            $code = RestController::HTTP_UNAUTHORIZED;
        }
        $this->setHeaders();
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
