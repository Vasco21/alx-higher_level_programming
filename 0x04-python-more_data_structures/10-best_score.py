#!/usr/bin/python3
# 10-best_score.py

def best_score(a_dictionary):

    if not isinstance(a_dictionary, dict) or len(a_dictionary) == 0:
        return None

    array = list(a_dictionary.keys())[0]
    num = a_dictionary[array]
    for x, y in a_dictionary.items():
        if y > num:
            num = y
            array = y
    return (array)
