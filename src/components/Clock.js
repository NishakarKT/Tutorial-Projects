import React, { useState, useEffect } from 'react'
import AnalogClock from 'analog-clock-react';

const Clock = () => {
    const [options, setOptions] = useState({
        useCustomTime: true,    // set this to true
        width: "300px",
        border: true,
        borderColor: "#2e2e2e",
        baseColor: "#17a2b8",
        centerColor: "#459cff",
        centerBorderColor: "#ffffff",
        handColors: {
            second: "#d81c7a",
            minute: "#ffffff",
            hour: "#ffffff"
        },
        "seconds": 1,   // set your
        "minutes": 10,  // own
        "hours": 16     // time here.
    });

    useEffect(() => {
        setInterval(() => {
            setOptions(options => {
                const time = new Date();
                return {
                    ...options,
                    seconds: time.getSeconds(),
                    minutes: time.getMinutes(),
                    hours: time.getHours(),
                }
            });
        }, 1000);
    }, []);

    return (
        <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
            <AnalogClock {...options} />
        </div>
    )
}

export default Clock
