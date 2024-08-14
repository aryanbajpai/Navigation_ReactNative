import { View, Text, StyleSheet } from 'react-native';

const Settings = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Settings Screen</Text>
        </View>
    )
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    }
});