import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const Stars = ({stars}) => {
    const starsUI = [
        <StarBorderIcon key={Math.random() * 1000}/>,
        <StarBorderIcon key={Math.random() * 1000}/>,
        <StarBorderIcon key={Math.random() * 1000}/>,
        <StarBorderIcon key={Math.random() * 1000}/>,
        <StarBorderIcon key={Math.random() * 1000}/>
    ];
    let i;
    let index = 0;
    for (i = stars; i > 0.5; i--) {
        starsUI[Math.floor(i - 1)] = <StarIcon key={Math.random() * 1000}/>;
        index++;
    }
    if (i) {
        starsUI[Math.floor(index)] = <StarHalfIcon key={Math.random() * 1000}/>;
    }
    return (
        <div>
            {starsUI.map(s => s)}
        </div>
    );
};

export default Stars;