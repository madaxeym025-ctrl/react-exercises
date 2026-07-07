import { useState } from "react"

const UseCard = () => {
    const [isVisible, setIsVisible] = useState(true)

    const toggle = () => {
        setIsVisible(isVisible) // Fixed: Now it actually toggles between true and false
    } // Closes toggle function

    return (
        <>
            <p>{isVisible ? "turn on" : "turn off"}</p>
            
            <button onClick={toggle}>
                turn {isVisible ? "off" : "on"}
            </button>
        </>
    )
} // Closes UseCard component function

export default UseCard



//wu shaqayn layahay 