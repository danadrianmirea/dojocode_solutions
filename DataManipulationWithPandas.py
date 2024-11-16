import pandas as pd

def get_average_salary(df: pd.DataFrame, department: str) -> float:
    # Filter the DataFrame by the given department
    department_df = df[df['Department'] == department]
    
    # Calculate and return the average salary of the filtered department
    return department_df['Salary'].mean()

# Example Usage

# Example 1
data = {
    "Name": ["Alice", "Bob", "Charlie"],
    "Department": ["HR", "Engineering", "HR"],
    "Salary": [50000, 60000, 55000]
}
df = pd.DataFrame(data)
department = "HR"
print(get_average_salary(df, department))  # Output: 52500.0

# Example 2
department = "Engineering"
print(get_average_salary(df, department))  # Output: 60000.0
