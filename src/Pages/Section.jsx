

import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Header1 from "../components/Header/Header1";
import Chat from "../components/chatbot/Chat";
import Dashboard from "./Dashbaord";
import Chatbot from "../components/chatbot/ChatBot";


function Section(props) {

    const [tested, setTested] = useState(false);
//   console.log( "tested or not: ", tested);

  return (
    <>
    <Header value={'signout'}/>
    {/* <Header1 /> */}
      <div className="container">
        <Dashboard tested={tested} setTested={setTested}/>
        
      </div>
      {/* <Chat /> */}
      {/* <Chatbot /> */}
    </>
  );
}

export default Section;
