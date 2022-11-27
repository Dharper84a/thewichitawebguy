import styled from "styled-components";

export const FormBox = styled.form`
    margin: 1rem 0;
    padding: 1rem;
    background: ${({theme}) => theme.background.light};
    border-radius: 0.5rem;

`

export const InputBox = styled.div`
    margin: 0.5rem 0;
    input, select, textarea {
        width: 100%;
        margin: 0.5rem 0;
        padding: 0.25rem;
        border: none;
        border-radius: 0.25rem;
    }
    select {
        cursor: pointer;
    }
`

export const InputGroup = styled.div``