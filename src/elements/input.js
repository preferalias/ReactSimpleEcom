import styled from 'styled-components'

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const Form = styled.form`
  & > input {
    display:block;
  }
  padding:0.3em;
  display:inline-block;
`

export const Button = styled.button`
  background:"white";
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`