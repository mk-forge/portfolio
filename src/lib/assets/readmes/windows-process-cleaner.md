# Windows Process Cleaner

Batch script that kills unnecessary Windows processes to free up system resources.

## How it works

Only processes that were actually terminated get printed to the console. It's safe to run repeatedly, since everything restarts after a reboot anyway.

## Installation

1. Download the latest `windows-process-cleaner.bat` from [Releases](https://github.com/mk-forge/windows-process-cleaner/releases).
2. Right-click it and choose **Run as administrator**. Without that, system processes won't terminate.

## Usage

Press `z` to scan and kill processes again, or any other key to exit.

## Screenshots

![Script in action](/src/lib/assets/screenshots/windows-process-cleaner/script_in_action.png)