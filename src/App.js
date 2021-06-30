import { useEffect, useState } from 'react'
import './App.css'

function App () {
  // Codigo para ejemplo y explicación
  const [counter, setCounter] = useState(0)
  const [minusCounter, setMinusCounter] = useState(0)

  const [data, setData] = useState(null)

  // Como hacer una petición
  useEffect(() => {
    const metodo = async () => {
      let url = 'https://pokeapi.co/api/v2/pokemon/ditto'
      const response = await fetch(url).then(res => res.json())
      setData(response)
    }

    metodo()
  }, [])

  useEffect(() => {
    if (data) {
      console.log(data.base_experience)
    }
  }, [data])

  // useEffect(() => {
  //   let i = 0
  //   const sub = setInterval(() => {
  //     console.log(i)
  //     i++
  //   }, 1000)

  //   return () => {
  //     console.log('Sub:', sub)
  //     clearInterval(sub)
  //   }
  // }, [minusCounter])

  return (
    <div className='App'>
      <header className='App-header'>
        <h3>{counter}</h3>
        <button
          onClick={() => {
            setCounter(counter + 1)
            setMinusCounter(minusCounter - 1)
          }}
        >
          Uno mas
        </button>
      </header>
    </div>
  )
}

export default App
