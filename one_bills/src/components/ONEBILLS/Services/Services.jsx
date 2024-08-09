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
        "Uid": 1,
        "name": "Basic Cleaning",
        "description": "A standard cleaning service for homes and apartments.",
        "price": 50.00,
        "tax_rate": 0.07,
        "category": "Cleaning",
        "duration": "2 hours",
        "availability": "Available"
    },
    {
        "Uid": 2,
        "name": "Deep Cleaning",
        "description": "In-depth cleaning service including all rooms and appliances.",
        "price": 120.00,
        "tax_rate": 0.07,
        "category": "Cleaning",
        "duration": "4 hours",
        "availability": "Available"
    },
    {
        "Uid": 3,
        "name": "Lawn Mowing",
        "description": "Regular lawn mowing and trimming services.",
        "price": 30.00,
        "tax_rate": 0.05,
        "category": "Landscaping",
        "duration": "1 hour",
        "availability": "Available"
    },
    {
        "Uid": 4,
        "name": "Tree Trimming",
        "description": "Trimming and pruning of trees and shrubs.",
        "price": 75.00,
        "tax_rate": 0.05,
        "category": "Landscaping",
        "duration": "3 hours",
        "availability": "Available"
    },
    {
        "Uid": 5,
        "name": "Car Wash",
        "description": "Exterior and interior car wash services.",
        "price": 25.00,
        "tax_rate": 0.06,
        "category": "Automotive",
        "duration": "1 hour",
        "availability": "Available"
    },
    {
        "Uid": 6,
        "name": "Oil Change",
        "description": "Full-service oil change with filter replacement.",
        "price": 40.00,
        "tax_rate": 0.06,
        "category": "Automotive",
        "duration": "45 minutes",
        "availability": "Available"
    },
    {
        "Uid": 7,
        "name": "Personal Training",
        "description": "One-on-one fitness training sessions.",
        "price": 60.00,
        "tax_rate": 0.08,
        "category": "Fitness",
        "duration": "1 hour",
        "availability": "Available"
    },
    {
        "Uid": 8,
        "name": "Yoga Class",
        "description": "Group yoga sessions for all levels.",
        "price": 20.00,
        "tax_rate": 0.08,
        "category": "Fitness",
        "duration": "1 hour",
        "availability": "Available"
    },
    {
        "Uid": 9,
        "name": "Massage Therapy",
        "description": "Relaxing full-body massage therapy.",
        "price": 80.00,
        "tax_rate": 0.07,
        "category": "Wellness",
        "duration": "1 hour",
        "availability": "Available"
    },
    {
        "Uid": 10,
        "name": "Acupuncture",
        "description": "Traditional acupuncture for pain relief and wellness.",
        "price": 100.00,
        "tax_rate": 0.07,
        "category": "Wellness",
        "duration": "1 hour",
        "availability": "Available"
    },
    {
        "Uid": 11,
        "name": "Pet Grooming",
        "description": "Full grooming services for dogs and cats.",
        "price": 45.00,
        "tax_rate": 0.06,
        "category": "Pet Care",
        "duration": "2 hours",
        "availability": "Available"
    },
    {
        "Uid": 12,
        "name": "Dog Walking",
        "description": "Daily dog walking service.",
        "price": 20.00,
        "tax_rate": 0.06,
        "category": "Pet Care",
        "duration": "30 minutes",
        "availability": "Available"
    },
    {
        "Uid": 13,
        "name": "Tutoring",
        "description": "Private tutoring for various subjects.",
        "price": 50.00,
        "tax_rate": 0.05,
        "category": "Education",
        "duration": "1 hour",
        "availability": "Available"
    },
    {
        "Uid": 14,
        "name": "Music Lessons",
        "description": "Private music lessons for piano, guitar, and more.",
        "price": 40.00,
        "tax_rate": 0.05,
        "category": "Education",
        "duration": "1 hour",
        "availability": "Available"
    },
    {
        "Uid": 15,
        "name": "Web Development",
        "description": "Custom website development services.",
        "price": 1000.00,
        "tax_rate": 0.08,
        "category": "IT Services",
        "duration": "Varies",
        "availability": "Available"
    },
    {
        "Uid": 16,
        "name": "Graphic Design",
        "description": "Professional graphic design for branding and marketing.",
        "price": 200.00,
        "tax_rate": 0.08,
        "category": "IT Services",
        "duration": "Varies",
        "availability": "Available"
    },
    {
        "Uid": 17,
        "name": "Photography",
        "description": "Professional photography sessions for events and portraits.",
        "price": 150.00,
        "tax_rate": 0.07,
        "category": "Creative Services",
        "duration": "2 hours",
        "availability": "Available"
    },
    {
        "Uid": 18,
        "name": "Video Production",
        "description": "Full-service video production for events and marketing.",
        "price": 500.00,
        "tax_rate": 0.07,
        "category": "Creative Services",
        "duration": "Varies",
        "availability": "Available"
    },
    {
        "Uid": 19,
        "name": "Interior Design Consultation",
        "description": "Professional consultation for home and office interiors.",
        "price": 100.00,
        "tax_rate": 0.07,
        "category": "Consulting",
        "duration": "1 hour",
        "availability": "Available"
    },
    {
        "Uid": 20,
        "name": "Tax Preparation",
        "description": "Comprehensive tax preparation services.",
        "price": 150.00,
        "tax_rate": 0.08,
        "category": "Financial Services",
        "duration": "2 hours",
        "availability": "Available"
    },
    {
        "Uid": 21,
        "name": "Legal Consultation",
        "description": "Initial legal consultation on various matters.",
        "price": 200.00,
        "tax_rate": 0.08,
        "category": "Legal Services",
        "duration": "1 hour",
        "availability": "Available"
    },
    {
        "Uid": 22,
        "name": "House Painting",
        "description": "Interior and exterior house painting services.",
        "price": 500.00,
        "tax_rate": 0.06,
        "category": "Home Improvement",
        "duration": "Varies",
        "availability": "Available"
    },
    {
        "Uid": 23,
        "name": "Plumbing Repair",
        "description": "Repair services for leaks, clogs, and other plumbing issues.",
        "price": 80.00,
        "tax_rate": 0.06,
        "category": "Home Improvement",
        "duration": "1 hour",
        "availability": "Available"
    },
    {
        "Uid": 24,
        "name": "Electrical Repair",
        "description": "Electrical troubleshooting and repair services.",
        "price": 90.00,
        "tax_rate": 0.06,
        "category": "Home Improvement",
        "duration": "1 hour",
        "availability": "Available"
    },
    {
        "Uid": 25,
        "name": "Roof Repair",
        "description": "Roof inspection and repair services.",
        "price": 600.00,
        "tax_rate": 0.06,
        "category": "Home Improvement",
        "duration": "Varies",
        "availability": "Available"
    }, {
        "Uid": 15,
        "name": "Web Development",
        "description": "Custom website development services.",
        "price": 1000.00,
        "tax_rate": 0.08,
        "category": "IT Services",
        "duration": "Varies",
        "availability": "Available"
    },
    {
        "Uid": 16,
        "name": "Graphic Design",
        "description": "Professional graphic design for branding and marketing.",
        "price": 200.00,
        "tax_rate": 0.08,
        "category": "IT Services",
        "duration": "Varies",
        "availability": "Available"
    },
    {
        "Uid": 17,
        "name": "Photography",
        "description": "Professional photography sessions for events and portraits.",
        "price": 150.00,
        "tax_rate": 0.07,
        "category": "Creative Services",
        "duration": "2 hours",
        "availability": "Available"
    },
    {
        "Uid": 18,
        "name": "Video Production",
        "description": "Full-service video production for events and marketing.",
        "price": 500.00,
        "tax_rate": 0.07,
        "category": "Creative Services",
        "duration": "Varies",
        "availability": "Available"
    },
    {
        "Uid": 19,
        "name": "Interior Design Consultation",
        "description": "Professional consultation for home and office interiors.",
        "price": 100.00,
        "tax_rate": 0.07,
        "category": "Consulting",
        "duration": "1 hour",
        "availability": "Available"
    },
    {
        "Uid": 20,
        "name": "Tax Preparation",
        "description": "Comprehensive tax preparation services.",
        "price": 150.00,
        "tax_rate": 0.08,
        "category": "Financial Services",
        "duration": "2 hours",
        "availability": "Available"
    },
    {
        "Uid": 21,
        "name": "Legal Consultation",
        "description": "Initial legal consultation on various matters.",
        "price": 200.00,
        "tax_rate": 0.08,
        "category": "Legal Services",
        "duration": "1 hour",
        "availability": "Available"
    },
    {
        "Uid": 22,
        "name": "House Painting",
        "description": "Interior and exterior house painting services.",
        "price": 500.00,
        "tax_rate": 0.06,
        "category": "Home Improvement",
        "duration": "Varies",
        "availability": "Available"
    },
    {
        "Uid": 23,
        "name": "Plumbing Repair",
        "description": "Repair services for leaks, clogs, and other plumbing issues.",
        "price": 80.00,
        "tax_rate": 0.06,
        "category": "Home Improvement",
        "duration": "1 hour",
        "availability": "Available"
    },
    {
        "Uid": 24,
        "name": "Electrical Repair",
        "description": "Electrical troubleshooting and repair services.",
        "price": 90.00,
        "tax_rate": 0.06,
        "category": "Home Improvement",
        "duration": "1 hour",
        "availability": "Available"
    },
    {
        "Uid": 25,
        "name": "Roof Repair",
        "description": "Roof inspection and repair services.",
        "price": 600.00,
        "tax_rate": 0.06,
        "category": "Home Improvement",
        "duration": "Varies",
        "availability": "Available"
    }
]


const Columns = Object.keys(Data[0])
console.log(Columns)

const Services = () => {
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
                            Add Product
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

export default Services