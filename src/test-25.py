def calculate_area(length, width):
    area = length * width
    return  # Missing return of the calculated area

def print_welcome_message(name):
    if name == "":
        print("Hello, stranger!")
    print("Welcome, " + name)  # No handling for None

def get_even_numbers(numbers):
    evens = []
    for num in numbers:
        if num % 2 == 0:
            evens.append(num)
        else:
            return evens  # Premature return

def main():
    print(calculate_area(5, 3))
    print_welcome_message(None)
    print(get_even_numbers([1, 2, 3, 4, 5]))

main()
