import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`
export const ContentContainer = styled.div`
    height: 100vh;
    width: 85vw;
    background: #F4F7FE;
`
export const BodyDiv = styled.div`
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.8rem 1rem 1rem 1rem;
`
export const ActionsDiv = styled.div`
    height: 7vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const CreateNewBtn = styled.button`
    padding: 0rem 0.5rem 0rem 0.5rem;
    height: 2.4rem;
    min-width: 8rem;
    max-width: fit-content;
    background: #3965FF;
    color: #FFF;
    border-radius: 0.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
export const Icon = styled.span`
    font-size: 1.8rem;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    margin-left: 0.3rem;
`

export const SearchDiv = styled.div`
    width: 45%;
    height: 2.8rem;
    background: #FFF;
    border-radius: 2rem;
    padding: 0.4rem;
`
export const Search = styled.div`
    width: 100%;
    height: 100%;
    background: #F4F7FE;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    padding: 0.2rem 0.2rem 0.2rem 0.4rem;
`

export const Icon2 = styled.span`
    font-size: 1.4rem;
    width: 5%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
`

export const InputTag = styled.input`
    height: 100%;
    width: 94%;
    border: none;
    outline: none;
    background: transparent;
`
export const DataDiv = styled.div`
    height: 80vh;
    width: 100%;
    display: flex;
    overflow-y: auto;
    border-radius: 1rem;
    margin-top: 1vh;
    flex-grow: 1;

    &::-webkit-scrollbar{
            width: 3px;
    }
    &::-webkit-scrollbar-track{
        background: transparent;
    }
    &::-webkit-scrollbar-thumb{
        background: transparent;
    }

    &:hover{
        &::-webkit-scrollbar-thumb{
        background: #ccc;
    }
    }
    
`
export const Table = styled.table`
    height: 100%;
    width: 100%;
    border-collapse: collapse;
    background: #FFF;
    border-radius: 1rem;
`

export const TrTag = styled.tr`
    margin: 0rem 1rem 0rem 1rem !important;
    border-radius: 1rem !important;
    position: relative;

    &:hover{
        background: #ced4da;
    }
`

export const ThTag = styled.th`
    height: 1.8rem;
    background: transparent;
    position: sticky;
    top: 0;
    z-index: 5;
    background: #FFF;
    padding: 0rem 1rem 0rem 1rem;
    color: #adb5bd;
`

export const TdTag = styled.td`
    width: fit-content;
    text-align: left;
    padding: 0rem 1rem 0rem 1rem;
    color: #2B3674;
    font-size: 1rem;
    font-weight: 400;
    font-family: system-ui;

`

export const Thead = styled.thead`
    width: 100%;
`

export const OperationDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Btn = styled.button`
    padding: 0;
    margin: 0;
    font-size: 1.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 0;
    width: 100%;
    background: transparent;
`

export const Line = styled.hr`
    width: 1px;
    height: 1rem;
    background-color: black; 
    transform: rotate(180deg);
    margin: 0 auto;
    border: none;  
`