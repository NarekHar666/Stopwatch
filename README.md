# Simple JavaScript Timer
[![GitHub](https://img.shields.io/badge/GitHub-My%20Repository-blue)](https://github.com/narekhar666/Stopwatch)<br><br>

![Timer Screenshot](./images/timewatch%20.jpg)<br>
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-blue)


This is a simple JavaScript timer project that allows you to create and control a stopwatch-like timer. It's designed to be easy to integrate into your web applications and provides basic functionality for tracking time intervals.

# Try Demo
You can try by clicking [HERE](https://narekhar666.github.io/Stopwatch/).


## Table of Contents
- [Functionality](#functionality)
- [Usage](#usage)

## Functionality
- The timer displays hours, minutes, and seconds.
- Click the "START" button to begin the timer. It will change to "CONTINUE" if paused.
- Click the "PAUSE" button to pause the timer.
- Click the "RESET" button to reset the timer to 00:00:00.
- The timer counts in real-time, with the default interval set to 1 second.

## Usage

To use this JavaScript timer in your web project, follow these steps:

1. Clone this repository or download the code.

2. Include the necessary HTML structure in your web page where you want the timer to appear:

```html
<div class="timer">
    <p class="time_display">00:00:00</p>
</div>
<button class="start">START</button>
<button class="pause">PAUSE</button>
<button class="refresh">RESET</button>
