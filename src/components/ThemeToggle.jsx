import {useEffect, useState} from 'react';
import {Sun, Moon} from 'lucide-react';
import { cn } from '../lib/utils';

export default function ThemeToggle({ className }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');   
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button 
      onClick={toggleTheme} 
      className={cn(
        "p-2 rounded-full transition-colors duration-300",
        className
      )}
    >
      {isDarkMode ? (
        <Sun className='h-5 w-5 text-yellow-300' />
      ) : (
        <Moon className='h-5 w-5 text-blue-900'/>
      )}
    </button>
  );
}
