import {Switch,Route} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {ChatList} from "../../components/ChatList";
import {Messages} from "../Messages";
import {CHATS} from "../../mocks/chats";
import {useSelector, useDispatch} from "react-redux";
import {getChatList} from "../../store/chats/selectors";
import {useCallback, useEffect} from "react";
import {createChat, removeChat, setChats} from "../../store/chats/action";
import {nanoid} from "nanoid";
import {removeMessagesByChatID} from "../../store/messages/action";
import {Button} from "react-bootstrap";


const useStyles=makeStyles({
    wrapper:{
        display:"grid",
        gridTemplateColumns: "200px 1fr"
    }
});


export const Chats = () => {
    const chats=useSelector(getChatList);
    const dispatch = useDispatch();
    const classes=useStyles();

    const onCreate = useCallback(() => {
        dispatch(createChat({
        id:nanoid(),
        name:"chatName"

    }))

    },[]);

    const onDelete = (chatId) => {
        dispatch(removeChat(chatId))
        dispatch(removeMessagesByChatID(chatId))
    }

    useEffect(()=>{
        dispatch(setChats(CHATS))
    },[dispatch])



    return (
        <div className={classes.wrapper}>
            <div>
                <ChatList onDelete={onDelete} list={chats}/>
                <Button onClick={onCreate}>CreateChat</Button>
            </div>

                <Switch>
                    <Route component={Messages} path="/Chats/:chatId"/>
                </Switch>


        </div>
    );
};

