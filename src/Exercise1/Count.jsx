import { useState } from "react"

const Count = () =>{
    const [count, setCount] = useState(0)
    const handleIncreament=()=>{
        setCount(count+1)
    }
    const handledeccreament=()=>{
        setCount(count-1)
    }
    return<>
    <h1>count:{count}</h1>
    <div className="flex gap-5">
    <button onClick={handledeccreament}>decreament</button>
    <button onClick={handleIncreament}>increament</button>
    </div>
    </>
}
export default Count