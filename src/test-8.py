import math

def calculate_area(radius):
    # Missing type check, should verify radius is a number
    if radius < 0:
        # Logic error: Should raise an exception or handle negative radius appropriately
        print("Radius cannot be negative.")
    return math.pi * radius ** 2  # Will return None in case of negative radius

def greet_user(name):
    # Potential issue: name might be None or empty, no check for that
    print(f"Hello, {name}!")

def divide_numbers(a, b):
    try:
        # Logic error: Missing check for zero division
        return a / b
    except:
        # Generic exception handler, will catch other unintended exceptions
        print("An error occurred.")

def open_file(file_name):
    try:
        # Potential issue: file could not exist, no check for file existence
        file = open(file_name, "r")
        return file.read()
    finally:
        file.close()  # Potential issue: will fail if open() fails, causing an error

def calculate_sum_of_list(numbers):
    # Logic error: Assuming 'numbers' is always a list
    return sum(numbers)  # Will raise an error if 'numbers' is not a list

# Missing call protection (if __name__ == "__main__")
print(calculate_area(-5))
greet_user(None)
print(divide_numbers(10, 0))
print(open_file("non_existent_file.txt"))
print(calculate_sum_of_list(123))  # Intentional type error
