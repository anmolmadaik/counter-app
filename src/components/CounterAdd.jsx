import "../css/CounterRow.css"

export default function CounterAdd({onAdd}){
    return (
        <div className="counter-card counter-card--add">
            <div className="counter-card__add" onClick={onAdd}>+</div>
        </div>
    );
};