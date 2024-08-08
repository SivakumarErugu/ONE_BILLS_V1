import { MainContainer, ContentContainer,BodyDiv } from './StyledComponents'

import SideNav from '../SideNav/SideNav'
import Header from '../Header/Header'

const Dashboard = () => {
    return (
        <MainContainer>
            <SideNav />

            <ContentContainer>
                <Header />

                <BodyDiv>
                    DASHBOARD
                </BodyDiv>
            </ContentContainer>

        </MainContainer>
    )
}

export default Dashboard