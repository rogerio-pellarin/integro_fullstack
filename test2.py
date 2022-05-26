#!/usr/bin/python3
"""Module for solution for test2
"""
from typing import List

GrandList = List[List[List[List[int]]]]


def package(input_list: List[int], n: int) -> List[int]:
    """
    package generates a list of lists acording to the n distribution

    Args:
        input_list (List[int| List]): list to be packaged into a list of lists
        n (int): number of elements per package

    Returns:
        List[int]: List of lists acording to the n distribution
    """
    packages = []
    box = []
    idx = 1
    for element in input_list:
        box.append(element)
        if idx % n == 0:
            packages.append(box)
            box = []
        idx += 1
    if box:
        packages.append(box)
    return packages
    all()


def apples(input_list: List[int], apples_per_box: int, boxes_per_package: int,
           packages_per_friend: int) -> GrandList:
    """
    apples Calculates and makes list of lists according to apples, boxes and friends.

    Args:
        input_list (List[int]): Input list of apples
        apples_per_box (int): number of apples per box
        boxes_per_package (int): number of boxes per packages
        packages_per_friend (int): number of packages per friend

    Returns:
        GrandList: _description_
    """
    if not isinstance(input_list, list):
        raise TypeError("input list is not list")
    if input_list == [] or not all(isinstance(item, int) for item in input_list):
        raise TypeError("element in list is not an integer")
    if not all(isinstance(element, int) for element in [apples_per_box, boxes_per_package, packages_per_friend]):
        raise TypeError("input is not an int")
    boxes = package(input_list, apples_per_box)
    packages = package(boxes, boxes_per_package)
    friends = package(packages, packages_per_friend)

    return friends


def print_list(l: GrandList) -> None:
    """
    print_list prints apple packaging in order

    Args:
        l (GrandList): Great list of packages
    """
    cf, cp, cb = 1, 1, 1
    for friend in l:
        print(f"friend {cf}:")
        cf += 1
        for package in friend:
            print(f"\tpackage{cp}:")
            cp += 1
            for box in package:
                print(f"\t\tbox: {cb}: {box}")
                cb += 1


if __name__ == '__main__':
    input_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                  13, 14, 15, 16, 17]

    result = apples(input_list, 4, 2, 2)
    print_list(result)
