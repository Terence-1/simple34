module.exports = {
  params: {
    designator: 'H',
  },
  body: p => {
    function arcPoints(cx, cy, r, startAngle, endAngle, steps = 8) {
      const pts = []
      for (let i = 0; i <= steps; i++) {
        const t = i / steps
        const angle = startAngle + t * (endAngle - startAngle)
        pts.push([
          cx + r * Math.cos(angle * Math.PI / 180),
          cy + r * Math.sin(angle * Math.PI / 180)
        ])
      }
      return pts
    }

    const arc1 = arcPoints(-7.7, 3.7, 2.6, 270, 90, 8)
    const arc2 = arcPoints(2.7, 5.9, 2.6, 270, 450, 12).reverse()

    const pts = [
      [-6.35,  1.1],
      [-7.7,   1.1],
      ...arc1,
      [-7.7,   6.3],
      [-4.4,   6.3],
      [-1.7,   8.5],
      [ 2.7,   8.5],
      ...arc2,
      [ 2.7,   3.3],
      [-0.9,   3.3],
      [-3.6,   1.1],
      [-4.65,  1.1],
    ]

    const lines = pts.map((pt, i) => {
      const next = pts[(i + 1) % pts.length]
      return `(fp_line (start ${pt[0].toFixed(3)} ${pt[1].toFixed(3)}) (end ${next[0].toFixed(3)} ${next[1].toFixed(3)}) (layer "Edge.Cuts") (width 0.05))`
    }).join('\n')

    return `
      (footprint "switch_outline"
        (layer "F.Cu")
        ${p.at}
        ${lines}
      )
    `
  }
}