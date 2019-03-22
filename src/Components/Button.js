import React from 'react';

function Button ({ children, ...props}) {
  let styles = {
    container: {
      maxHeight: '10px',
      maxWidth: '5px',
      background: '#f6f7f8',
      border: '2px solid #cdced0',
      borderRadius: '2px',
      color: '#74B72E',
      boxShadow: '0 1px 1px rgba(0,0,0,0.05)',
    },
    depressed: {
      backgroundColor: '#4e69a2',
      borderColor: '#c6c7ca',
      color: '#5490ff', 
    },
  };

    // Returns a DOM element here. For example:
    return <button style={styles} type="submit" {...props}>{children}</button>;
  }

  export default Button; 