# Astrito_bot
This project consists in an educative chatbot with the objective of teach astronomy concepts about different topics with definitions and questions.

## Content
This project has one branch: develop1. It has three differentiated parts: one with the chatbot programmation in Rasa (Chat_rasa), another one is about the programation of the widget (Chat_wid) and the last part is the documentation.

## How to clone
Use the next command to clone this repository in your computer:
    ```
    git clone https://github.com/martamlz/Astrito_chatbot.git
    ```
    
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

If you don't have Rasa on your computer, follow the next steps:
* Make sure you have Python download and its version with:
    ```
    python3 --version
    ```
    ```
    pip3 --version
    ```
* If the packages are downloaded, we should have now their version number, if they are not, we have to download them with the next commands:
    ```
    sudo apt update
    ```
    ```
    sudo apt install python3-dev python3-pip
    ```
* The next step is optional but very recommendable. It consists on create a virtual environment with the next command:
    ```
    python3 -m venv ./venv
    ```
* And to activate it:
    ```
    source ./venv/bin/activate
    ```
* Now, we check if the pip version is updated:
    ```
    pip3 install -U pip
    ```
* We went to install rasa:
    ```
    pip3 install rasa
    ```
* We install Spacy, pipeline choosen for this project:
    ```
    pip install rasa[spacy]
    ```
* We download its model in spanish:
    ```
    python -m spacy download es_core_news_md
    ```
    ```
    python -m spacy link es_core_news_md es
    ```
* At this point, we have all the needed packages. The next steps are:
* Activate the virtual environment in two console windows where we have downloaded Python. Now we have to clone our git repository in a folder inside this repository:
    ```
    mkdir bot
    ```
    ```
    cd bot
    ```
    ```
    git init
    ```
    ```
    git clone https://github.com/martamlz/Astrito_chatbot.git
    ```
* When it is cloned, we navigate to the folder Chat_rasa with cd command in the previous mentioned windows. In one window we do:
    ```
    rasa run -m models --enable-api --cors "*" --debug
    ```
* And in the another one:
    ```
    rasa run actions --cors "*" --debug
    ```
* Once you have done the previous steps, run the bot openning the file index.html in your navigator which is inside int Chat_wid folder.

## Preview
This assistant has to look like this and then... time to learn!

![](https://raw.githubusercontent.com/martamlz/Astrito_chatbot/develop1/doc/preview.png)
