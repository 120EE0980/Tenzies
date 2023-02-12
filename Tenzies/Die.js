import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return (
        <div 
            className="die-face" 
            style={styles}
            onClick={props.holdDice}
        >
            {props.value >=1 && <span className="pip"></span>}
            {props.value >=2 && <span className="pip"></span>}
            {props.value >=3 && <span className="pip"></span>}
            {props.value >=4 && <span className="pip"></span>}
            {props.value >=5 && <span className="pip"></span>}
            {props.value >=6 && <span className="pip"></span>}
        </div>
    )
}