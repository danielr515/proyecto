<?php

require_once( APPPATH . 'controllers/ws/WS_MainController.php' );

class WS_TypesController extends WS_MainController {

    public function __construct() {
        parent::__construct();

        $this->load->model( 'type' );
    }
    protected function types_get() {
        $this->type->getAllTypes();
    }
}
