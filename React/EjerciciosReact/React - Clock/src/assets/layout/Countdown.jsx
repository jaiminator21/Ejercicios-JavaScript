import {useState, useEffect} from 'react'

const Countdown = () => {
    // State variable to store the countdown time string
    const [time, setTime] = useState("");
  
    // useEffect hook to run the countdown logic on component mount
    useEffect(() => {
      // Set the target date and time for the countdown
      let countDownDate = new Date("April 3, 2060 12:00:00").getTime();
  
      // Interval handle to store the interval ID
      let x = setInterval(() => {
        // Get the current time in milliseconds
        //The funcion getTime() gives te time back in miliseconds
        let now = new Date().getTime();
        // Calculate the difference between target time and current time
        // This variable calculates the time remaining in milliseconds
        let distance = countDownDate - now;
        // Calculate days, hours, minutes, and seconds from the distance
        //Milisegundos en un segundo // Segundos en un minuto // Minutos en una hora // Horas en un día 
        //This part converts the distance from milliseconds to days.
        let days = Math.floor(distance / (1000 * 60 * 60 * 24)); 
        //This calculates the remainder after dividing the distance by the total milliseconds in a day. 
        //This represents the remaining time within a day (not including the days we already calculated).
        //Similar to days calculation, this converts the remaining milliseconds within a day to hours.
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        //This calculates the remaining milliseconds after removing the days and hours from the distance.
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000)
        let miliseconds = Math.floor((distance % (1000)));
        // Update the state with the formatted countdown string
        setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s " +miliseconds +"ms");
  
        // If the countdown has finished (distance is negative)
        if (distance < 0) {
          // Clear the interval to stop further execution
          clearInterval(x);
          // Update the state to show "COUNTDOWN FINISHED"
          setTime("COUNTDOWN FINISHED");
        }
      }, 1); // Execute the function every 1 second (1000 milliseconds)
  
      // Cleanup function to clear the interval when the component unmounts
      return () => clearInterval(x);
    }, []);
  
    // JSX to render the countdown timer
    return (
      <div className="countdown">
        <h2>{time}</h2>
        
      </div>
    );
  };
  

export default Countdown