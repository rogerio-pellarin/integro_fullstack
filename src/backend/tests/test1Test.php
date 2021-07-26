<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;

require_once("src/backend/test1.php");

final class test1Test extends TestCase
{
    public function test_is_palindrome()
    {
        $string_one = is_palindrome("Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla");
        $string_two = is_palindrome("this is not a palindrome");
        $string_three = is_palindrome("Adán – nada");
        $number = is_palindrome(7);

        $this->assertTrue($string_one);
        $this->assertFalse($string_two);
        $this->assertTrue($string_three);
        $this->assertFalse($number);
    }
}
