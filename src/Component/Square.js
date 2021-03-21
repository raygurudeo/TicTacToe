import React from 'react';

const style = {
    background: 'lightgray',
    border: '2px solid gray',
    fontSize: '30px',
    fontweight: '800',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '5px 5px 5px gray',
    
};
const Square = ({ value, onClick }) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
);

export default Square;