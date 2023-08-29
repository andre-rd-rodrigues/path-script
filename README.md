# 🔍 Path Tracer 🔍

This script **automates the process of locating and writing paths** for a list of specified components/files within your project directory structure. :file_folder:
It's particularly useful when you need to document paths of certain components in your project's directory, instead of doing it manually.

## Prerequisites

Before you begin, make sure you have **[Node.js](https://nodejs.org/)** installed on your machine.

## Installation

You can install this tool via npm:

```bash
npm i -g @andrerodrigo/path-tracer
```

## Usage

To use the script, follow these steps:

1. Open your terminal.
2. Navigate to the directory containing the script and run the following command:

   ```bash
   path-tracer [componentName1] [componentName2] ...
   ```

   Replace **`[componentName1]`**, **`[componentName2]`**, etc. with the names of the components you want to find.

   For example:

   ```bash
   path-tracer Button Modal
   ```

   This will search for the paths of the components named "Button" and "Modal" within the current directory and its subdirectories.

3. The script will display a progress bar indicating the search progress.
4. Once the search is complete, the script will write the paths of the components to a file named **`components_paths.txt`**. This file will be created on your desktop or in the script's directory, depending on your operating system.

## Notes

- If no component names are provided as command-line arguments, an error message will be displayed.
- The script searches for components recursively in the specified directory and its subdirectories.
- If a component is found, its path will be displayed next to its name. If not found, "Not found" will be indicated.
