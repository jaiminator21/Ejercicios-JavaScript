import {useState, useEffect} from 'react'

const Crono = () => {
    const [time, setTime] = useState()
    const [pause, setPause] = useState()

    useEffect(()=>{

    })



  return (
    <>
        <h1>{time}</h1>
        <button onClick={() => setPause(true)}>Start</button>
        <button onClick={() => setPause(false)}>Stop</button>
        <button onClick={() => setPause(true)}>Resume</button>
        <button onClick={() => setTime(0)}>Reset</button>
    </>
  )
}

export default Crono