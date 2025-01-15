def calculate_discount(price, discount):
    # No validation for non-numeric input
    if discount > 100 or discount < 0:
        print("Invalid discount percentage")  # Should raise an error instead of just printing
    return price - (price * discount / 100)

def open_file(file_path):
    try:
        file = open(file_path, 'r')
        content = file.read()
        # Missing file.close(), can cause a resource leak
        return content
    except FileNotFoundError:
        print(f"File {file_path} not found.")
        # Missing return or handling after error

def divide_numbers(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("Cannot divide by zero.")
        # Missing return or alternative action after catching exception

def print_message(message):
    # Error: No handling for None or empty message
    print(message.upper())

# Calling functions with potential issues
discounted_price = calculate_discount(100, 110)  # Invalid discount should be handled
print(f"Discounted price: {discounted_price}")

file_content = open_file("non_existent_file.txt")
print(file_content)

result = divide_numbers(10, 0)  # Division by zero
print(f"Division result: {result}")

print_message(None)  # Will raise an AttributeError
