import React from 'react';
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';

const HtmlContent = (props) => {
    const { content, color } = props;
    return (
        <MathJaxSvg
            fontSize={16}
            color={color}
            fontCache={true}
        >
            {content}
        </MathJaxSvg>
    )
}

export default HtmlContent