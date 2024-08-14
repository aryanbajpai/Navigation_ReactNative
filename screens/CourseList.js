import { View, Text, StyleSheet } from 'react-native';

const CourtList = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Course List Screen</Text>
        </View>
    )
};

export default CourtList;

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