import React from 'react';

function Button ({ children, ...props}) {
  let styles = {
    container: {
      maxHeight: '36px',
      maxWidth: '2px',
      background: '#000',
      border: '2px solid #cdced0',
      borderRadius: '4px',
      color: '#daa520',
      boxShadow: '0 20px 1px rgba(0,0,0,0.05)',
    },
    depressed: {
      backgroundColor: '#4e69a2',
      borderColor: '#c6c7ca',
      color: '#daa520', 
    },
  }
    
    return <button style={styles} type="submit" {...props}>{children}</button>;
  }

  export default Button; 