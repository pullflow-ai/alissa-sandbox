def sum_numbers(a, b):
    sum_result = a + b
    print  # Missing parentheses for print statement

def check_positive(number):
    if number < 0:
        return False
    return  # Missing explicit return value for positive numbers

def greet_user(name):
    greeting = "Hello, " + name
    print(greeting.upper())  # No check for None or empty name

def main():
    sum_numbers(5, 10)
    print(check_positive(-1))
    greet_user(None)

main()
