import React from 'react';
import { Dimensions } from 'react-native';
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';
import RenderHTML from 'react-native-render-html';

const HtmlContent = (props) => {
    const { content, color } = props;
    const { width, height } = Dimensions.get('window')
    return (
        <RenderHTML
            // fontSize={16}
            // color={color}
            // fontCache={true}
            contentWidth={width}
            source={{ html: content }}
            defaultTextProps={{
                style: { color }
            }}
        >
        </RenderHTML>
    )
}

export default HtmlContent