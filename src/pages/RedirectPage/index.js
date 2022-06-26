import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RedirectPage = () => {
    const location = useLocation();
    const { state } = location;
    console.log(state);

    useEffect(() => {
        window.location.replace(state.url);
    }, []);

    return (
        <div>
            <h3 style={{ color: 'black' }}>Redirecting...</h3>
        </div>
    );
};

export default RedirectPage;
