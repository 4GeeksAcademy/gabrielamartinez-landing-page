// import React from "react";
// import "../../styles/index.css"
import React, { useEffect, useState } from "react";

export const SimpleCounter = () => {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [status, setStatus] = useState({
        title: 'Clock',
        icon: "far fa-clock",
        tileStyles: 'text-primary'
    })

    const handleStart = () => {
        setIsRunning(!isRunning)
        setStatus({
            title: 'Chronometer',
            icon: "fas fa-stopwatch",
            tileStyles: 'text-success'
        })
    }

    const handleReset = () => {
        setCounter(0);
        setIsRunning(false);
        setStatus({
            title: 'Chronometer',
            icon: "fas fa-stopwatch",
            tileStyles: 'text-primary'
        })
    }

    useEffect(() => {
        if (isRunning) {
            const newInterval = setInterval(() => {
                setCounter(counter => counter + 1)
            }, 1000)
            return () => clearInterval(newInterval)
        }
    }, [isRunning])

    return (
        <div className="container text-center">
            <h1>Simple Counter</h1>
            <h2 className={status.tileStyles}>{status.title}</h2>
            <div className="big-counter">
                <div><i className={status.icon}></i></div>
                <div>{Math.floor(counter / 10000 % 10)}</div>
                <div>{Math.floor(counter / 1000 % 10)}</div>
                <div>{Math.floor(counter / 100 % 10)}</div>
                <div>{Math.floor(counter / 10 % 10)}</div>
                <div>{Math.floor(counter % 10)}</div>
                <div>
                    <button onClick={handleStart} type="button" class="btn btn-outline-success">
                        {isRunning ? 'Pause' : 'Start'}
                    </button>
                    <button onClick={handleReset} type="button" class="btn btn-outline-danger m-auto">Reset</button>
                </div>

            </div>
        </div>
    )
}

