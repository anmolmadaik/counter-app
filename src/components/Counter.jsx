import { useState } from "react"
import "../css/Counter.css"
import delete_image from "../assets/delete.jpg"

function getRandomTheme() {
    const hue = Math.floor(Math.random() * 360)
    return {
        border: `hsl(${hue}, 85%, 52%)`,
        buttonPrimary: `hsl(${hue}, 85%, 52%)`,
        buttonSecondary: `hsl(${(hue + 28) % 360}, 85%, 45%)`,
    }
}

export default function Counter({ title, initial = 0, id, increaseValue, decreaseValue, onDelete}) {
    
    let [theme] = useState(getRandomTheme);


    return (
        <div
            className="counter-card"
            style={{
                "--counter-border": theme.border,
                "--counter-button": theme.buttonPrimary,
                "--counter-button-alt": theme.buttonSecondary,
            }}
        >
            <button className="counter-card__delete" onClick={() => onDelete(id) } ><img src={delete_image} alt="delete" /></button>
            <div className="counter-card__title">{title}</div>
            <div className="counter-card__value">{initial}</div>
            <div className="counter-card__controls">
                <button
                    className="counter-card__button counter-card__button--decrease"
                    onClick={() => decreaseValue(id)}
                >
                    -
                </button>
                <button
                    className="counter-card__button counter-card__button--increase"
                    onClick={() => increaseValue(id)}
                >
                    +
                </button>
            </div>
        </div>
    )
}