import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkDown] = useState('# markdown preview')

  const handleOnChange = (e) => {
    const value = e.target.value
    console.log(value)
    setMarkDown(value)
  }
  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => handleOnChange(e)}
        ></textarea>

        <article className='result'>
          {/* ReactMarkdown is the component imported from react native 3rd library  */}
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
