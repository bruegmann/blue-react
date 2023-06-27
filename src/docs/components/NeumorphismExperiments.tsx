import { useEffect, useRef } from "react"

const rgbToArray = (rgb: string) => rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)?.slice(1)

const rgbToHsl = ([r, g, b]: number[]) => {
    r /= 255
    g /= 255
    b /= 255
    const l = Math.max(r, g, b)
    const s = l - Math.min(r, g, b)
    const h = s ? (l === r ? (g - b) / s : l === g ? 2 + (b - r) / s : 4 + (r - g) / s) : 0
    return [
        Math.round(60 * h < 0 ? 60 * h + 360 : 60 * h),
        Math.round(100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)),
        Math.round((100 * (2 * l - s)) / 2)
    ]
}

export default function NeumorphismExperiments() {
    const ref = useRef<HTMLButtonElement>(null)

    const setCssProperties = () => {
        if (ref && ref.current) {
            const style = window.getComputedStyle(ref.current)

            /**
             * Try to get current background color and convert it to HSL, so L (lightning) can be changed dynamically!
             */
            if (style && style.backgroundColor) {
                const rgb = rgbToArray(style.backgroundColor)?.map((v) => parseInt(v))
                if (rgb) {
                    const [h, s, l] = rgbToHsl(rgb)

                    ref.current.style.setProperty("--neu-bg-inset", `hsl(${h}deg, ${s}%, ${l}%)`)
                    ref.current.style.setProperty("--neu-shadow-high-inset", `hsl(${h}deg, ${s}%, ${l + 4}%)`)
                    ref.current.style.setProperty("--neu-shadow-low-inset", `hsl(${h}deg, ${s}%, ${l - 4}%)`)
                }
            }
        }
    }

    useEffect(() => {
        setCssProperties()
    }, [ref])

    return (
        <>
            <div
                onClick={setCssProperties}
                className="neu-shadow-5 neu-shadow-inset-switch-3 p-5"
                style={{
                    width: 400,
                    height: 200,
                    borderRadius: "1rem",
                    margin: "2rem"
                }}
            >
                <button
                    ref={ref}
                    type="button"
                    className="btn btn-lg btn-primary neu-shadow-5 neu-shadow-inset-switch-3"
                >
                    Click me!
                </button>
            </div>
        </>
    )
}
