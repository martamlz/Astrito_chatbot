# Astrito_bot
This project consists in an educative chatbot with the objective of teach astronomy concepts about different topics with definitions and questions.

## Content
This project has one branch: develop1. It has two differentiated parts: one with the chatbot programmation in Rasa and the another one is about the programation of the widget.

## How to clone

## Installation
To run this program you have to follow the next steps:
* Remember you need to have set up Rasa on your computer
* Start the Rasa server using the below command
    ```
    rasa run -m models --enable-api --cors "*" --debug
    ```
* Then, start the action server to allow custom actions, using the below command
    ```
    rasa run actions --cors "*" --debug
    ```
* Once you have done the previous steps, run the bot openning the file index.html in your navigator

## Preview
This assistant has to look like this and then... time to learn!
![](./doc/preview.jpg)
