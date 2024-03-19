import { useState } from "react";

const User= (props)=>
{
    const [count,setCount]= useState(0);
    const [count2]=useState(1);
    return(
        <div className="user-card">
            <h2>Count={count}</h2>
            <button onClick={()=>
            {
                setCount(count+1);
            }}>Count Increase</button>
            <h1>{props.name}</h1>
            <h2>Location: Bhopal</h2>
            <h3>Contact: @rohan197770</h3>
        </div>
    )
}
export default User;