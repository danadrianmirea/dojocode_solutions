def calculate(num1, operation, num2):
    # Ensure that num1 and num2 are numbers
    if not isinstance(num1, (int, float)) or not isinstance(num2, (int, float)):
        return None

    # Perform the operation based on the operation character
    if operation == "+":
        return num1 + num2
    elif operation == "-":
        return num1 - num2
    elif operation == "*":
        return num1 * num2
    elif operation == "/":
        # Check for division by zero
        if num2 == 0:
            return None
        return num1 / num2
    else:
        # Return None if the operation is invalid
        return None
