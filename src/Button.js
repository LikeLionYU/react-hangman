import React from 'react';

const Button = ({value, click}) => {

    let className = 'button';

    return (
        <button className={className}>{value}</button>
    );
};

export default Button;