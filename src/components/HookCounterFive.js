import React, {useState,useEffect} from 'react'

function HookCounterFive() {
    //useState() => three param, @initialStateVale, @currentStateValue @methodToChangeStateValue
    const [count, setValue] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    //pass empty array as second argument to call useEffect only once
    return (
        <div>
            <button onClick={() => setValue(count+1)}>Count {count} times</button>
        </div>
    )
}

export default HookCounterFive
