<?php
    use chriskacerguis\RestServer\RestController;	//Ús del namespace
	require_once(APPPATH . 'libraries/codeigniter-restserver/src/RestController.php');
	require_once(APPPATH . 'libraries/codeigniter-restserver/src/Format.php');

    class WS_PruebaController extends RestController {

        public function __construct() {
			parent::__construct();
		}

        protected function getPrueba_get() {
			$retmsg = array(
				array(
					"id" => 1,
					"nombre" => "prueba"
				),
				array(
					"id" => 2,
					"nombre" => "otro"
				)
			);
			$this->setHeaders();
            $this->response($retmsg, RestController::HTTP_OK);
		}
		
		protected function setHeaders($token = null) {
            $this->output->set_header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-type, Accept");
            $this->output->set_header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
			$this->output->set_header("Access-Control-Allow-Origin: *");
			$this->output->set_header("Access-Control-Expose-Headers: Authorization");
			$this->output->set_header("Authorization: untokendpm");
        }
    }
?>
