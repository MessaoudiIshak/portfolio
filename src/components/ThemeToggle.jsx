import {useEffect, useState} from 'react';
import {Sun} from 'lucide-react';
import {Moon} from 'lucide-react';
import { cn } from '../lib/utils';

export default function ThemeToggle() {
const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
    const storedTheme = localStorage.getItem('theme');   
    if (storedTheme === 'dark' ) {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
        
    }   else { document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
    }
}, []);

const ToggleTheme = () => {
    if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        setIsDarkMode(false);
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        setIsDarkMode(true);
        localStorage.setItem('theme', 'dark');
    }
}
  return (
    <button onClick={ToggleTheme} className={cn(
        "fixed top-4 right-14 md:top-5 md:right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}>{""}
    {isDarkMode ?
        ( <Sun className='h-6 w-6 text-yellow-300' /> )
        :(
         <Moon className='h-6 w-6 text-blue-900'/>
        )}
        </button>
  )
}
