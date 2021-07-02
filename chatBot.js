'use strict';

class ChatBot {

  handleUserMessage(message) {
    
    const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    message = message.split(':').pop().replace(punctuation, '').split(" ")
    const map = [];
    
    for (let i = 0 ; i < message.length; i++) {
      let currentCount = map[message[i]];
      let count = currentCount ? currentCount : 0;
      map[message[i]] = count + 1
    }
    return map
  }
  
  generateTopTenMessage() {
    // Do Work
  }

}
let newMessage = new ChatBot()

newMessage.handleUserMessage("george: [it is so nice to meet you chris what do you do in your free time?")
