# Intentionally bad Python code

# Function with redundant code and no type hints
def calculate_average(numbers):
    if len(numbers) > 0:  # Redundant check
        total = 0
        for n in numbers:
            total = total + n  # Inefficient way to calculate sum
        average = total / len(numbers)
        return average
    else:
        return None  # Mixing return types (float or None)

print(calculate_average([1, 2, 3, 4, 5]))
print(calculate_average([]))  # Function should handle empty lists more gracefully

# Function with a missing return statement
def is_even(number):
    if number % 2 == 0:
        return True
    # Missing return for odd numbers

print(is_even(2))
print(is_even(3))  # Will return None instead of False

# Inconsistent variable naming and scoping issues
def countOccurrences(list1, element):
    counter = 0
    for i in list1:  # Variable naming inconsistent with snake_case
        if i == element:
            counter += 1
    return counter

print(countOccurrences([1, 2, 2, 3, 4, 2], 2))

# Hardcoded values and magic numbers
def calculate_bmi(weight, height):
    bmi = weight / (height * height)  # No check for zero or negative height
    if bmi < 18.5:
        return "Underweight"
    elif bmi < 25:
        return "Normal weight"
    elif bmi < 30:
        return "Overweight"
    else:
        return "Obese"

print(calculate_bmi(70, 0))  # Division by zero error

# Class with poor design and functionality
class Student:
    def __init__(self, name, grades=[]):  # Mutable default argument
        self.name = name
        self.grades = grades

    def add_grade(self, grade):
        self.grades.append(grade)  # Modifies the shared default list

    def calculate_gpa(self):
        return sum(self.grades) / len(self.grades)  # No check for empty grades

student1 = Student("Alice")
student2 = Student("Bob")

student1.add_grade(90)
student2.add_grade(80)

print(student1.grades)  # Shared mutable state causes unexpected behavior
print(student2.grades)

# Incorrect use of lambda
square = lambda x, y: x * x  # Unused parameter 'y'
print(square(5, 10))

# Poorly written recursive function
def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n - 1)  # No base case for n <= 0, causing infinite recursion

print(factorial(-5))  # Will result in a RecursionError

# Function with poor error handling
def open_file(file_path):
    try:
        file = open(file_path, "r")
        content = file.read()
        file.close()  # Should use a context manager
        return content
    except FileNotFoundError:
        print("File not found")
    except:
        print("An error occurred")  # Overly generic exception handling

print(open_file("nonexistent.txt"))

# Redundant use of `elif` after `return`
def is_positive(number):
    if number > 0:
        return True
    elif number == 0:
        return False  # Redundant elif, could just use else
    elif number < 0:  # Unreachable elif
        return False

print(is_positive(5))
print(is_positive(-3))
