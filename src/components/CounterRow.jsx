
import Counter from "./Counter"
import CounterDialog from "./CounterDialog"
import CounterAdd from "./CounterAdd"
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "../css/CounterRow.css"


export default function CounterRow() {

    let [showDialog, setShowDialog] = useState(false);

    let [counters, setCounters] = useState(JSON.parse(localStorage.getItem('counter') || "[]"));

    useEffect(() => {
        saveToLocalStorage()
    }, [counters]);

    function onDelete(id) {
        const newCounters = counters.filter((counter) => counter.key !== id);
        setCounters(newCounters);
    }

    function onAdd() {
        setShowDialog(true);
    }


    function onCancel(e) {
        e.preventDefault();
        setShowDialog(false);
        return;
    }

    function decreaseValue(key) {
        const result = counters.map(
            (counter) => {
                if (counter.key !== key) {
                    return counter;
                }
                else {
                    return {
                        ...counter,
                        value: counter.value == 0 ? 0 : counter.value - 1,
                    };
                }
            }
        )
        setCounters(result);
    }

    function increaseValue(key) {
        const result = counters.map(
            (counter) => {
                if (counter.key !== key) {
                    return counter;
                }
                else {
                    return {
                        ...counter,
                        value: counter.value + 1
                    };
                }
            }
        )
        setCounters(result);
    }



    function saveToLocalStorage() {
        localStorage.setItem('counter', JSON.stringify(counters));
    }

    function onOK(e) {
        e.preventDefault();
        let result = { title: "", value: "", key: "" };
        result.title = e.target.title.value;
        result.value = Number(e.target.value.value);
        result.key = uuidv4();
        setCounters([...counters, result]);
        setShowDialog(false);
    }

    return (
        <div className="counter-row">
            {counters.map(
                (counter) => {
                    console.log(counter);
                    return <Counter title={counter.title} initial={counter.value}  
                                    key={counter.key} id={counter.key} 
                                    onDelete={onDelete} increaseValue={increaseValue} 
                                    decreaseValue={decreaseValue}/>
                }
            )}
            {counters.length === 0 && <div className="counter-row__empty">Click + to get started</div>}
            <CounterAdd onAdd={onAdd}/>
            {showDialog ? <CounterDialog onCancel={onCancel} onOK={onOK} /> : null}
        </div>
    )



}