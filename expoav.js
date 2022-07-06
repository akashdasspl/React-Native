import * as React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {Video, AVPlaybackStatus} from 'expo-av';

export default function Video1 () {
  const video = React.useRef (null);
  const [status, setStatus] = React.useState ({});
  return (
    <View  style={{
        flex:1,
        
    }}>
      <Video
        ref={video}
        style={{
            width:500,
            height:500,
            alignSelf:"center",
            margin:20
        }}
        
        source={require('../asset/images/Wha.mp4')}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus (() => status)}
      />
      <View >
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync ()
              : video.current.playAsync ()}
        />
      </View>
    </View>
  );
}
