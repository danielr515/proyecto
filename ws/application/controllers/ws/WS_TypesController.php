<?php

use chriskacerguis\RestServer\RestController;

require_once( APPPATH . 'libraries/codeigniter-restserver/src/RestController.php' );
require_once( APPPATH . 'libraries/codeigniter-restserver/src/Format.php' );

class WS_TypesController extends WS_MainController {

    public function __construct() {
        parent::__construct();

        $this->load->model( 'type' );
    }
    protected function types_get() {
        $this->type->getAllTypes();
    }
}
