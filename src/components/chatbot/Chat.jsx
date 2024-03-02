//App.js
import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

// Creating our own theme
const theme = {
  background: "#C9FF8F",
  headerBgColor: "#197B22",
  headerFontSize: "20px",
  botBubbleColor: "#0F3789",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#FF5733",
  userFontColor: "white",
};


function Chat() {
    
    const steps = [
        {
          id: "Greet",
          message: "Hello, Welcome to our shop",
          trigger: "Ask Name"
        },
        {
          id: "Ask Name",
          message: "Please type your name?",
          trigger: "Waiting user input for name"
        },
        {
          id: "Waiting user input for name",
          user: true,
          trigger: "Asking options to eat"
        },
        {
          id: "Asking options to eat",
          message: "Hi {previousValue}, Glad to know you !!",
          trigger: "Done"
        },
        {
          id: "Done",
          message: "Have a great day !!",
          end: true
        }
     ];
  
  const config = {
    width: "400px",
    height: "500px",
    floating: true,
  };

  return (
    <div className="App">
      <ChatBot steps={steps} {...config} />
    </div>
  );
}

export default Chat;
