
import "../css/CounterDialog.css"

export default function CounterDialog({ onCancel, onOK }) {


    return (
        <div className="counter-dialog">
            <form onSubmit={(e) => onOK(e)}>
                <label>Enter Title:</label>
                <input label="Enter Title:" name="title" id='dialogID'></input>
                <label>Enter Value:</label>
                <input label="Enter Value:" name="value" type="number" min="0" id="dialogValue" defaultValue="0" required></input>
                <button onClick={(e) => onCancel(e)}>Cancel</button>
                <button>OK</button>
            </form>
        </div>
    )
}