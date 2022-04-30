import { useState, useEffect } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'

import { generatePlot } from '@/boxes'
import styles from '@/components/Editor/index.module.css'

const DEFAULT_INITIAL_CODE =
  '// f(x) = cos(x)\nconst cos = (x) => Math.cos(x)\n\n// f(x) = sin(x)\nconst sin = (x) => Math.sin(x)\n\n// f(x) = x^2 * 2x + 1\nconst quadratic = (x) => x * x * 2 * x + 1\n\n// f(x) = ?\nconst random = () => (Math.random() * 1024) % 512\n\n// f(x) = log(x)\nconst log = (x) => Math.log(x)\n\n/**\n * # getOptions\n *\n * Use this as an export for your\n * chart options.\n *\n * step:  Acts as an increment by for the x axis.\n * range: The range of the x axis.\n * f:     The function to be graphed.\n */\nconst getOptions = () => ({\n  step: 1.5,\n  range: [-100, 100],\n  f: cos,\n})\n'

export default function Editor() {
  const [input, setInput] = useState(DEFAULT_INITIAL_CODE)

  useEffect(() => {
    generatePlot(DEFAULT_INITIAL_CODE)
  }, [])

  return (
    <div className={styles.editor}>
      <CodeMirror
        extensions={[javascript()]}
        value={input}
        onChange={(value) => setInput(value)}
      />
      <button onClick={() => generatePlot(input)}>Calculate</button>
    </div>
  )
}
