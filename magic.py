# Intentionally bad Python code

# Function with unnecessary complexity and wrong type annotations
def multiply(a: str, b: str) -> int:  # Incorrect type annotations
    result = 0
    for i in range(int(b)):
        result += int(a)  # Casting repeatedly inside the loop
    return result

print(multiply("5", "3"))

# Bad recursion without base case
def infinite_recursion(n):
    print(n)
    infinite_recursion(n - 1)  # No base case causes infinite recursion

# infinite_recursion(5)  # Uncommenting will cause a stack overflow

# Ignoring case sensitivity issues
def check_password(password):
    if password == "Admin123":  # Case-sensitive comparison without flexibility
        return "Access granted"
    else:
        return "Access denied"

print(check_password("admin123"))  # Will incorrectly deny access

# Function that doesn't handle exceptions
def convert_to_float(value):
    return float(value)  # No try-except block to handle invalid input

# print(convert_to_float("abc"))  # Uncommenting will raise a ValueError

# Using `while True` unnecessarily
def print_numbers(n):
    i = 0
    while True:
        print(i)
        i += 1
        if i >= n:
            break  # Could have used a for loop instead

print_numbers(5)

# Poor usage of global variables
global_count = 0

def increment_global():
    global global_count  # Global variable modification
    global_count += 1

increment_global()
increment_global()
print(global_count)  # Global variables can introduce unpredictable side effects

# Incorrect list comprehension usage
def get_positive_numbers(numbers):
    return [n for n in numbers if n > 0 else "Negative"]  # Incorrect conditional syntax

print(get_positive_numbers([1, -2, 3, -4, 5]))

# Poorly designed class with unnecessary logic
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def calculate_area(self):
        if self.width < 0 or self.height < 0:  # Should handle this in constructor
            return "Invalid dimensions"
        return self.width * self.height

rect = Rectangle(5, -3)
print(rect.calculate_area())  # Poor design allows negative dimensions

# Overwriting built-in names
def list(input_list):
    return sorted(input_list)

print(list([3, 1, 2]))  # Overwrites the built-in `list` function

# Incorrect usage of mutable default arguments
def append_element(element, collection=[]):
    collection.append(element)
    return collection

print(append_element(1))
print(append_element(2))  # Shared state between function calls

# Redundant code and poor readability
def is_odd(number):
    if number % 2 != 0:
        return True
    else:
        return False  # Could simply return `number % 2 != 0`

print(is_odd(5))
print(is_odd(4))

# Hardcoded magic numbers
def calculate_tax(income):
    if income > 50000:
        return income * 0.3  # Magic number for tax rate
    else:
        return income * 0.2  # Magic number for tax rate

print(calculate_tax(60000))
print(calculate_tax(30000))

# Function with incorrect output
def reverse_string(s):
    reversed_string = ""
    for i in range(len(s)):
        reversed_string += s[i]  # Inefficient string concatenation
    return reversed_string

print(reverse_string("hello"))

# Function with logical errors
def count_even_numbers(numbers):
    count = 0
    for num in numbers:
        if num % 2 == 1:  # Logical error: should check for even numbers
            count += 1
    return count

print(count_even_numbers([1, 2, 3, 4, 5]))

