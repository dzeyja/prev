<?php
    require_once($_SERVER['DOCUMENT_ROOT'].'/smartbasket/php/phpmailer/phpmailer.php');

		// *** SMTP *** //

		  require_once($_SERVER['DOCUMENT_ROOT'].'/smartbasket/php/phpmailer/smtp.php');
		  const HOST = 'smtp.yandex.ru';
		  const LOGIN = 'daulet.zharylkasynov@yandex.ru';
		  const PASS = 'mcokpjjcunoepqgf';
		  const PORT = '465';

		// *** /SMTP *** //
   
    const SENDER = 'daulet.zharylkasynov@yandex.kz';
    const CATCHER = 'zharylkasynov_d@mail.ru';
    const SUBJECT = 'Заявка с сайта';
    const CHARSET = 'UTF-8';
    