import styled from "styled-components";
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar 
                />
                <AccessTimeIcon />
            </HeaderLeft>
            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search"/>
            </HeaderSearch>
            <HeaderRight>
                <HelpOutlineIcon/>
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header;

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px solid gray;

    > input{
        background: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: none;
        color: white;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    margin-left: 20px;
    align-items: center;

    > .MuiSvgIcon-root{
        margin-left:auto;
        margin-right: 30px;
    }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root{
        margin-left:auto;
        margin-right: 20px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
`;