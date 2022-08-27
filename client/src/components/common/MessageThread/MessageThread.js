import React from 'react'
import './MessageThread.css'
import {format} from 'timeago.js'
var CryptoJS = require("crypto-js");

function MessageThread({message,own}) {
    var bytes  = CryptoJS.AES.decrypt(message.text, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return (
        <div className='message-thread' style={{justifyContent:`${!own?'flex-start' : 'flex-end'}`}}>
            <div style={{ backgroundColor: `${!own?'white':'#f1f1f1'}`}}>
                <p>{originalText}</p>
                <div>
                    <p>{format(message.createdAt)}</p>
                </div>
            </div>
           
        </div>
    )
}

export default MessageThread