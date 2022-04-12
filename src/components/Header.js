import React from 'react'
import Text from './Text'
import Title from './Title'

import '../styles/header.scss'
import Emoji from './Emoji'

const Header = () => {
  return (
    <header class='heading'>
      <Title class='heading__title' text='NUMBERNATOR' as='h1' />
      <Text class='heading__subtitle' as='span'>
        Guess my number!
      </Text>
      <Text class='description' as='p'>
        I think of a number between 0 and 10.
        <br />I challenge you to guess what number did I think of.
      </Text>
      <Emoji label='Crystal ball' symbol='🔮' />
    </header>
  )
}

export default Header
