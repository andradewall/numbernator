import Button from './components/Button'
import Emoji from './components/Emoji'
import Header from './components/Header'
import Input from './components/Input'
import Text from './components/Text'

import './styles/global.scss'

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <section className='challenge'>
          <Input
            label='So, tell me, what number did I think of?'
            type='number'
            name='number'
            min='0'
            max='10'
          />
          <Text className='error' as='span'>
            <Emoji symbol='😠' label='Angry face' />
            Hey, my number is between 0 and 10!
          </Text>
          <Button styles={['button--send']} type='submit'>
            That's your number!
          </Button>
        </section>

        <section className='result hidden'></section>
      </main>
    </div>
  )
}

export default App
