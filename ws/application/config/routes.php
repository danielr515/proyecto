<?php
defined( 'BASEPATH' ) OR exit( 'No direct script access allowed' );

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the 'welcome' class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['prueba'] = 'ws/WS_PruebaController/getPrueba';
$route['loginAdmin'] = 'ws/WS_LoginController/loginAdmin';
$route['logoutAdmin'] = 'ws/WS_LoginController/logoutAdmin';
$route['registerAdmin'] = 'ws/WS_LoginController/registerAdmin';
$route['loginPlayer'] = 'ws/WS_LoginController/loginPlayer';
$route['logoutPlayer'] = 'ws/WS_LoginController/logoutPlayer';
$route['registerPlayer'] = 'ws/WS_LoginController/registerPlayer';
$route['types'] = 'ws/WS_TypesController/types';
$route['typesWithWeakness'] = 'ws/WS_TypesController/typesWithWeakness';
$route['addType'] = 'ws/WS_TypesController/addType';
$route['editTypesRelation'] = 'ws/WS_TypesController/editTypesRelation';
$route['characters'] = 'ws/WS_CharactersController/characters';
$route['addCharacter'] = 'ws/WS_CharactersController/addCharacter';
$route['skills'] = 'ws/WS_SkillsController/skills';
$route['skillsByClass'] = 'ws/WS_SkillsController/skillsByClass';
$route['addSkill'] = 'ws/WS_SkillsController/addSkill';


$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;
