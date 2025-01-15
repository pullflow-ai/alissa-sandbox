import math

def calculate_circle_area(radius):
    # Missing type check: radius could be non-numeric
    if radius < 0:
        print("Radius cannot be negative")  # Should raise an error instead of printing
    return math.pi * radius * radius  # Logic error: No return for negative radius

def greet(name):
    # Missing check if name is empty or None
    print("Hello " + name)  # Will raise an error if name is None

def find_maximum(numbers):
    # Potential issue: numbers might be None or empty
    max_num = numbers[0]  # Will raise an error if numbers is an empty list
    for number in numbers:
        if number > max_num:
            max_num = number
    return max_num

def read_file(file_path):
    try:
        with open(file_path, "r") as file:
            return file.read()
    except FileNotFoundError:
        print(f"File at {file_path} not found.")
    # No return in case of an error, function will return None

# Missing main check
radius_area = calculate_circle_area(-10)
print(f"Area of the circle: {radius_area}")

greet(None)  # Should handle None gracefully

print(find_maximum([]))  # Will raise IndexError

print(read_file("non_existent_file.txt"))
