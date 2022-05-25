#!/usr/bin/python3
"""Unittest for test1
"""

from test1 import is_palindrome
import unittest



class TestTest1(unittest.TestCase):
    string1 = 125
    string2 = "Mateo"
    string3 = "Allí por la tropa portado, traído a ese paraje de maniobras, \
        una tipa como capitán usar boina me dejara, pese a odiar toda tropa \
            por tal ropilla"

    def test_is_palindrome(self):
        self.assertRaises(TypeError, is_palindrome, self.string1)
        self.assertFalse(is_palindrome(self.string2))
        self.assertTrue(is_palindrome(self.string3))