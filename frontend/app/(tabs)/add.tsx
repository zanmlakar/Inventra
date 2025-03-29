import { darkModeColors, lightModeColors } from '@/assets/colors/colors';
import { useThemeStore } from '@/stores/store';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CameraView, useCameraPermissions, CameraType, CameraCapturedPicture } from 'expo-camera';
import { useFocusEffect } from 'expo-router';
import { useCallback, useRef, useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [enableTorch, setEnableTorch] = useState<boolean>(false);
  const cameraRef = useRef<CameraView | null>(null);
  const [photo, setPhoto] = useState<CameraCapturedPicture | undefined>(undefined);
  const { activeColors } = useThemeStore();

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  async function takePhoto() {
    if (cameraRef.current) {
      const photoData = await cameraRef.current.takePictureAsync({
        quality: 1,
        base64: true,
        exif: false,
      });
      setPhoto(photoData);
    }
  }

  useFocusEffect(
    useCallback(() => {
      return () => {
        setEnableTorch(false);
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      {!permission?.granted && (
        <View style={styles.container}>
          <Text style={styles.message}>We need your permission to show the camera</Text>
          <Button onPress={requestPermission} title="Grant Permission" />
        </View>
      )}
      {photo && (
        <View>
          <Text style={styles.message}>You took a picture</Text>
        </View>
      )}
      <CameraView
        style={styles.camera}
        facing={facing}
        flash={enableTorch ? 'on' : 'off'}
        enableTorch={enableTorch}
        ref={cameraRef}
      >
      </CameraView>
      <View style={styles.controlPanel}>
        <TouchableOpacity activeOpacity={0.7} onPress={toggleCameraFacing}>
          <Ionicons name="camera-reverse-outline" size={36} color={lightModeColors.primary} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => setEnableTorch(prev => !prev)}>
          <Ionicons name={`flash${!enableTorch ? '-outline' : ''}`} size={36} color={lightModeColors.primary} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={[styles.skipContainer, { backgroundColor: activeColors?.primary, borderRadius: 10, flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 3 }]}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "400" }} >Skip</Text>
        <Ionicons name='arrow-forward-sharp' size={21} color="white" />
      </TouchableOpacity>
      {/* Picture Trigger */}
      <TouchableOpacity activeOpacity={0.7} onPress={takePhoto} style={styles.pictureTrigger}>
        <View style={styles.innerCircle} />
      </TouchableOpacity>
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
    flex: 1,
  },
  controlPanel: {
    width: 47,
    height: 120,
    backgroundColor: 'rgba(219, 217, 217, 0.65)',
    zIndex: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 18,
    position: 'absolute',
    right: 10,
    top: 10,
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
  skipContainer: {
    position: "absolute",
    paddingHorizontal: 22,
    paddingVertical: 10,
    right: -10,
    backgroundColor: 'red',
    bottom: 74,
  },
  innerCircle: {
    backgroundColor: darkModeColors.primaryText,
    width: 90,
    height: 90,
    borderRadius: 999,
    borderColor: '#f1f1f1',
    borderWidth: 5,
  },
});
