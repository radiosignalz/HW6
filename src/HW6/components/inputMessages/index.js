// import React, {useState} from 'react';
// import {MessageList} from "../MessageList";
// import {MessageInput} from "../MessageInput";
// import useBotAnswerTimeDelay from "../../../Hooks/useBotAnswerTimeDelay";
//
// const InputMessages= () => {
//     const [messageList,setMessageList]=useState([])
//     const sendMessage=(text,author)=>{
//         const newMessage={
//             text,
//             author,
//         }
//         const newMessageList=[...messageList, newMessage];
//         setMessageList(newMessageList);
//
//     }
//
//     const onSendMessage=(value)=>{
//         sendMessage('user',value);
//     }
//     const BotText="What we'll tape next Dava ?!"
//
//     useBotAnswerTimeDelay(messageList,sendMessage, [BotText])
//     return (
//         <div>
//             <h1 h1={BotText} >HW3</h1>
//             <MessageList messageList={messageList}/>
//             <MessageInput onSend={onSendMessage}/>
//
//         </div>
//     );
// };
//
// export default InputMessages;