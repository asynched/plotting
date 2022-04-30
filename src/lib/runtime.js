export class Plot2D {
  constructor({ f, range, step }) {
    this.f = f
    this.range = range
    this.step = step
  }

  getPlot() {
    const [start, end] = this.range
    const values = []

    if (start <= end) {
      for (let i = start; i <= end; i += this.step) {
        values.push([i, this.f(i)])
      }

      return values
    }

    for (let i = start; i >= end; i += this.step) {
      values.push([i, this.f(i)])
    }

    return values
  }
}

export class PlotGenerator {
  static generatePlot(code) {
    const evaluate = code + '\ngetOptions();'
    const options = eval(evaluate)
    const plot = new Plot2D(options)
    return plot.getPlot()
  }
}
