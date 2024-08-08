import { MainContainer, Title, ProfileDiv } from "./StyledComponents";

import WonBillsContext from "../../../context/WonBillsContext";

const Header = () => {
    return (
        <WonBillsContext.Consumer>
            {(values) => {
                const { activeTab, setActiveTab } = values;

                return (
                    <MainContainer>
                        <Title>{activeTab}</Title>

                        <ProfileDiv>

                        </ProfileDiv>

                    </MainContainer>
                );
            }}
        </WonBillsContext.Consumer>
    );
};

export default Header;
