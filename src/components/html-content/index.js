import React from 'react';
import { Dimensions } from 'react-native';
import RenderHTML, { HTMLContentModel, defaultHTMLElementModels } from 'react-native-render-html';
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
    return (
        <RenderHTML
            contentWidth={width}
            source={{ html: content }}
            renderers={renderers}
            customHTMLElementModels={customHTMLElementModels}
            defaultTextProps={{
                style: { color, marginTop: 2 }
            }}
        />
    )
}

export default HtmlContent