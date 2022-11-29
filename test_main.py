import unittest
import main


class TestCalc(unittest.TestCase):
    def test_add(self):
        self.assertEqual(main.add(4, 1), 5)

    def test_minus(self):
        self.assertEqual(main.minus(5, 2), 3)

    def multiply(self):
        self.assertEqual(main.multiply(5, 2), 10)

    def test_divide(self):
        self.assertEqual(main.divide(20, 10), 2)

        with self.assertRaises(ZeroDivisionError):
            main.divide(10, 0)

