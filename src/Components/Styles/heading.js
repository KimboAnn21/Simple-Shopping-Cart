import React from 'react';

function Heading(props) {
    const{ children, tag: Tag } = props;
    return <Tag className = {css(styles[tagMapping[Tag]])}>
    { children } </Tag>;
}

export default Heading; 