import React from 'react'
import Slider, { SliderProps }  from '@mui/material/Slider';

const SuperRange: React.FC<SliderProps> = (props) => {

    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                'max-width': "200px",
                'color': '#3a8954',                
            }}
            value={props.value}
            onChange={props.onChange}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
