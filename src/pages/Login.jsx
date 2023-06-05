import { useState } from 'react';
import { login,logout } from '../store'
import { useDispatch,useSelector } from 'react-redux'

export const Login = () => {
    const [newUsername, setNewUsername] = useState("")
   
    const dispatch = useDispatch();  //modify the state
    const username = useSelector((state) => state.user.value.username)   //display the state
    return (
        <div>
            <h2>This is a Login Page of : {username}</h2>
            <input onChange={(e)=>{
                setNewUsername(e.target.value);
            }} type="text"/>
            <button onClick={() => dispatch(login({username : newUsername}))}
            >Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}