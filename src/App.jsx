import { useState } from 'react'
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line } from 'recharts'
import { PlotGenerator } from '@/lib/runtime'
import { useEffect } from 'react'

function App() {
  const [input, setInput] = useState(
    'const getOptions = () => ({\n\tstep: 0.5,\n\trange: [-10, 10],\n\tf: (x) => x ** 2 + 2 * x + 1,\n})'
  )
  const [data, setData] = useState([])

  const handleClick = () => {
    const data = PlotGenerator.generatePlot(input)
    setData(data.map(([x, y]) => ({ x, y })))
  }

  return (
    <div>
      <h1>Code</h1>
      <pre>{input}</pre>
      <hr />
      <h2>Type in:</h2>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick}>Calculate</button>
      <ResponsiveContainer width="100%" height={512}>
        <LineChart width={500} height={500} data={data}>
          <XAxis dataKey="x" tickCount={5} />
          <YAxis dataKey="y" />
          <Line type="monotone" dataKey="y" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default App
