import os
import json
import requests
from datetime import datetime

# Utility function for logging
def log_message(message, log_file="app.log"):
    timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    with open(log_file, 'a') as f:
        f.write(f"[{timestamp}] {message}\n")

# Class for managing a simple To-Do list
class TodoList:
    def __init__(self, name):
        self.name = name
        self.todos = []

    def add_todo(self, item):
        self.todos.append(item)
        log_message(f"Added new to-do: {item}")

    def remove_todo(self, index):
        if 0 <= index < len(self.todos):
            removed = self.todos.pop(index)
            log_message(f"Removed to-do: {removed}")
        else:
            log_message(f"Failed to remove to-do: index {index} out of bounds")

    def list_todos(self):
        if not self.todos:
            print("No todos yet!")
        else:
            for i, todo in enumerate(self.todos):
                print(f"{i + 1}: {todo}")

    def save_todos(self, file_path="todos.json"):
        try:
            with open(file_path, 'w') as f:
                json.dump(self.todos, f)
            log_message(f"Saved todos to {file_path}")
        except IOError as e:
            log_message(f"Error saving todos: {str(e)}")

    def load_todos(self, file_path="todos.json"):
        try:
            if os.path.exists(file_path):
                with open(file_path, 'r') as f:
                    self.todos = json.load(f)
                log_message(f"Loaded todos from {file_path}")
            else:
                log_message(f"No todos to load from {file_path}")
        except IOError as e:
            log_message(f"Error loading todos: {str(e)}")


# API Interaction: Fetch data from an external API (e.g., a public weather API)
class WeatherAPI:
    BASE_URL = "https://api.open-meteo.com/v1/forecast"

    def __init__(self, latitude, longitude):
        self.latitude = latitude
        self.longitude = longitude

    def fetch_weather(self):
        try:
            response = requests.get(self.BASE_URL, params={
                'latitude': self.latitude,
                'longitude': self.longitude,
                'daily': 'temperature_2m_max,temperature_2m_min',
                'timezone': 'auto'
            })
            response.raise_for_status()
            data = response.json()
            log_message("Successfully fetched weather data.")
            return data
        except requests.RequestException as e:
            log_message(f"Error fetching weather data: {str(e)}")
            return None

    def display_weather(self, data):
        if data:
            for day in data.get("daily", {}).get("time", []):
                max_temp = data["daily"]["temperature_2m_max"]
                min_temp = data["daily"]["temperature_2m_min"]
                print(f"Date: {day}, Max Temp: {max_temp}°C, Min Temp: {min_temp}°C")
        else:
            print("No weather data available.")


# Simple sorting algorithm (Bubble Sort)
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr


# Simple binary search algorithm
def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1


# File Handler: Read from a file and write to a file
def read_file(file_path):
    try:
        with open(file_path, 'r') as file:
            content = file.read()
            log_message(f"Read from file {file_path}")
            return content
    except FileNotFoundError:
        log_message(f"File {file_path} not found.")
        return None


def write_to_file(file_path, content):
    try:
        with open(file_path, 'w') as file:
            file.write(content)
            log_message(f"Wrote to file {file_path}")
    except IOError as e:
        log_message(f"Error writing to file {file_path}: {str(e)}")


# Main application logic
def main():
    log_message("Application started.")

    # Initialize TodoList
    todo_list = TodoList("Daily Tasks")
    todo_list.load_todos()

    # Add sample todos
    todo_list.add_todo("Buy groceries")
    todo_list.add_todo("Go for a run")
    todo_list.list_todos()
    todo_list.save_todos()

    # Fetch and display weather data
    weather_api = WeatherAPI(latitude=40.7128, longitude=-74.0060)  # New York coordinates
    weather_data = weather_api.fetch_weather()
    weather_api.display_weather(weather_data)

    # Demonstrate sorting and binary search
    sample_list = [34, 7, 23, 32, 5, 62]
    print(f"Original list: {sample_list}")
    sorted_list = bubble_sort(sample_list)
    print(f"Sorted list: {sorted_list}")
    index = binary_search(sorted_list, 23)
    if index != -1:
        print(f"Found 23 at index {index}")
    else:
        print("23 not found")

    # File handling demo
    file_content = read_file("sample.txt")
    if file_content:
        print(f"File content: {file_content}")

    write_to_file("output.txt", "This is a sample output.")
    
    log_message("Application ended.")

if __name__ == "__main__":
    main()
