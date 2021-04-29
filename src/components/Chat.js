import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBoundOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from './ChatInput';

function Chat() {
    const roomId = useSelector(selectRoomId)
    return (
        <ChatConatiner>
            <>
                <Header>
                    <HeaderLeft>
                        <h4>
                            <strong>#Room-name</strong>
                        </h4>
                        <StarBoundOutlinedIcon />
                    </HeaderLeft>
                    <HeaderRight>
                        <p>
                            <InfoOutlinedIcon /> Details
                        </p>
                    </HeaderRight>
                </Header>
                <ChatMessages>
                    <ChatInput channelId={roomId}/>
                </ChatMessages>
            </>
        </ChatConatiner>
    )
}

export default Chat;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4{
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }
    > h4 > .MuiSvgIcon-root{
        margin-left: 10px;
        font-size: 18px;
    }
`;
const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    > p > .MuiSvgIcon-root{
        margin-right: 5px !important;
        font-size: 16px;
    }
`;

const ChatConatiner = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;

const ChatMessages = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;