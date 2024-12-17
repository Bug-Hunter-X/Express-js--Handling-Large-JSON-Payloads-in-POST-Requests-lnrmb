# Express.js: Handling Large JSON Payloads in POST Requests

This repository demonstrates a common issue in Express.js applications where handling large JSON payloads in POST requests can lead to errors.  The `bug.js` file showcases the problem, and `bugSolution.js` provides a solution.

## Problem

When receiving large JSON payloads, Express.js might hit its default body size limit, resulting in request timeouts or 'Request entity too large' errors.  This is particularly relevant for applications dealing with large files or complex data structures.

## Solution

The solution involves adjusting the `json()` middleware's `limit` option to accommodate larger payloads.  The `bugSolution.js` file demonstrates this solution.

## Setup

1. Clone this repository.
2. Run `npm install` to install the required packages.
3. Run `node bug.js` (to observe the error) and then `node bugSolution.js` (to see the solution in action).