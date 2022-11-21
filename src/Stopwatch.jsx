import React from 'react'
import { useRef, useState } from 'react'

function Stopwatch() {
    const startTime = useRef(null);
    const intervalRef = useRef(null);
    const [now, setNow] = useState(null);
    let secondsElapsed = 0;
    const [laps, setLaps] = useState([]);

    function startStopwatch() {
        startTime.current = Date.now();
        setLaps([]);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }
    function stopStopwatch() {
        clearInterval(intervalRef.current);

    }

    function trackLap() {
        setLaps([...laps, secondsElapsed]);
        console.log(laps);
    }

    secondsElapsed = (now - startTime.current) / 1000;

    return (
        <>
            <section>
                <h1>Stopwatch</h1>
                <h1>{secondsElapsed.toFixed(3)}</h1>
                <button onClick={startStopwatch}>Start</button>
                <button onClick={stopStopwatch}>Stop</button>
                <button onClick={trackLap}>Lap</button>
            </section>
            {laps?.length ? <article>
                <h2>Laps</h2>
                {laps.map(lap => <p key={lap}>{lap}</p>)}
            </article> : null}
        </>
    )
}

export default Stopwatch