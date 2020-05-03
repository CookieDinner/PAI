<?php
App::uses('AppModel', 'Model');
/**
 * Employee Model
 *
 */
class Employee extends AppModel {
	var $validate = array(
		'nazwisko' => array('rule' => 'notBlank'), 
		'etat' => array('rule' => 'notBlank'),
		'placa_pod' => array(
				'rule' => array('range', 0, 2000),
				'message' => 'Placa podstawowa musi być między 0 a 2000'
			)
		);
}
