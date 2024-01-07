# Barcode Reader App

This is a simple example of how to use the barcode reader in a React Native app using Expo.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- Expo CLI

### Installing

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `expo start` to start the Expo dev server.

## Using the App

1. Open the app on your device or emulator.
2. Grant the app permission to use the camera when prompted.
3. Press the "Scan QR to Start your job" button to start the barcode scanner.
4. Point the camera at a barcode to scan it.
5. An alert will pop up with the type and data of the scanned barcode.
6. Press OK in the alert to resume scanning.

## Built With

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [expo-barcode-scanner](https://docs.expo.io/versions/latest/sdk/bar-code-scanner/)

### Documentation

## App.js

This is the main component of the Barcode Scanner App. It handles the barcode scanning functionality and renders the user interface.

## State Variables

- `hasPermission`: A boolean that indicates whether the app has permission to use the camera.
- `isScannerActive`: A boolean that controls whether the barcode scanner is active.

## Functions

- `handleBarCodeScanned({ type, data })`: This function is called when a barcode is scanned. It checks if the scanner is active, and if it is, it sets `isScannerActive` to `false` and shows an alert with the type and data of the scanned barcode. When the OK button in the alert is pressed, it sets `isScannerActive` back to `true`.

- `renderCamera()`: This function returns the `BarCodeScanner` component wrapped in a view.

## useEffect Hook

The `useEffect` hook is used to request camera permission when the component mounts. If permission is granted, it sets `hasPermission` to `true`. If permission is not granted, it sets `hasPermission` to `false`.

## Rendering

- If `hasPermission` is `null`, a blank view is rendered.
- If `hasPermission` is `false`, a view with a text component is rendered to inform the user that camera permission was not granted.
- If `hasPermission` is `true`, the main view of the app is rendered. This view contains a welcome text, a paragraph, the `BarCodeScanner` component, and a button to start the scanner.

## Styles

The `styles` object contains the styles for the components in the app. It uses `StyleSheet.create` to create the styles.
