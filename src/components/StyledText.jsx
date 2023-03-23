import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.color.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeigths.normal
    },
    bold: {
        fontWeight: theme.fontWeigths.bold
    },
    subHeading: {
        fontSize: theme.fontSizes.subheading
    },
    colorPrimary: {
        color: theme.color.textPrimary
    },
     colorSecondary: {
        color: theme.color.textSecondary
    },
    textAlignCenter: {
        textAlign: 'center'
    }
})

export default function StyledText ({align, children, color, fontSize, fontWeight, style, ...restOfProps}) {
    const textStyles = [
        styles.text,
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subHeading' && styles.subHeading,
        fontWeight === 'bold' && styles.bold,
        style
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}