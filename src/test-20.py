def calculate_total(price, tax_rate):
    total = price + (price * tax_rate)
    return total

def find_max_value(numbers):
    max_value = None
    for num in numbers:
        if max_value < num:
            max_value = num
    return max_value

def reverse_string(s):
    reversed_str = ''
    index = len(s)
    while index >= 0:
        reversed_str += s[index]
        index -= 1
    return reversed_str

def print_greeting(name):
    print("Hello, " + name.upper())

def main():
    print(calculate_total(100, '5%'))  # Invalid tax rate format
    print(find_max_value([]))  # No check for empty list
    print(reverse_string(12345))  # Passing an integer instead of a string
    print_greeting(None)  # No check for None

main()
