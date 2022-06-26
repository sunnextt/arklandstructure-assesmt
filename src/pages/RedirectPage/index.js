import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RedirectPage = () => {
    const location = useLocation();

    console.log(location);

    useEffect(() => {
        // window.location.replace(state.url);
    }, []);

    return (
        <div>
            <h3 style={{ color: 'black' }}>Redirecting...</h3>
        </div>
    );
};

export default RedirectPage;
