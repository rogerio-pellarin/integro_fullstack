<?php

/**
 * Check if is a palindrome
 * 
 * @param string $input
 * @return bool
 */
function is_palindrome(string $input) {    

    // Drop innecesary characters and convert to array
    $obverse = str_split(cleanText($input));
    $reverse = array_reverse(str_split(cleanText($input)));

    //Get string
    $obverseSentence = implode('', $obverse);
    $reverseSentence = implode('', $reverse);
    
    return $obverseSentence === $reverseSentence;
}

/**
 * Clean text in order to perform validations
 * 
 * @param string $text
 * @return string
 */
function cleanText(string $text) {
    
    $text = htmlentities($text, ENT_QUOTES, 'UTF-8');
    $text = strtolower($text);
    $patron = array (
        // Vocales
        '/\+/'          => '',
        '/&agrave;/'    => 'a',
        '/&egrave;/'    => 'e',
        '/&igrave;/'    => 'i',
        '/&ograve;/'    => 'o',
        '/&ugrave;/'    => 'u',

        '/&aacute;/'    => 'a',
        '/&eacute;/'    => 'e',
        '/&iacute;/'    => 'i',
        '/&oacute;/'    => 'o',
        '/&uacute;/'    => 'u',

        '/&acirc;/'     => 'a',
        '/&ecirc;/'     => 'e',
        '/&icirc;/'     => 'i',
        '/&ocirc;/'     => 'o',
        '/&ucirc;/'     => 'u',

        '/&atilde;/'    => 'a',
        '/&etilde;/'    => 'e',
        '/&itilde;/'    => 'i',
        '/&otilde;/'    => 'o',
        '/&utilde;/'    => 'u',

        '/&auml;/'      => 'a',
        '/&euml;/'      => 'e',
        '/&iuml;/'      => 'i',
        '/&ouml;/'      => 'o',
        '/&uuml;/'      => 'u',

        '/&auml;/'      => 'a',
        '/&euml;/'      => 'e',
        '/&iuml;/'      => 'i',
        '/&ouml;/'      => 'o',
        '/&uuml;/'      => 'u',

        // Otras letras y caracteres especiales
        '/&aring;/'     => 'a',
        '/&ntilde;/'    => 'n',

        // Signos de puntación y demas
        '/:/'           => '',
        '/;/'           => '',
        '/,/'           => '',
        '/ /'           => ''
    );
 
    return preg_replace(array_keys($patron), array_values($patron), $text);
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";

var_dump(is_palindrome($input));