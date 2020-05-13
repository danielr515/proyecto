<?php

use WS_MainController;

class WS_TypesController extends WS_MainController {

    public function __construct() {
        parent::__construct();

        $this->load->model( 'type' );
    }
    protected function types_get() {
        $this->type->getAllTypes();
    }
}
