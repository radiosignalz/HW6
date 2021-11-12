import propTypes from "prop-types";
import React,{useState,useEffect, useRef} from 'react';
import {Paper, IconButton,InputBase,} from "@material-ui/core";
import {Send} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";



const useStyles=makeStyles((theme)=>({
    paper:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:"center",
        paddingLeft: theme.spacing(1),
        position:"fixed",
        bottom:0
    },
    input:{
        flexGrow:3,



    },

}))

export const MessageInput = (props) => {
    const classes= useStyles();
    //states
    const [value,setValue]=useState('')
    //Refs
    const inputRef=useRef(null)


    const resetForm=()=>{
        setValue("")
    }
    const onSubmitMessage=(event)=>{
        event.preventDefault();
        props.onSend(value);
        resetForm();
    }
    const onChangeMessageInput=(event)=>{
        setValue(event.target.value)
    }

    useEffect(()=>{inputRef.current.focus();})

    return (

        <Paper component="form" className={classes.paper} onSubmit={onSubmitMessage}>
            <InputBase inputRef={inputRef} value={value} className={classes.input} onChange={onChangeMessageInput} placeholder={props.placeholder} type="text"/>
            {/*<InputBase inputRef={(Ref)=>{ref?.focus();}} className={classes.input} onChange={onChangeMessageInput} placeholder={props.placeholder} type="text"/>*/}

            <IconButton type="submit"><Send/></IconButton>
        </Paper>
    );
};



MessageInput.propTypes={
    onSend:propTypes.func,
    placeholder: propTypes.string
};
MessageInput.defaultProps={
    placeholder: "type message"
};