import React from 'react';
import { Dimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';

const HtmlContent = (props) => {
    const { content, color } = props;
    const { width, height } = Dimensions.get('window')
    return (
        <RenderHTML
            contentWidth={width}
            source={{ html: content }}
            defaultTextProps={{
                style: { color, marginTop: 2, }
            }}
        />
    )
}

export default HtmlContent