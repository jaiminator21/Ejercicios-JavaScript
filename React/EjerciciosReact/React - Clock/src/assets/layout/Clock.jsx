import {useState, useEffect} from 'react'

const Clock = () => {
    const [clockState, setClockState] = useState();

    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [time, setTime] = useState("")
    const date = new Date();
    
    useEffect(() => {
      setInterval(() => {
        setClockState(date.toLocaleTimeString());
        setDay(date.getDay())
        setMonth(date.getMonth())
        setYear(date.getFullYear())
      }, 1000);
    }, []);

    


console.log(time);


  return (
    <>
        <div className="digital-clock">
            <h1>{`Today is ${day}/${month}/${year}`}</h1>
            
            <h1>{clockState}</h1>
        </div>
    </>
  )
}




export default Clock