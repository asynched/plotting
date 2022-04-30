import createBox from 'blackbox.js'
import { PlotGenerator } from '@/lib/runtime'

const appBox = createBox({
  executionTime: 0,
  data: [],
})

export function generatePlot(code) {
  let start = performance.now()
  const plot = PlotGenerator.generatePlot(code)
  let end = performance.now()

  appBox.set((state) => {
    state.executionTime = end - start
    state.data = plot.map(([x, y]) => ({ x, y }))
    return state
  })
}

export default appBox
