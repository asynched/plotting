import Editor from '@/components/Editor'
import Chart from '@/components/Chart'

function App() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
      }}
    >
      <Editor />
      <Chart />
    </div>
  )
}

export default App
