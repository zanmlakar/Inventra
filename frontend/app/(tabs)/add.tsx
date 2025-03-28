import { darkModeColors, lightModeColors } from '@/assets/colors/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CameraView, useCameraPermissions, CameraType, CameraViewRef, CameraCapturedPicture } from 'expo-camera';
import { MutableRefObject, useRef, useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [enableTorch, setEnableTorch] = useState<boolean>(false);
  const cameraRef = useRef<CameraView | null>(null);
  const [photo, setPhoto] = useState<CameraCapturedPicture | undefined>(undefined);


  const { width, height } = Dimensions.get('window');
  if (!permission) {
    return <Text >No Permission</Text>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function takePhoto() {
    if (cameraRef.current) {
      const photoData = await cameraRef.current.takePictureAsync({
        quality: 0.9,
        base64: true,
        exif: false
      });
      setPhoto(photoData);
    }
  }

  return (
    <View style={styles.container}>
      {!photo ?
        <CameraView style={styles.camera} facing={facing} flash={"on"} enableTorch={enableTorch} ref={cameraRef}>
          <View style={{ width: 47, height: 120, backgroundColor: 'rgba(219, 217, 217, 0.65)', zIndex: 10, justifyContent: 'space-around', alignItems: 'center', borderRadius: 18, position: 'absolute', right: 10, top: 10 }}>
            <TouchableOpacity onPress={toggleCameraFacing}>
              <Ionicons name="camera-reverse-outline" size={36} color={lightModeColors.primary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setEnableTorch(prev => !prev)}>
              <Ionicons name={`flash${!enableTorch ? "-outline" : ''}`} size={36} color={lightModeColors.primary} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={takePhoto} style={styles.pictureTrigger}>
            <View style={{backgroundColor:darkModeColors.primaryText,width:90,height:90,borderRadius:999,borderColor:"#f1f1f1",borderWidth:5}}>

            </View>
          </TouchableOpacity>
        </CameraView>
        :
        <View>
           
        </View>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1
  },
  pictureTrigger: {
    position: 'absolute',
    bottom: 50,
    left: Dimensions.get('window').width / 2 - 50,
    backgroundColor: darkModeColors.secondaryText,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
