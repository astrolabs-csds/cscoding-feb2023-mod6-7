import { useState } from 'react';

function CounterButton() {
    var [label, setLabel] = useState(0)

    function changeLabel() {
        setLabel(label + 1)
    }

    return (
        <button 
        onClick={changeLabel}
        className="btn btn-primary">
            {label}
        </button>
    )

}

export default CounterButton;