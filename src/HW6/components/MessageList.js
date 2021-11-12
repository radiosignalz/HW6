import React from 'react';
import propTypes from "prop-types";
import {Message} from "./Message";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position:"absolute",
        bottom:70,
        scrollBehavior: "revert"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,

    },
}));


export const MessageList = (props) => {

    const classes= useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {/*<ul className={classes.paper}> {props.messageList.map((item,id)=><li key={id}> {item. text}<p>{item.author}</p></li>)}</ul>*/}
                {props.messageList.map((item)=>(<Message key={item.id}{...item}/>))}
            </Grid>
        </div>
    );
};

MessageList.propTypes={
    messageList: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string,
            text: propTypes.array,
            author:propTypes.string,
        })
    )
}

MessageList.defaultProps={
    messageList: [],
}