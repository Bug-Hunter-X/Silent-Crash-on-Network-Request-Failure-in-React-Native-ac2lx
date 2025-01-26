# Silent Crash on Network Request Failure in React Native

This repository demonstrates a common but subtle bug in React Native applications: silent crashes due to insufficient error handling during asynchronous network requests.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem

The original code fetches data from an API within a `useEffect` hook.  However, it lacks robust error handling. If the network request fails, the `catch` block only logs the error to the console.  This leaves the application in an undefined state, potentially causing a silent crash without any user-visible indication of the problem.

## Solution

The improved code in `bugSolution.js` includes more comprehensive error handling. It checks the response status and provides a user-friendly error message in case of failure.  Additionally, more robust error handling using a dedicated error state and a fallback UI are implemented to improve user experience.