import styled from "styled-components";

export const FormBox = styled.form`
    margin: 1rem 0;
    padding: 1rem;
    background: ${({theme}) => theme.background.light};
    border-radius: 0.5rem;
    footer {
        p {
            margin: 0;
            padding: 1rem;
            color: ${({theme}) => theme.text.dark};
            font-size: ${({theme}) => theme.fontClamp(22, 26)};
            font-weight: 500;
            text-align: center;
            background: ${({theme}) => theme.background.white};
            border-radius: 0.5rem;
            strong {
                font-size: ${({theme}) => theme.fontClamp(32, 42)};
            }
        }
    }
    .options-set {
        display: grid;
        justify-content: flex-start;
        grid-template-columns: repeat(auto-fit, 250px);
        legend {
            width: 100%;
        }
    }
`

export const InputBox = styled.div`
    width: 100%;
    margin: 0.5rem 0;
    input, select, textarea {
        width: 100%;
        margin: 0.5rem 0;
        padding: 0.25rem;
        border: none;
        border-radius: 0.25rem;
    }
    select, input[type="range"], input[type="radio"] {
        cursor: pointer;
    }
    label {
        display: flex;
        /* flex-wrap: wrap; */
        gap: 0.5rem;
        align-items: center;
        /* min-width: 200px; */
        &.show-pointer {
            cursor: pointer;
        }
        input[type="radio"] {
           
        }
    }
`

export const InputGroup = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 1rem;
    span {
        
        &.normal {
            color: ${({theme}) => theme.text.secondary};
            font-weight: 500;
        }
        &.blur {
            color: transparent;
            text-shadow: 0 0 3px rgba(0, 0, 0, 0.35);
        }
    }
`