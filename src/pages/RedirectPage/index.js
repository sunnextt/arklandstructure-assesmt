import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const RedirectPage = () => {
    const location = useLocation();
    const { url } = location.state;

    const [timeLeft, setTimeLeft] = useState(5);

    useEffect(() => {}, []);

    useEffect(() => {
        if (timeLeft === 0) {
            window.location.replace(url);
        }
        if (!timeLeft) return;
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
    }, [timeLeft, url]);


    return (
        <div>
            <h3 style={{ color: 'black' }}>
                Redirecting after {timeLeft} seconds
            </h3>
        </div>
    );
};

export default RedirectPage;
