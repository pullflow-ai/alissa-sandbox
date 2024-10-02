import os

def read_file(file_path):
    # Missing error handling, potential issue if file doesn't exist
    with open(file_path, 'r') as file:
        return file.read()

def divide_numbers(a, b):
    # Missing division by zero check
    return a / b

def print_environment_variable(var_name):
    # Potential KeyError if the environment variable doesn't exist
    print(f"Value of {var_name}: {os.environ[var_name]}")

def process_list(items):
    # Logic error: index out of range if list is empty
    first_item = items[0]
    print(f"First item: {first_item}")

# Missing __main__ check to prevent execution when imported
file_content = read_file("non_existent_file.txt")
print(f"File Content: {file_content}")

result = divide_numbers(10, 0)
print(f"Division Result: {result}")

print_environment_variable("HOME")

process_list([])  # List is empty, will raise an IndexError
