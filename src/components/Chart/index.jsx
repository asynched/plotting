import { useMemo } from 'react'
import { useDerivedBox } from 'blackbox.js'
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

import appBox from '@/boxes'
import styles from '@/components/Chart/index.module.css'

export default function Chart() {
  const data = useDerivedBox(appBox, (state) => state.data)
  const executionTime = useDerivedBox(appBox, (state) => state.executionTime)
  const max = useMemo(() => Math.max(...data.map((d) => d.y)), [data])
  const min = useMemo(() => Math.min(...data.map((d) => d.y)), [data])

  return (
    <div className={styles.chart}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 className={styles.subtitle}>Chart</h2>
        <ResponsiveContainer width="100%" height={512}>
          <AreaChart width={500} height={500} data={data}>
            <XAxis dataKey="x" tickCount={5} />
            <YAxis dataKey="y" />
            <Area
              type="monotone"
              dataKey="y"
              stroke="#00f"
              strokeOpacity={0.3}
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className={styles.info}>
        <h2 className={styles.subtitle}>Info</h2>
        <p>Max: {max}</p>
        <p>Min: {min}</p>
        <p>Dataset contains {data.length} items</p>
        <p>Calculating the plot took {executionTime}ms</p>
      </div>
    </div>
  )
}
