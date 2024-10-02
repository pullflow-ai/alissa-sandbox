def calculate_average(numbers):
    if len(numbers) == 0:
        # Error: Returning 0 for an empty list might not be appropriate
        return 0
    return sum(numbers) / len(numbers)

def read_file(file_path):
    try:
        file = open(file_path, "r")
        content = file.read()
        # Missing file close, which can cause a resource leak
        return content
    except FileNotFoundError:
        print(f"File {file_path} not found.")
    # Missing return in case of an error

def divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        # Error: Printing error but not returning anything, should return a default value or handle it
        print("Cannot divide by zero.")

def print_uppercase(message):
    # Error: message might be None, causing an exception
    print(message.upper())

# Running the functions without input validation or checks
print(calculate_average([]))  # Should handle empty list more appropriately
print(read_file("non_existent_file.txt"))
print(divide(10, 0))
print_uppercase(None)  # Will raise an AttributeError
