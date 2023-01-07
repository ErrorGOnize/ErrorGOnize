import React from 'react';
import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import { Chip } from '@mui/material';
import Box from '@mui/material/Box';

export default function Chips({ mode }){
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
        { key: 5, label: 'Vue.js' },
        { key: 6, label: 'Vue.js' },
        { key: 7, label: 'Vue.js' },
        { key: 8, label: 'Vue.js' },

      ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
    return(
        <div>
            <h3>{ mode }</h3>
            {chipData.map((data) => {
                return (
                    <Chip sx={{ margin:0.4 }}
                        label={data.label}
                    />
                );
            })}
            <Chip
                label="Add"
                color="success"
                variant='outlined'
            />
        </div>
    ); 
};