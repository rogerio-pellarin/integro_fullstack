#!/usr/bin/python3
"""Unittest for test1
"""

from test1 import is_palindrome
from test2 import apples
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


class TestTest2(unittest.TestCase):
    l1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
          13, 14, 15, 16, 17]
    l2 = []
    l3 = [1, 2, "3", 4]

    def test_input_values(self):
        self.assertRaises(TypeError, apples, self.l2, 4, 2, 1)
        self.assertRaises(TypeError, apples, self.l3, 4, 2, 1)
        self.assertRaises(TypeError, apples, self.l3, 4, 2, 1)

    def test_reslts(self):
        result = apples(self.l1, 4, 2, 2)
        expexted = [[[[1, 2, 3, 4], [5, 6, 7, 8]], [
            [9, 10, 11, 12], [13, 14, 15, 16]]], [[[17]]]]
        self.assertEqual(result, expexted)
