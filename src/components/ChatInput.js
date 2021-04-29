import styled from "styled-components";
import {Button} from "@material-ui/core";
import {db} from "../firebase";
import firebase from 'firebase';
import React, { useEffect, useState } from "react";

function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState("");
    const sendMessage = e => {
        e.preventDefault();

        if (channelId) {
            return false;
        }
        db.collections('rooms').doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimeStamp(),
            user: "Ali Asgar",
            userImage: "https://avatars.githubusercontent.com/u/22811335?v=4"
        });

        setInput('')
    }
    return (
        <ChatInputContainer>
            <form>
                <input value={input} placeholder={`Message #ROOM`} onChange={(e) => setInput(e.target.value)}/>
                <Button hidden type="submit" onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput


const ChatInputContainer = styled.div`
    border-radius: 20px;
    > form{
        postion: relative;
        display: flex;
        justify-content: center;
    }
    > form > input{
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    > form > button{
        display: none !important;
    }
`;