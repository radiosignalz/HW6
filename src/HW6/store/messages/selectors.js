export const getMessagesFrommStore=(state)=>state.messages || {};
export const getMessages=(state)=>getMessagesFrommStore(state).messages || {};
export const getChatMessagesById=(chatId)=>(state)=>getMessages(state)[chatId];