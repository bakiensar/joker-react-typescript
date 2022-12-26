export type Flag = {
  nsfw: boolean
  explicit: boolean
  political: boolean
  sexist: boolean
  religious: boolean
  racist: boolean
}

export type Category =
  | 'Any'
  | 'Misc'
  | 'Programming'
  | 'Dark'
  | 'Pun'
  | 'Spooky'
  | 'Christmas'

export type Joke = {
  id: 297
  category: Category
  flags: Flag
  setup?: string
  delivery?: string
  joke?: string
  safe: boolean
  lang: 'css' | 'de' | 'en' | 'es' | 'fr' | 'pt'
  type: 'single' | 'twopart'
}
