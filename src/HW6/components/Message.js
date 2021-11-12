import React from 'react';
import propTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';






const useStyles=makeStyles(( theme ) => ({
    container:{
        marginBottom:20,
    color: theme.palette.background,
        display:"flex",
       flexDirection:"column",
    },
    text:{
        height:"auto",
        maxWidth:350,
        padding:10,
        textAlign: 'left',
        backgroundColor: "lightgreen",
        wordBreak:"break-all",
        marginBottom:20,
        marginRight:20

    },
    author:{
        height:"auto",
        width: 35,
        padding:10,
        textAlign: 'center',
        backgroundColor: "lightblue",
        wordBreak:"break-all",
        marginBottom:20,
        marginRight:20

    }
}));



export const Message = (props) => {
    const classes= useStyles();
    return (
        <div >
            <div className={classes.container}>

                    <Paper className={classes.author}>{props.author}</Paper>
                    <Paper className={classes.text}>{props.text}</Paper>
        </div>

        </div>
    );
};

Message.propTypes={
    text: propTypes.string,
    author: propTypes.string,

};