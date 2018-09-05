import styled from 'styled-components'

export const ProductSpan = styled.span`
  display: inline-block;
  width: 30%;
  color: black;
  text-align: ${props => props.alignLeft ? "left" : "center"}
  line-height: 30px;
  padding-left: 5px;
`;

export const ItemWrapper = styled.div`
  border-radius: 3px;
  background: lightgray;
  padding: 1px;
  margin: auto;
  margin-top: 3px
  border: 1px solid gray;
  height: 30px;
`