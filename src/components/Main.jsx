import React from 'react';
import { View, Text } from 'react-native';
import RepositoriesList from './RepositoriesList';
import AppBar from './AppBar';
import { Route, Routes } from 'react-router-native';
import LoginPage from '../Pages/Login';

const Main = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar/>
            <Routes>
                <Route path='/' element={<RepositoriesList/>}/>
                <Route path='/log_in' element={
                    <LoginPage/>
                }/>
                <Route path='/register' element={
                    <Text>Register page...</Text>
                }/>
            </Routes>
        </View>
)}

export default Main;