import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  input{
    width: 50vw;
    height: 2rem;
    padding: 0.5rem;

    border-style: solid;
    border-color: #D6D4E2;
    border-radius: 1rem;

    transition: border-color 0.5s;
  }

  input:hover{
    border-color:   #56874a;
  }

  input:focus{
    outline: 5px auto #56874a;
  }

  button {
    border-radius: 8px;
    border: 2px solid transparent;
    padding: 0.6em 1.2em;

    height: 3rem;

    font-size: 1em;
    font-weight: 500;
    font-family: inherit;

    cursor: pointer;
    transition: border-color 0.25s;

    background-color: #02B553;
    color: #ffff;
  }

  button:hover {
    border: 2px solid ;
    border-color: #56874a;
  }

  button:focus,
  button:focus-visible {
    outline: 30px auto #56874a;
  }
`
export const Title = styled.h1`
  font-size: 1.5rem;
  padding: 3rem 0rem;
  margin: 0;
`

