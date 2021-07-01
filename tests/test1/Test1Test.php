<?php

require_once('./vendor/autoload.php');
require_once('./../../test1.php');

use PHPUnit\Framework\TestCase;

class PalindromeTest extends TestCase
{
    public function test1()
    {
        $text = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
        $result = is_palindrome($text);

        $this->assertEquals(true, $result);
    }

    public function test2()
    {
        $text = "A mamá Roma le aviva el amor a papá y a papá Roma le aviva el amor a mamá";
        $result = is_palindrome($text);

        $this->assertEquals(true, $result);
    }
}