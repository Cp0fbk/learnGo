Golang Static HTML/CSS Web Server
=================================

This is a simple Go web server that serves static HTML, CSS, and JavaScript 
files from the "static/" directory and also exposes a basic API endpoint. 
The frontend and backend both run on the same port 8080.

----------------------------------------
Project Structure
----------------------------------------

learnGo/
├── main.go
└── static/
    ├── index.html
    ├── style.css
    └── script.js

----------------------------------------
How to Run
----------------------------------------

1. Clone or download this repository.

2. Open a terminal and navigate to the project folder:

   cd learnGo

3. Run the Go server:

   go run main.go

4. Open your web browser and go to:

   http://localhost:8080

----------------------------------------
Features
----------------------------------------

- Serves static files (HTML, CSS, JS) from the "static" folder.
- Simple backend API endpoint at: /api/hello


