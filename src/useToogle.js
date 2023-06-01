import { useState } from "react"

export const useToogle = (initial = false) => {
    const [state, setState] = useState(initial)

    const toogle = () => {
        setState((temp) => !temp)
    }

    return [state, toogle];
}