import React from 'react'
import { Button } from '../../styles';



const Toggle = ({theme,  toggleTheme }) => {

    
    return (
        <Button onClick={toggleTheme} >
          {theme === "light" ? 'Dark mode' : 'Light mode'}
        </Button>
    );
};
export default Toggle;