import styled from 'styled-components'
import { DefaultTheme } from 'styled-components'

interface SearchProps {
  theme: DefaultTheme
}

const Search = styled.input<SearchProps>`
  margin: 10px 15px 10px 0px;
  padding: 10px;
  width: 20rem;
  border-radius: 5px;
  font-family: 'Rubik Bubbles', cursive;
  &:focus {
    outline: none;
  }
  border: none;
  ::placeholder {
    font-family: 'Rubik Bubbles', cursive;
  }
`

export default Search
