'use strict';

class ChatBot {

  handleUserMessage(message) {
    message.toLowerCase()
    const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    message = message.split(':').pop().replace(punctuation, '').split(" ");
    
    // This is an array and not a map
    const map = [];
    
    for (let i = 0 ; i < message.length; i++) {
      let currentCount = map[message[i]];
      let count = currentCount ? currentCount : 0;
      map[message[i]] = count + 1
    }
    return map
  }
  
  generateTopTenMessage() {
    // Currently I do not have access to the map due to scope
  }

}



let newMessage = new ChatBot()

newMessage.handleUserMessage("george: [it is so nice to meet you chris what do you do in your free time?")



/* TODO: Get this to work with an actual Map*/

// class ChatBot {
// /* 
// Should I put a map directly in to a constructor? 
// That way, all of the children would have access with the Map
// */

// constructor() {
//   this.dictionary = new Map()
// }

//   handleUserMessage(message) {
    
//     const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
//     // Want to handle for uppercase but wanted to focus on the bigger stuff
//     message = message.split(':').pop().replace(punctuation, '').split(" ")

    
//     for (let i = 0 ; i < message.length; i++) {
//       if (this.dictionary.has(message)) {
//         let count = this.dictionary.get(message);
//         count++;
//         this.dictionary.set(message, count);
//       } else {
//         this.dictionary.set(message, 1)
//       }
//       // let count = currentCount ? currentCount : 0;
//       // map[message[i]] = count + 1
//     }
//   }
  
//   generateTopTenMessage() {
//     // This will be taking the map that we create above, and return the top ten values
//   }

// }
// let newMessage = new ChatBot()

// newMessage.handleUserMessage("george: [it is so nice to meet you chris what do you do in your free time?")




