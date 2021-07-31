import React from 'react'
import md5 from 'md5';

export default function Gravatar(props) {
    
    const email = props.email;
    const hash = md5(email)
    
    return (
        <div>
            <img className={props.className} src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt="" />
        </div>
    )
}
