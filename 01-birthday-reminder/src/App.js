import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button
          onClick={() => {
            setPeople([])
            console.log('you click me')
          }}
        >
          clear all
        </button>
        <button
          onClick={() => {
            if (people.length === 0) {
              setPeople(data)
            }
          }}
        >
          refresh
        </button>
      </section>
    </main>
  )
}

export default App
