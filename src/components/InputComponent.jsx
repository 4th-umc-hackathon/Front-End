import React, { useState } from 'react';
import '../styles/InputComponent.css'

function InputComponent({ placeholder }) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const styles= {
    ip: {
        width: 1070,
        border: "none",
        height: 50,
        paddingLeft: '50px',
        fontSize: '24px'
    },
  }
  return (
    <div>
      <input className="inputbox" style={styles.ip} type="text" placeholder={placeholder} value={value} onChange={handleChange} />
    </div>
  );
}

export default InputComponent;
