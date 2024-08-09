import {
    MainContainer, ContentContainer, BodyDiv, ActionsDiv, CreateNewBtn, Icon, SearchDiv, Search, Icon2, InputTag, Table,
    TrTag, ThTag, TdTag, Thead, DataDiv, OperationDiv, Btn, Line
} from './StyledComponents'

import SideNav from '../SideNav/SideNav'
import Header from '../Header/Header'

import { TbCircleDashedPlus } from "react-icons/tb";
import { BsSearch } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";

const Data = [
    {
        "uid": 1,
        "name": "John Doe",
        "address": "123 Main St, Springfield",
        "email": "john.doe@example.com",
        "phone": "555-1234",
        "amount": 1500.75,
        "join_date": "2022-01-15",
    },
    {
        "uid": 2,
        "name": "Jane Smith",
        "address": "456 Oak St, Metropolis",
        "email": "jane.smith@example.com",
        "phone": "555-5678",
        "amount": 2500.50,
        "join_date": "2022-02-20",
    },
    {
        "uid": 3,
        "name": "Alice Johnson",
        "address": "789 Pine St, Gotham",
        "email": "alice.johnson@example.com",
        "phone": "555-8765",
        "amount": 3200.00,
        "join_date": "2022-03-10",
    },
    {
        "uid": 4,
        "name": "Bob Brown",
        "address": "101 Maple St, Star City",
        "email": "bob.brown@example.com",
        "phone": "555-4321",
        "amount": 500.00,
        "join_date": "2022-04-05",
    },
    {
        "uid": 5,
        "name": "Charlie Davis",
        "address": "202 Birch St, Central City",
        "email": "charlie.davis@example.com",
        "phone": "555-6789",
        "amount": 750.25,
        "join_date": "2022-05-18",
    },
    {
        "uid": 6,
        "name": "Diana Prince",
        "address": "303 Cedar St, Coast City",
        "email": "diana.prince@example.com",
        "phone": "555-8760",
        "amount": 1200.50,
        "join_date": "2022-06-22",
    },
    {
        "uid": 7,
        "name": "Evan Green",
        "address": "404 Elm St, Smallville",
        "email": "evan.green@example.com",
        "phone": "555-4325",
        "amount": 930.75,
        "join_date": "2022-07-30",
    },
    {
        "uid": 8,
        "name": "Fiona Black",
        "address": "505 Willow St, Riverdale",
        "email": "fiona.black@example.com",
        "phone": "555-1239",
        "amount": 2100.00,
        "join_date": "2022-08-14",
    },
    {
        "uid": 9,
        "name": "George White",
        "address": "606 Chestnut St, Sunnydale",
        "email": "george.white@example.com",
        "phone": "555-5674",
        "amount": 2750.50,
        "join_date": "2022-09-03",
    },
    {
        "uid": 10,
        "name": "Hannah Blue",
        "address": "707 Aspen St, Hill Valley",
        "email": "hannah.blue@example.com",
        "phone": "555-6781",
        "amount": 800.00,
        "join_date": "2022-10-21",
    },
    {
        "uid": 11,
        "name": "Ian Grey",
        "address": "808 Magnolia St, Mystic Falls",
        "email": "ian.grey@example.com",
        "phone": "555-8762",
        "amount": 5000.75,
        "join_date": "2022-11-12",
    },
    {
        "uid": 12,
        "name": "Jasmine Violet",
        "address": "909 Juniper St, Emerald City",
        "email": "jasmine.violet@example.com",
        "phone": "555-4326",
        "amount": 1350.00,
        "join_date": "2022-12-05",
    },
    {
        "uid": 13,
        "name": "Kevin Brown",
        "address": "1001 Beech St, Kings Landing",
        "email": "kevin.brown@example.com",
        "phone": "555-1237",
        "amount": 1800.25,
        "join_date": "2023-01-09",
    },
    {
        "uid": 14,
        "name": "Laura Purple",
        "address": "1102 Spruce St, Winterfell",
        "email": "laura.purple@example.com",
        "phone": "555-5672",
        "amount": 2900.50,
        "join_date": "2023-02-18",
    },
    {
        "uid": 15,
        "name": "Mike Gold",
        "address": "1203 Poplar St, Hogwarts",
        "email": "mike.gold@example.com",
        "phone": "555-6783",
        "amount": 625.00,
        "join_date": "2023-03-21",
    },
    {
        "uid": 16,
        "name": "Nina Silver",
        "address": "1304 Cypress St, Narnia",
        "email": "nina.silver@example.com",
        "phone": "555-8764",
        "amount": 1450.75,
        "join_date": "2023-04-11",
    },
    {
        "uid": 17,
        "name": "Oscar Gold",
        "address": "1405 Walnut St, Rapture",
        "email": "oscar.gold@example.com",
        "phone": "555-4329",
        "amount": 2350.00,
        "join_date": "2023-05-27",
    },
    {
        "uid": 18,
        "name": "Paula Emerald",
        "address": "1506 Hickory St, Atlantis",
        "email": "paula.emerald@example.com",
        "phone": "555-1235",
        "amount": 3200.50,
        "join_date": "2023-06-19",
    },
    {
        "uid": 19,
        "name": "Quincy Amber",
        "address": "1607 Alder St, El Dorado",
        "email": "quincy.amber@example.com",
        "phone": "555-5671",
        "amount": 275.00,
        "join_date": "2023-07-07",
    },
    {
        "uid": 20,
        "name": "Rachel Ruby",
        "address": "1708 Redwood St, Valhalla",
        "email": "rachel.ruby@example.com",
        "phone": "555-6784",
        "amount": 4000.75,
        "join_date": "2023-08-25",
    },
    {
        "uid": 11,
        "name": "Ian Grey",
        "address": "808 Magnolia St, Mystic Falls",
        "email": "ian.grey@example.com",
        "phone": "555-8762",
        "amount": 5000.75,
        "join_date": "2022-11-12",
    },
    {
        "uid": 12,
        "name": "Jasmine Violet",
        "address": "909 Juniper St, Emerald City",
        "email": "jasmine.violet@example.com",
        "phone": "555-4326",
        "amount": 1350.00,
        "join_date": "2022-12-05",
    },
    {
        "uid": 13,
        "name": "Kevin Brown",
        "address": "1001 Beech St, Kings Landing",
        "email": "kevin.brown@example.com",
        "phone": "555-1237",
        "amount": 1800.25,
        "join_date": "2023-01-09",
    },
    {
        "uid": 14,
        "name": "Laura Purple",
        "address": "1102 Spruce St, Winterfell",
        "email": "laura.purple@example.com",
        "phone": "555-5672",
        "amount": 2900.50,
        "join_date": "2023-02-18",
    },
    {
        "uid": 15,
        "name": "Mike Gold",
        "address": "1203 Poplar St, Hogwarts",
        "email": "mike.gold@example.com",
        "phone": "555-6783",
        "amount": 625.00,
        "join_date": "2023-03-21",
    },
    {
        "uid": 16,
        "name": "Nina Silver",
        "address": "1304 Cypress St, Narnia",
        "email": "nina.silver@example.com",
        "phone": "555-8764",
        "amount": 1450.75,
        "join_date": "2023-04-11",
    },
    {
        "uid": 17,
        "name": "Oscar Gold",
        "address": "1405 Walnut St, Rapture",
        "email": "oscar.gold@example.com",
        "phone": "555-4329",
        "amount": 2350.00,
        "join_date": "2023-05-27",
    },
    {
        "uid": 18,
        "name": "Paula Emerald",
        "address": "1506 Hickory St, Atlantis",
        "email": "paula.emerald@example.com",
        "phone": "555-1235",
        "amount": 3200.50,
        "join_date": "2023-06-19",
    },
    {
        "uid": 19,
        "name": "Quincy Amber",
        "address": "1607 Alder St, El Dorado",
        "email": "quincy.amber@example.com",
        "phone": "555-5671",
        "amount": 275.00,
        "join_date": "2023-07-07",
    },
    {
        "uid": 20,
        "name": "Rachel Ruby",
        "address": "1708 Redwood St, Valhalla",
        "email": "rachel.ruby@example.com",
        "phone": "555-6784",
        "amount": 4000.75,
        "join_date": "2023-08-25",
    }
]

const Columns = Object.keys(Data[0])
console.log(Columns)

const Payments = () => {
    return (
        <MainContainer>
            <SideNav />
            <ContentContainer>
                <Header />

                <BodyDiv>

                    <ActionsDiv>
                        <SearchDiv>
                            <Search>
                                <Icon2><BsSearch /></Icon2>
                                <InputTag />

                            </Search>

                        </SearchDiv>

                        <CreateNewBtn type='button'>
                            Record Payment
                            <Icon> <TbCircleDashedPlus /> </Icon>
                        </CreateNewBtn>

                    </ActionsDiv>

                    <DataDiv>

                        <Table>
                            <Thead>
                                <TrTag>
                                    {Columns.map(col => (
                                        <ThTag key={col}>{col}</ThTag>
                                    ))}
                                    <ThTag style={{ textAlign: 'center' }}>Action</ThTag>
                                </TrTag>
                            </Thead>

                            <tbody >
                                {Data.map((each, index) => (
                                    <TrTag key={index}>
                                        {Object.keys(each).map(row => (
                                            row !== 'action' ?
                                                <TdTag key={each[row]}>{each[row]}</TdTag> :
                                                <TdTag key={each[row]}>{each[row] ? 'true' : 'false'}</TdTag>
                                        ))}

                                        <TdTag>
                                            <OperationDiv>
                                                <Btn style={{ color: 'blue', justifyContent: 'right' }}>
                                                    <TbEdit />
                                                </Btn>
                                                <Line />
                                                <Btn style={{ color: 'red' }}>
                                                    <MdDeleteForever />
                                                </Btn>

                                            </OperationDiv>
                                        </TdTag>
                                    </TrTag>
                                ))}

                            </tbody>

                        </Table>

                    </DataDiv>


                </BodyDiv>

            </ContentContainer>


        </MainContainer>
    )
}

export default Payments