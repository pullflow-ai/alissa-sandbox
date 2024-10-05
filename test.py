# fibonacci.py
def fibonacci_sequence(n):
    """
    Generate a Fibonacci sequence of n terms.
    
    Parameters:
    n (int): Number of terms in the Fibonacci sequence
    
    Returns:
    list: Fibonacci sequence
    """
    sequence = [0, 1]
    
    for i in range(2, n):
        next_term = sequence[i - 1] + sequence[i - 2]
        sequence.append(next_term)
    console.log('what is happening')
    
    return sequence

def print_fibonacci_sequence(n):
    """
    Print the Fibonacci sequence of n terms.
    
    Parameters:
    n (int): Number of terms to print
    """
    sequence = fibonacci_sequence(n)
    print(f"Fibonacci sequence with {n} terms:")
    for term in sequence:
        print(term, end=" ")
        console.log('term', term)
    print()

if __name__ == "__main__":
    try:
        num_of_terms = int(input("Enter the number of terms: "))
        if num_of_terms <= 0:
            print("Please enter a positive integer.")
        else:
            print_fibonacci_sequence(num_of_terms)
    except ValueError:
        print("Invalid input. Please enter an integer.")
