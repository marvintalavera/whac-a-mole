/* component that decides which child component is rendered. We will store a Boolean state variable called displayMole here. */

/* A handleClick function that will increment the score by 1 and immediately set the clicked-on mole to no longer display (we will pass this down only to Mole components) */

// A ternary that will determine which child to render

import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
    let [theMole, setTheMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setTheMole(false)
    }

    let displayMole = theMole ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />

    return (
        <div style={{ 'display': 'inline-block', 'width': '30vw' }}>
            {displayMole}
        </div>
    )
}

export default MoleContainer