import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 1rem;
  border: ${props => props.checked ? "solid 0.2rem #02B553": "solid 0.2rem #F5F4F6"};
  background-color: #FFFFFF;
  padding: 0.5rem;
  margin-bottom: 1rem;

  h3{
    margin: 0;
    font-size: 1.2rem;
    margin-left: 1rem;
    color: ${props => props.checked ? "#02B553" : "black"};
    text-decoration: ${props => props.checked ? "line-through" : "none"};
  }
`

export const Rows = styled.div`
  display: flex;
  align-items: center;
`

export const ContainerButton = styled.div`

  button {
    height: 3rem;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;

    cursor: pointer;
    transition: border-color 0.25s;

    background-color: none;
    background: none;
    border: none;
  }

`