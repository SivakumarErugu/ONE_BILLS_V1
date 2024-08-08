import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100vh;
    width: 15vw;
    /* border: 1px solid #ccc; */
`
export const Title = styled.h1`
    height: 15vh;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    font-weight: 600;
`

export const Options = styled.div`
    height: fit-content;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem ;
`
export const Option = styled.div`
    height: 2.7rem;
    width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    color: #6c757d;
    margin: 0.5rem 0rem 0.5rem 0rem;
    border-radius: 0.5rem;
    padding-left: 0.2rem;
    background: transparent;
    cursor: pointer;
    border-right: ${props => (props.active ? '3px solid #4318FF' : 'none')};
    border-radius: ${props => (props.active ? '0.5rem 0rem 0rem 0.5rem' : '0.5rem')};

    &:hover{
        background: #caf0f8;
    }
` 
export const SpanTag = styled.span`
    padding: 0;
    margin-left: 0.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${props => (props.active ? '#000' : '6c757d')};
    font-weight: ${props => (props.active ? '650' : '600')};
`
export const Icon = styled.div`
    height: 100%;
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => (props.active ? '#4318FF' : '6c757d')};
    /* border: 1px solid red; */
`