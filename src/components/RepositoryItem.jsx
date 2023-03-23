import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryHeader from './RepositoryHeader';
import RepositoryStats from './RepositoryStats';

const RepositoryItem = (props) => {
    return (
        <View key={props.repo.id} style={styles.container}>
            <RepositoryHeader {...props} />
            <RepositoryStats {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingVertical: 5
    }
})

export default RepositoryItem;