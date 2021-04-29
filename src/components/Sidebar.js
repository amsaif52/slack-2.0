import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Sidebar() {
    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>HQ</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        Ali Asgar
                    </h3>
                </SideBarInfo>
            </SideBarHeader>
        </SideBarContainer>
    )
}

export default Sidebar

const SideBarContainer = styled.div`
    background-color: var(--slack-color);
`;

const SideBarHeader = styled.div`
`;

const SideBarInfo = styled.div`
`;