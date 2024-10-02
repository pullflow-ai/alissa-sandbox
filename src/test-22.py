def factorial(n):
    result = 1
    for i in range(n):
        result *= i  # This will incorrectly skip multiplying by n
    return result

def greet_user(name):
    if name == '':
        print('Hello, stranger!')
    else:
        print('Hello, ' + name)  # No check for None

def is_prime(number):
    for i in range(2, number):
        if number % i == 0:
            return False
        return True  # This will incorrectly return True for non-prime numbers

def main():
    print(factorial(5))
    greet_user(None)  # Passing None should be handled
    print(is_prime(10))  # Incorrectly shows 10 as prime

main()
