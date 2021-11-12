import React, {useEffect, useState} from 'react';
import {MessageList} from "../../components/MessageList";
import {MessageInput} from "../../components/MessageInput";
import useBotAnswerTimeDelay from "../../Hooks/useBotAnswerTimeDelay";
import {Redirect, useParams} from "react-router-dom";
import {CHATS} from "../../mocks/chats"
import {useDispatch, useSelector} from "react-redux";
import {getChatMessagesById} from "../../store/messages/selectors";
import {hasChatById} from "../../store/chats/selectors";
import {createMessage} from "../../store/messages/action";



export const Messages= () => {
    const {chatId}=useParams();
    const dispatch=useDispatch();
    const messageList=useSelector(getChatMessagesById(chatId));
    const hasChat = useSelector(hasChatById(chatId));



    // const [messageList,setMessageList]=useState([])
    const sendMessage=(text,author)=>{
        const newMessage={
            text,
            author,
        };
        // const newMessageList=[...messageList, newMessage];
        // setMessageList(newMessageList);
        dispatch(createMessage(newMessage,chatId))
    };

    const onSendMessage=(value)=>{
        sendMessage(value,'user');
    };




    const BotText="Hello!!!"

    useBotAnswerTimeDelay(messageList,sendMessage, [BotText])



    // if(!CHATS.find(({id})=>id===chatId)){
    if(!hasChat){
        return<Redirect to="/chats"/>;
    }

    return (
        <div>
            <h1 h1={BotText} >HW5</h1>
            <MessageList messageList={messageList}/>
            <MessageInput onSend={onSendMessage}/>

        </div>
    );
};

