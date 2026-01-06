function wheelCircumference(width, aspect, rim) {
    const rimMm = rim * 25.4
    const sidewall = width * (aspect / 100) * 2
    return Math.PI * (rimMm + sidewall) / 1000
}

function speedAtRpm(rpm, gear, finalDrive, circ) {
    return (rpm / (gear * finalDrive)) * circ * 60 / 1000
}

function hexToRgb(hex) {
    const m = hex.replace('#', '')
    return {
        r: parseInt(m.substring(0, 2), 16),
        g: parseInt(m.substring(2, 4), 16),
        b: parseInt(m.substring(4, 6), 16)
    }
}

function colorDistance(c1, c2) {
    return Math.sqrt(
        Math.pow(c1.r - c2.r, 2) +
        Math.pow(c1.g - c2.g, 2) +
        Math.pow(c1.b - c2.b, 2)
    )
}

function hslToHex(h, s, l) {
    s /= 100
    l /= 100

    const k = n => (n + h / 30) % 12
    const a = s * Math.min(l, 1 - l)
    const f = n =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))

    return (
        '#' +
        [f(0), f(8), f(4)]
            .map(x => Math.round(255 * x).toString(16).padStart(2, '0'))
            .join('')
    )
}

export function generateContrastColor(existingColors = []) {
    // если цветов нет — стартуем с яркого красного
    if (!existingColors.length) return '#E6194B'

    const existingRgb = existingColors.map(hexToRgb)

    let bestColor = '#000000'
    let bestDistance = -1

    // пробуем цвета по кругу HSL
    for (let h = 0; h < 360; h += 15) {
        const hex = hslToHex(h, 85, 50)
        const rgb = hexToRgb(hex)

        const minDistance = Math.min(
            ...existingRgb.map(c => colorDistance(c, rgb))
        )

        if (minDistance > bestDistance) {
            bestDistance = minDistance
            bestColor = hex
        }
    }

    return bestColor
}

export function generateDataset(t) {
    const circ = wheelCircumference(
        t.tire.width,
        t.tire.aspect,
        t.tire.rim
    )

    const data = []
    let prevSpeed = 0
    let prevRpm = 0

    t.gears.forEach((gear, index) => {
        if (!gear || gear <= 0) return

        const vMax = speedAtRpm(t.redline, gear, t.main, circ)

        data.push({
            x: prevSpeed,
            y: prevRpm,
            gear: index + 1
        })

        data.push({
            x: vMax,
            y: t.redline,
            gear: index + 1
        })

        if (index < t.gears.length - 1) {
            const nextGear = t.gears[index + 1]
            const rpmDrop = t.redline * (nextGear / gear)

            data.push({
                x: vMax,
                y: rpmDrop,
                gear: index + 2
            })

            prevSpeed = vMax
            prevRpm = rpmDrop
        }
    })

    return {
        label: t.label,
        data,
        borderColor: t.color,
        borderWidth: 2,
        showLine: true,
        fill: false,
        originalBorderColor: t.color
    }
}