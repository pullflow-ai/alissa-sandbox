# Intentionally bad Python code

# Function with poor error handling and variable names
def divide(a, b):
    result = a / b
    return result

print(divide(10, 0))  # Division by zero without any error handling

# Inefficient looping with bad variable naming
def process_data(data_list):
    for i in range(len(data_list)):  # Inefficient iteration
        print("Item: " + data_list[i])  # String concatenation instead of format strings

data = [1, 2, 3, 4, 5]
process_data(data)

# Use of mutable default argument
def append_to_list(value, my_list=[]):
    my_list.append(value)  # Mutates the default list
    return my_list

print(append_to_list(1))
print(append_to_list(2))  # Unexpected behavior, shares the same list

# Global variable usage
global_var = 10

def modify_global():
    global_var = 20  # Creates a new local variable instead of modifying the global

modify_global()
print(global_var)  # Output is still 10, not 20

# Function with unclear purpose and poor documentation
def mystery_function(x, y):
    return x + y if x > 0 else x - y  # Confusing logic with no explanation

print(mystery_function(5, 10))
print(mystery_function(-5, 10))

# Class with poor encapsulation
class Car:
    def __init__(self, make, model):
        self.make = make
        self._model = model  # Underscore suggests private, but is still accessible

    def print_details(self):
        print(f"Car Make: {self.make}, Model: {self._model}")

car = Car("Toyota", "Camry")
car.print_details()
car._model = "Corolla"  # Directly modifying what should be a "private" attribute
car.print_details()

# Using list comprehensions inappropriately
squares = [x ** 2 for x in range(10) if x % 2]  # Confusing usage of list comprehension

# Function with no return value
def calculate_sum(a, b):
    sum = a + b
    print(sum)  # Only prints the result, doesn't return it

result = calculate_sum(5, 3)
print(result)  # None, because the function doesn't return anything

# Poor use of exception handling
def read_file(file_path):
    try:
        file = open(file_path, 'r')  # No context manager
        data = file.read()
        return data
    except:
        print("An error occurred")  # Catches all exceptions, no specific error handling

read_file("non_existent_file.txt")

# Function with incorrect docstring
def add(a, b):
    """
    Multiplies two numbers together.
    """
    return a + b

print(add(5, 10))  # The function actually adds, not multiplies

# Nested functions with bad scoping
def outer_function(x):
    def inner_function(y):
        return x + y
    return x * inner_function(5)  # Unintuitive usage of nested function

print(outer_function(2))
