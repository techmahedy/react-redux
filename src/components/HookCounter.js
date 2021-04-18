import React, {useState} from 'react'

function HookCounter() {
    //useState() => three param, @initialStateVale, @currentStateValue @methodToChangeStateValue
    const [count, setValue] = useState(0)
    return (
        <div>
            <button onClick={() => setValue(count+1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter
