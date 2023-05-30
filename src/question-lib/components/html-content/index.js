import React from 'react';
import { Dimensions } from 'react-native';
import WebView from 'react-native-autoheight-webview';
import RenderHTML, { HTMLContentModel, defaultHTMLElementModels } from 'react-native-render-html';
import { configHtml, containsMathjax } from '../../functions';
import AudioView from '../audio-view';

const { width, height } = Dimensions.get('window')

const RenderAudio = ({ tnode }) => {
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
    }),
};

const renderers = {
    audio: RenderAudio,
}

const HtmlContent = (props) => {
    const { content, color, lineHeight = null } = props;

    return (
        containsMathjax(content) ?
            <WebView
                source={{
                    html: configHtml(content),
                    baseUrl: '',
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                startInLoadingState
                renderLoading={() => null}
                cacheEnabled={false}
                scalesPageToFit={false}
                cacheMode='LOAD_NO_CACHE'
                textZoom={100}
                allowsLinkPreview={false}
                automaticallyAdjustContentInsets={false}
            />
            :
            <RenderHTML
                contentWidth={width - 24}
                source={{ html: content }}
                renderers={renderers}
                tagsStyles={{
                    p: {
                        padding: 0,
                        margin: 0,
                        lineHeight,
                    }
                }}
                defaultTextProps={{
                    style: { color, fontSize: 15 }
                }}
                customHTMLElementModels={customHTMLElementModels}
            />
    )
}

export default HtmlContent