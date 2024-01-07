import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Alert } from 'react-native';

export default function App() {
  // State variable to store the camera permission status
  const [hasPermission, setHasPermission] = useState(null);
  // State variable to control the barcode scanner
  const [isScannerActive, setIsScannerActive] = useState(true);

  // useEffect hook to request camera permission when the component mounts
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      // Set hasPermission based on the permission status
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Function to handle barcode scanning
  const handleBarCodeScanned = ({ type, data }) => {
    // If the scanner is not active, return immediately
    if (!isScannerActive) return;
    // Set isScannerActive to false to pause the scanner
    setIsScannerActive(false);
    // Show an alert with the type and data of the scanned barcode
    Alert.alert(
      `Bar code with type ${type} and data ${data} has been scanned!`,
      '',
      [
        { text: 'OK', onPress: () => {
          // Set isScannerActive to true to resume the scanner when the OK button is pressed
          setIsScannerActive(true)
        } }
      ]
    );
  };

  // Function to render the camera view
  const renderCamera = () => {
    return (
      <View style={styles.cameraContainer}>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={styles.camera}
        />
      </View>
    );
  };

  // If hasPermission is null, render a blank view
  if (hasPermission === null) {
    return <View />;
  }

  // If hasPermission is false, render a view with a text component informing the user that camera permission was not granted
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission not granted</Text>
      </View>
    );
  }

  // If hasPermission is true, render the main view of the app
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Barcode Scanner App!</Text>
      <Text style={styles.paragraph}>Scan a barcode to start your job.</Text>
      {renderCamera()}
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsScannerActive(true)}
        disabled={isScannerActive}
      >
        <Text style={styles.buttonText}>Scan QR to Start your job</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles for the components in the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 40,
  },
  cameraContainer: {
    width: '80%',
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 40,
  },
  camera: {
    flex: 1,
  },
  button: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});