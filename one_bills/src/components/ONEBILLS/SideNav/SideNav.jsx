import { MainContainer, Title, Options, Option, SpanTag, Icon } from './StyledComponents'

import { Link } from 'react-router-dom';

import WonBillsContext from '../../../context/WonBillsContext';

import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { PiInvoiceLight } from "react-icons/pi";
import { IoWallet } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";

const SideNav = () => {
    const TabOptions = [
        { name: 'Dashboard', link: '/Dashboard', icon: <IoMdHome size={20} /> },
        { name: 'Clients', link: '/Clients', icon: <FaUser /> },
        { name: 'Products/Services', link: '/', icon: <AiFillProduct size={19} /> },
        { name: 'Invoices', link: '/', icon: <PiInvoiceLight size={20} /> },
        { name: 'Payments', link: '/', icon: <IoWallet size={20} /> },
        { name: 'Settings', link: '/', icon: <IoIosSettings size={22} /> },
    ]

    return (
        <WonBillsContext.Consumer>

            {(value) => {
                const { activeTab, setActiveTab } = value

                const onClickTab = (tab) => {
                    setActiveTab(tab)
                }

                return (
                    <MainContainer>
                        <Title>Won Bills</Title>
                        <Options>
                            {TabOptions.map(each => (
                                <Link key={each.name} to={each.link}>
                                    <Option active={activeTab === each.name} onClick={() => onClickTab(each.name)}>
                                        <Icon active={activeTab === each.name}>{each.icon} </Icon>
                                        <SpanTag active={activeTab === each.name}>{each.name}</SpanTag>
                                    </Option>
                                </Link>
                            ))
                            }

                        </Options>

                    </MainContainer>
                )
            }}

        </WonBillsContext.Consumer>
    )


}

export default SideNav;