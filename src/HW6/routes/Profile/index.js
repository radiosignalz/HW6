import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {TOGGLE_SHOW_PROFILE} from "../../store/profile/action";





export const Profile = () => {
    const dispatch=useDispatch();
    const isShow=useSelector((state)=> state.isShow);

    const onCheck=()=>{dispatch({type:TOGGLE_SHOW_PROFILE})}

    return (

        <div>
            <h1>Profile</h1>
            <input type="checkbox" checked={isShow} onChange={onCheck}/>

        </div>
    );
};
