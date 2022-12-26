import React from 'react'
import {
  CardWrapper,
  CardTop,
  CardBottom,
  Setup,
  Delivery,
} from './styled/index'
import { Joke, Flag, Category } from '../common/type'

interface JokeItemProps {
  joke: Joke
}

const JokeItem: React.FC<JokeItemProps> = ({ joke }) => {
  return (
    <CardWrapper>
      <CardTop>
        {joke.type === 'single' ? (
          <p>{joke.joke}</p>
        ) : (
          <>
            <Setup>{joke.setup}</Setup>
            <Delivery>{joke.delivery}</Delivery>
          </>
        )}
      </CardTop>
      <CardBottom>
        <p>{joke.category}</p>
      </CardBottom>
    </CardWrapper>
  )
}

export default JokeItem
