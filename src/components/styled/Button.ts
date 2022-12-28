import styled from 'styled-components'
import { DefaultTheme } from 'styled-components'

interface ButtonProps {
  theme: DefaultTheme
}

const Button = styled.button<ButtonProps>`
  font-family: 'Rubik Bubbles', cursive;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  &:hover {
    color: black;
  }
`

export default Button
