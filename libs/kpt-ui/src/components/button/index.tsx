import { Pressable, StyleSheet, Text } from 'react-native'

export const Button = () => {
    return (
        <Pressable style={styles.rootContainer}>
            <Text>Button</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    rootContainer: {
        width: 200,
        height: 100,
        borderWidth: 2,
        borderColor: '#fb92a3',
        backgroundColor: 'transparent', 
        borderRadius: 8
    }
})