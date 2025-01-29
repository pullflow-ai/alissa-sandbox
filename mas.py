# Intentionally bad Python code

# Function with poor naming and unclear purpose
def do_thing(a, b, c):
    result = a + b * c  # No explanation of what this calculation means
    print("Result is: ", result)  # Side effect in a utility function
    return

do_thing(1, 2, 3)

# Hardcoded values and lack of flexibility
def calculate_discount(price):
    discount = price * 0.10  # Hardcoded discount rate
    return price - discount

print(calculate_discount(100))
print(calculate_discount(200))

# Function with unreachable code
def unreachable_example(x):
    if x > 10:
        return "Greater than 10"
    else:
        return "Less than or equal to 10"
        print("This will never be printed")  # Unreachable code

print(unreachable_example(5))

# Incorrect use of Python built-ins
def find_maximum(numbers):
    max = 0  # Shadowing built-in `max` function
    for n in numbers:
        if n > max:
            max = n
    return max

print(find_maximum([-1, -2, -3]))  # Doesn't handle negative numbers correctly

# Poor handling of mutable global variables
my_list = []

def add_to_list(item):
    my_list.append(item)  # Modifies global variable directly

add_to_list(1)
add_to_list(2)
print(my_list)

# Incomplete docstring
def bad_docstring_function(a, b):
    """
    This function does something with two numbers.
    """
    return a * b

print(bad_docstring_function(2, 3))

# Misuse of `try` block
def bad_error_handling():
    try:
        1 / 0  # Will always raise an exception
    finally:
        print("This will always run, even with the exception")  # Misleading design

bad_error_handling()

# Unnecessary list conversion
def sum_numbers(numbers):
    return sum(list(numbers))  # Unnecessary conversion to list

print(sum_numbers((1, 2, 3)))

# Incorrect handling of exceptions
def convert_to_int(value):
    try:
        return int(value)
    except ValueError as e:
        print("Conversion failed:", e)  # Swallows the error, doesn't propagate it

print(convert_to_int("123"))
print(convert_to_int("abc"))

# Poor use of inheritance
class Animal:
    def make_sound(self):
        print("Some generic sound")

class Dog(Animal):
    def make_sound(self):
        super.make_sound()  # Calls the parent class method unnecessarily
        print("Bark")

dog = Dog()
dog.make_sound()

# Function that unnecessarily modifies input
def modify_and_return(numbers):
    for i in range(len(numbers)):
        numbers[i] *= 2  # Modifies the input list directly
    return numbers

my_numbers = [1, 2, 3]
print(modify_and_return(my_numbers))
print(my_numbers)  # Input list is unexpectedly modified
