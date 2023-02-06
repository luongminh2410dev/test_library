import React from 'react';
import { Dimensions } from 'react-native';
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';
import RenderHTML, { HTMLContentModel, defaultHTMLElementModels } from 'react-native-render-html';
import { containsMathjax } from '../../utils/functions';
import AudioView from '../audio-view';

const { width, height } = Dimensions.get('window')

const RenderAudio = (props) => {
    const { tnode } = props;

    let source = '';
    tnode?.init?.domNode?.children.find(it => {
        if (it?.attribs?.type == "audio/mpeg") {
            source = it.attribs.src;
            return true
        }
        return false;
    })
    return <AudioView source={source} />
}

const customHTMLElementModels = {
    audio: defaultHTMLElementModels.audio.extend({
        contentModel: HTMLContentModel.block,
    }),
    button: defaultHTMLElementModels.button.extend({
        contentModel: HTMLContentModel.block,
    })
};

const renderers = {
    audio: RenderAudio,
}

const HtmlContent = (props) => {
    const { content, color } = props;

    const containMathjax = containsMathjax(content);

    return (
        containMathjax ?
            <MathJaxSvg
                color={color}
                style={{ marginTop: 12 }}
                fontSize={15}>
                {content}
            </MathJaxSvg>
            :
            <RenderHTML
                contentWidth={width}
                source={{ html: content }}
                renderers={renderers}
                customHTMLElementModels={customHTMLElementModels}
                tagsStyles={{
                    p: {
                        padding: 0,
                        margin: 0,
                        lineHeight: 30,
                    }
                }}
                defaultTextProps={{
                    style: { color, fontSize: 15 }
                }}
            />
    )
}

export default HtmlContent