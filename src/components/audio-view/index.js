import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import styles from '../audio-view/styles';
import Slider from '../slider';

const timeFormat = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = (time < 10) ? `0${Math.floor(time)}` : Math.floor(time);

  return minutes + ':' + seconds;
}

const AudioView = ({ source }) => {
  const [isActive, setActive] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isError, setError] = useState(false);
  const refAudioController = useRef();

  const toggleAudio = () => setActive(!isActive)

  const onLoad = (e) => {
    setDuration(e.duration)
  }

  const onError = (e) => {
    setError(true)
  }

  const onFinish = () => setActive(false);

  const onProgress = (progress) => {
    setCurrentTime(progress.currentTime)
  }

  const onSliding = () => {
    setActive(false);
  }

  const onSlideEnded = (progress) => {
    refAudioController.current.seek(progress * duration);
    setActive(true);
  }

  return (
    <View style={styles.audio_container}>
      <TouchableOpacity
        onPress={toggleAudio}
        disabled={isError}
        style={styles.play_btn}>
        {
          isActive ?
            <Ionicons name='pause' size={24} color='black' />
            :
            <Ionicons name='play' size={24} color='black' />
        }
      </TouchableOpacity>
      {
        isError ?
          <Text style={styles.error_label}>Error</Text>
          :
          <Slider
            progress={currentTime / duration || 0}
            onSliding={onSliding}
            onSlideEnded={onSlideEnded}
          />
      }
      <Text style={styles.progress_time}>{timeFormat(currentTime)} / {timeFormat(duration)}</Text>
      <Video
        ref={refAudioController}
        repeat
        audioOnly
        paused={!isActive}
        source={{ uri: source }}
        onLoad={onLoad}
        onEnd={onFinish}
        onError={onError}
        progressUpdateInterval={1000}
        onProgress={onProgress}
        ignoreSilentSwitch="ignore"
      />
    </View>
  )
}

export default AudioView