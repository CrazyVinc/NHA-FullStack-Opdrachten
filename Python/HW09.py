#!/usr/bin/env python3

import unittest

class Testing(unittest.TestCase):
    def test_string(self):
        a = "hallo"
        b = "hallo"
        self.assertEqual(a, b)
        
if __name__ == "__main__":
    unittest.main()