import React from 'react'; 

export const styles = StyleSheet.create ({
    displayLarge: {
        fontSize: fontSize.displayLarge,
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight.displayLarge,
    },
    displayMedium: {
        fontSize: fontSize.displayMedium,
        fontWeight: fontWeight.normal,
        lineHeight: lineHeight.displayMedium, 
    },
    displaySmall: {
        fontSize: fontSize.displaySmall,
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight.displaySmall,
    },
    heading: {
        fontSize: fontSize.heading,
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight.heading, 
    },
    subheading: {
        fontSize: fontSize.subheading,
        fontWeight: fontWeight.bold,
        lineHeight: lineHeight.subheading,
    },
    button: {
        marginBottom: spacing.space4, 
        color: 'orange',
        fontColor: 'black', 
        fontSize: '22px',
    },
  }
);

export default StyleSheet.extend([extension1, extension2]);