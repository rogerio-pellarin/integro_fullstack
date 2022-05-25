#!/usr/bin/python3
"""Module for Test1"""
import unicodedata


def normilizator(s: str) -> str:
    """
    normilizator transform to lower cases, removes acute accent, spaces, and
    commas from a string

    Args:
        string (str): input string

    Returns:
        string: normalized string
    """
    s = s.lower()
    s = s.replace(" ", "")  # removes whitespaces
    s = s.replace(",", "")
    trans_tab = dict.fromkeys(map(ord, u'\u0301\u0308'), None)
    s = unicodedata.normalize(
        'NFKC', unicodedata.normalize('NFKD', s).translate(trans_tab))
    return s


def is_palindrome(s: str) -> bool:
    """
    palyndome function that determines if string is a palyndome
    (case insensitive ignoring white spaces)

    Args:
        s (str): input string

    Returns:
        bool: True if it is a palyndome, False otherwise
    """
    # converts all string to lower case for it to be case insensitive
    if not isinstance(s, str):
        raise TypeError("Input is not a string")
    s = normilizator(s)
    backward_string = s[::-1]

    return s == backward_string


if __name__ == '__main__':
    # s = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla"
    s = 'í'
    d = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla"
    e = 155
    response = is_palindrome(e)
    print(response)
