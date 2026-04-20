import { useState, useEffect } from 'react';
import Portfolio from './components/Portfolio.jsx';
import SecretLogin from './components/SecretLogin.jsx';

function App() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        // Handle theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }

        // Simple router listener
        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handleLocationChange);
        
        // Polyfill forward/back buttons and programmatic navigation
        const originalPushState = window.history.pushState;
        window.history.pushState = function() {
            originalPushState.apply(this, arguments);
            handleLocationChange();
        };

        return () => {
            window.removeEventListener('popstate', handleLocationChange);
            window.history.pushState = originalPushState;
        };
    }, []);

    // Define the secret route
    const SECRET_ROUTE = '/dardcor/secret/notfound';

    return (
        <>
            {currentPath === SECRET_ROUTE ? (
                <SecretLogin />
            ) : (
                <Portfolio />
            )}
        </>
    );
}

export default App;
