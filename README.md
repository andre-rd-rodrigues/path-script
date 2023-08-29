# 🔍 **Path Tracer** 🔍

This script **automates the process of locating and writing paths** for a list of specified components/files within your project directory structure. :file_folder:
It's particularly useful when you need to document paths of certain components in your project's directory, instead of doing it manually.

## **Prerequisites**

Before you begin, make sure you have **[Node.js](https://nodejs.org/)** installed on your machine.

## **Installation**

1. Clone this repository or download the script file to a directory of your choice.
2. Open your terminal and navigate to the directory containing the script.
3. Install the required dependencies by running the following command:

   ```bash
   npm install cli-progress
   ```

## **Usage**

To use the script, follow these steps:

1. Open your terminal.
2. Navigate to the directory containing the script and run the following command:

   ```bash
   node script.js [componentName1] [componentName2] ...
   ```

   Replace **`[componentName1]`**, **`[componentName2]`**, etc. with the names of the components you want to find.

   For example:

   ```bash
   bashCopy code
   node script.js Button Modal

   ```

   This will search for the paths of the components named "Button" and "Modal" within the current directory and its subdirectories.

3. The script will display a progress bar indicating the search progress.
4. Once the search is complete, the script will write the paths of the components to a file named **`component_paths.txt`**. This file will be created on your desktop or in the script's directory, depending on your operating system.

## **Notes**

- If no component names are provided as command-line arguments, an error message will be displayed.
- The script searches for components recursively in the specified directory and its subdirectories.
- If a component is found, its path will be displayed next to its name. If not found, "Not found" will be indicated.
- Make sure to customize the script according to your project's directory structure if needed.