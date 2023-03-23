import React from 'react';
import { Text, View, Alert, TouchableNativeFeedback } from 'react-native';
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar';
import RepositoriesList from './RepositoriesList';
import AppBar from './AppBar';

const Main = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar/>
            <RepositoriesList/>
            <StatusBar style="auto" />
        </View>
)}

export default Main;