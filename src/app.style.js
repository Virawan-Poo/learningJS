import styled from 'styled-components'
import { ENUM_ACTION } from './enum'

export const Container = styled.div`
  max-width: 1170px;
  margin: auto;
`

export const Navbutton = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
`

export const Button = styled.button`
  font-size: 1em;
  border: none;
  outline: none;
  min-width: 132px;
  height: 60px;
  margin-left: 1em;
  cursor: pointer;
  ${(props) => (props.isActive === ENUM_ACTION.ACTIVE ? 'background-color: #000; color: white;' : 'background-color: #ddd; color: #000;')}

  &.active,
  &:hover {
    background-color: #000000;
    color: white;
  }

  &:first-child {
    margin-left: 0;
  }
`

export const SearchBar = styled.div`
  text-align: center;
  margin: 2em 0;

  input {
    width: 300px;
    height: 45px;
    padding: 0 1em;
    font-size: 1em;
    display: inline-block;
  }

  a {
    color: #00b9ff;
    text-transform: uppercase;
    font-weight: 700;
    margin-left: 10px;
    cursor: pointer;
  }
`

export const CardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
`

export const Card = styled.div`
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 3px 3px rgb(0 0 0 / 25%);
`

export const CardImage = styled.div`
  height: 200px;
  overflow: hidden;
`

export const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Name = styled.h4`
  color: #999;
`

export const Descript = styled.p`
  color: #4b4b4b;
`
