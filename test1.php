<?php

function is_palindrome($input) {
  $utf8 = array(
    '/[áàâãªä]/u'   =>   'a',
    '/[íìîï]/u'     =>   'i',
    '/[éèêë]/u'     =>   'e',
    '/[óòôõºö]/u'   =>   'o',
    '/[úùûü]/u'     =>   'u',
  );
  $inputWithoutAccents = preg_replace(array_keys($utf8), array_values($utf8), $input);
  $inputSpecials = preg_replace('/[^A-Za-z0-9\-]/', '', $inputWithoutAccents);
  $InputInUppercase = strtoupper($inputSpecials);
  $invertString = strrev($InputInUppercase);
  return strcmp($InputInUppercase, $invertString)==0 ? true :  false;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));