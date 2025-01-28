# Function to calculate the sum of a list of numbers
def calculate_sum(numbers):
    total = 0
    for i in range(len(numbers)):  # Inefficient looping
        total += numbers[i]
    return total

print(calculate_sum(1, 2, 3, 4))  # Incorrect argument passing

# Function to read a file and print its contents
def read_file(file_path):
    file = open(file_path, "r")  # File handle not closed
    data = file.read()
    return data
    file.close()  # This line is never reached

print(read_file("nonexistent_file.txt"))  # No error handling for missing file

# Function to divide two numbers
def divide_numbers(a, b):
    return a / b  # No handling for division by zero

print(divide_numbers(10, 0))  # Runtime error due to division by zero

# Global variable usage and side effects
global_list = [1, 2, 3]

def add_to_global_list(value):
    global_list.append(value)  # Modifies global state
    return global_list

print(add_to_global_list(4))
print(global_list)  # Global variable state may be unpredictable

# Incorrect usage of mutable default arguments
def append_to_list(value, my_list=[]):
    my_list.append(value)  # Mutates the default argument
    return my_list

print(append_to_list(1))
print(append_to_list(2))  # Unexpected behavior due to shared default list
