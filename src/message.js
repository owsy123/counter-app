import React from 'react'

function Message(props){
    return(
        <div>
            <h1>Counter Application</h1>
            <h1>Counter <br/> {props.counter} </h1>
        </div>
    )


}
export default Message