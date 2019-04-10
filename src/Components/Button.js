import React from 'react';

function Button ({ children, ...props}) {
  let styles = {
    container: {
      maxHeight: '11px',
      maxWidth: '6px',
      background: '#000',
      border: '2px solid #cdced0',
      borderRadius: '2px',
      color: '#daa520',
      boxShadow: '0 1px 1px rgba(0,0,0,0.05)',
    },
    depressed: {
      backgroundColor: '#4e69a2',
      borderColor: '#c6c7ca',
      color: '#5490ff', 
    },
  }

    return <button style={styles} type="submit" {...props}>{children}</button>;
  }

  export default Button; 