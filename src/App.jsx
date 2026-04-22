import { useState, useEffect } from 'react';
import Portfolio from './components/Portfolio.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        return () => clearTimeout(loadingTimer);
    }, []);

    useEffect(() => {
        // Handle theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <Portfolio />
    );
}

export default App;
