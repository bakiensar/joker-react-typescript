import axios from 'axios'
import React, { useState } from 'react'
import {
  Wrapper,
  Row,
  Header,
  Image,
  Form,
  Search,
  Button,
} from './components/styled/index'
import { Joke, Flag, Category } from './common/type'
import JokeItem from './components/JokeItem'
import joke from './image/joke2.svg'

const BASE_URL = 'https://v2.jokeapi.dev/joke/Any'

const App = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)
  const [jokes, setJokes] = useState<Joke[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const getJokes = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const ENDPOINT = `${BASE_URL}?contains=${search}&amount=10`
    const { data } = await axios.get(ENDPOINT)
    //console.log('DATA:::', data)

    if (data.error) {
      setError(true)
      setJokes([])
    } else {
      setError(false)
      setJokes(data.jokes)
    }
    setSearch('')
  }

  return (
    <div>
      <Wrapper>
        <Row>
          <Header>ŞAKKA:))</Header>
          <Image src={joke} alt="image" />
        </Row>
        <Form onSubmit={getJokes}>
          <Search
            placeholder="Şakala:))"
            type="text"
            value={search}
            onChange={handleChange}
          />
          <Button type="submit">Yapıştır</Button>
        </Form>
        <div>
          {error && <p>Pardon yaa pek keyfim yok :((</p>}

          {
            // @ts-ignore
            jokes && jokes.map((joke) => <JokeItem key={joke.id} joke={joke} />)
          }
        </div>
      </Wrapper>
    </div>
  )
}

export default App
