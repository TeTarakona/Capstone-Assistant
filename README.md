# Capstone-Assistant

This is a PERN stack web application. All that's required to run it is docker installed on your machine, everything else is taken care of by the docker commands. Clone the repository and use one of the below docker commands.

The client folder contains what is probably the main focus of this assignment, the React application. It functions by making fetch requests to the Express server which process the requests, translates them into SQL for the postgres database, and returns them back to the React client for display.

## commands
To run for the first time: docker compose up --build
To run subsequently: docker compose up
