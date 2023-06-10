import React, { useState, useEffect } from 'react';
import { FormControlLabel, Switch } from '@mui/material';

const ColorButton = () => {
    const [isLightTheme, setIsLightTheme] = useState(true);

    const changeTheme = () => {
        const newTheme = !isLightTheme;
        setIsLightTheme(newTheme);
        localStorage.setItem('theme', JSON.stringify(newTheme));
        Promise.resolve().then(() => {
            document.body.style.background = newTheme
                ? 'radial-gradient(circle, rgba(204,204,204,1) 70%, rgba(255,255,255,1) 100%)'
                : 'linear-gradient(0deg, rgba(194,23,23,1) 0%, rgba(15,13,13,1) 50%)';
        });
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme !== null) {
            setIsLightTheme(JSON.parse(savedTheme));
            document.body.style.background = JSON.parse(savedTheme)
                ? 'radial-gradient(circle, rgba(204,204,204,1) 70%, rgba(255,255,255,1) 100%)'
                : 'linear-gradient(0deg, rgba(194,23,23,1) 0%, rgba(15,13,13,1) 50%)';
        } else {
            setIsLightTheme(true);
            document.body.style.background = 'linear-gradient(0deg, rgba(194,23,23,1) 0%, rgba(15,13,13,1) 50%)';
        }
    }, []);

    return (
        <div>
            <FormControlLabel
                className="color-button"
                control={
                    <Switch
                        checked={isLightTheme}
                        onChange={changeTheme}
                        color="primary"
                        inputProps={{ 'aria-label': 'theme switch' }}
                    />
                }
                label={isLightTheme ? 'Dark' : 'Light'}
            />
        </div>
    );
};

export default ColorButton;
