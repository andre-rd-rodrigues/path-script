#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");
const cliProgress = require("cli-progress");

// Extract component names from command-line arguments
const componentNames = process.argv.slice(2); // Exclude "node" and script file

if (!componentNames.length) {
  return console.error("❌ Error: no component(s) name(s) provided");
}

// Get the current working directory (location from which the script is run)
const currentDirectory = process.cwd();

// Function to search for the path of a component in the repository recursively
function findComponentPath(rootPath, componentName) {
  const files = fs.readdirSync(rootPath);

  for (const file of files) {
    const filePath = path.join(rootPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      const nestedPath = findComponentPath(filePath, componentName);
      if (nestedPath) {
        return nestedPath;
      }
    } else if (file === componentName) {
      return filePath;
    }
  }

  return null;
}

// Create a new progress bar
const progressBar = new cliProgress.SingleBar(
  {},
  cliProgress.Presets.shades_classic
);

// Start the progress bar
progressBar.start(componentNames.length, 0);

// Iterate through component names and find their paths
const componentPaths = componentNames.map((componentName, i) => {
  const componentPath = findComponentPath(currentDirectory, componentName);

  // Increment the progress bar
  progressBar.update(i + 1);

  return `${componentName}: ${componentPath || "Not found"}`;
});

// Stop the progress bar
progressBar.stop();

// Determine the desktop path based on the operating system
const desktopPath = path.join(os.homedir(), "Desktop");

// Write the component paths to a file on the desktop
const outputPath = desktopPath
  ? path.join(desktopPath, "component_paths.txt")
  : "component_paths.txt";

fs.writeFileSync(outputPath, componentPaths.join("\n"));

console.log(`Component paths written on path: ${outputPath}`);
