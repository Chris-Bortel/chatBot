# ExtraHop chatBot

## Problem domain
Write methods for a chatroom bot that keeps a tally of words it sees in chat. Every few minutes the bot will be asked for a list of the top 10 words seen during that time, as well as their counts.
 
- `chatBot.handleUserMessage()` should accept a single string parameter and return void. You should assume it will be called whenever a user sends a message in the chatroom. The message will take the form "[username]: [messageText]". You may make assumptions about acceptable usernames, but please state these assumptions. ---> maybe use faker for usernames and messages
 
- `chatBot.generateTopTenMessage()` should accept no parameters and return a string. The string should contain a message including the top ten words since the last time the method was called and their counts.

## Approach 
I am utilizing class based methods class-based methods

### White Board
![White Board](./whiteboard.png)

### Notes
- Tests are to come
- I am needing to work on my logic for utilizing `handleUserMessage()` within the `generateTopTenMessages()`
<!-- - I would like to discuss Big O time and space complexity  -->
