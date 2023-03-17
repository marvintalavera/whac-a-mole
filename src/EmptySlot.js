// This will represent an empty molehill or an invalid location to click. Much like its sister component, it will have an internal timer to cycle the display. This component will render when displayMole === false

// A useEffect hook that will start the timer and clean it up afterward
import { useEffect } from "react";
import MoleHill from './molehill.png'

const EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ 'width': '30vw' }} src={MoleHill} />
        </div>
    )
}

export default EmptySlot