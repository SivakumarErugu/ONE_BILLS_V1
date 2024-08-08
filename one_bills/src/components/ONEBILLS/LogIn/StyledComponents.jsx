import styled from "styled-components";

export const ParentContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
`

export const ChildDiv1 = styled.div`
    width: 55vw;
    height: 100vh;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ChildDiv2 = styled.div`
    width: 45vw;
    height: 100vh;
    background: #4361ee;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 0rem 0rem 0rem 20%;
`

export const LoginForm = styled.form`
    height: 50%;
    width: 50%;
    position: relative;
    /* border: 1px solid red; */
`
export const Title = styled.h1`
    font-size: 2rem;
`

export const Text = styled.p`
    color: #6c757d;
    margin: 0;
    padding: 0;
`

export const HrTag = styled.hr`
    padding: 0;
    margin: 0.5rem 0rem 0rem 0rem;
`

export const InputsCon = styled.div`
    /* border: 1px solid red; */
    margin-top: 1rem;
`
export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0.8rem 0rem 0.8rem 0rem;
`
export const LabelTag = styled.label`

`
export const LabelTag2 = styled.label`
    font-size: 0.8rem;
    margin-left: 0.5rem;
`
export const InputTag = styled.input`
    border-radius: 0.3rem;
    padding: 0.3rem;
    border: 2px solid #ccc;

    &:focus {
        outline: 2px solid #4361ee;
        border: none;
    }
`;
export const SupTag = styled.sup`
    margin: 0;
`
export const Btn = styled.button`
    padding: 0;
    height: fit-content;
    width: fit-content;
    position: absolute;
    bottom: 11%;
    right: 2%;
    outline: none !important;
    border: none;
    cursor: pointer;
`
export const SpanTag = styled.span`
    font-size: 0.8rem;
    float: right;
`
export const Div = styled.div`
    display: flex;
    align-items: center;
    padding: 0;
    /* border: 1px solid red; */
`
export const LoginBtn = styled.button`
    height: 2.5rem;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4318FF;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 50%;
    right: 50%;
    transform: translate(-50%);
    padding: 1rem;
    border-radius: 0.8rem;
`