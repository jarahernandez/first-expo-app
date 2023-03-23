import React from "react"
import { StyleSheet, View, Image } from "react-native"
import StyledText from "./StyledText"
import theme from "../theme"

const RepositoryHeader = props => {
    return (
        <View style={{flexDirection: 'row', paddingBottom:2}}>
            <View style={{ paddingRight: 10 }}>
                <Image style={styles.image} source={{ uri: props.repo.ownerAvatarUrl }} />
            </View>
            <View style={{ flex:1 }}>
                <StyledText fontWeight='bold' >{props.repo.fullName}</StyledText>
                <StyledText color='secondary'>{props.repo.description}</StyledText>
                <StyledText style={styles.language}>{props.repo.language}</StyledText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    language: {
        padding: 4,
        color: theme.color.white,
        backgroundColor: theme.color.primary,
        alignSelf: 'flex-start',
        borderRadius: 5,
        overflow: 'hidden',
        marginVertical: 4
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
})

export default RepositoryHeader;