# flatdango-code-challenge

- This repository contains a list of films featured on Flatdango. The films are presented  in JSON format, including details such as title, runtime, capacity, showtime, tickets sold, description, and poster.

# Development requirements
- Visual studio code
- Live server  extension
- json-sever


# Development
To get the code,
```bash
 click on this link: https://github.com/MISSACK/flatdango-code-challenge
 ```
- fork and git clone the code to you local machine.
- Navigate to this folder by running this command:
```bash
 cd flatdango-code-challenge/
 ```
- open the code using this command, 
```bash
   code .
```

- run this command on your terminal:
```bash
 json-server --watch db.json.
 ```
- Below at the bottom of your vs code click on the Go live to display the animals on the browser.


# Technology used
- HTML
- CSS
- Javascript

# Deliverables

As a user, I can:

1. See the first movie's details, including its **poster, title, runtime,
   showtime, and available tickets** when the page loads. The number of
   available tickets will need to be derived by subtracting the number of
   `tickets_sold` from the theater's `capacity`.

2. Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should
   see the number of available tickets decreasing on the frontend. I should not
   be able to buy a ticket if the showing is sold out (if there are 0 tickets
   available).


## License: 

ISC License.

## Author
Musa M Issack

## Github
https://github.com/MISSACK/flatdango-code-challenge

