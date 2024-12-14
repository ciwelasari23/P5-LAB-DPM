import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

const DetailsScreen = ({ route, navigation }) => {
    const { article } = route.params;

    return (
        <View style={styles.container}>
            <Text variant="headlineMedium" style={styles.title}>
                {article.title}
            </Text>
            <Text style={styles.description}>
                {article.description}
            </Text>
            <Button 
                mode="contained" 
                onPress={() => navigation.goBack()} 
                style={styles.button}
            >
                Go Back
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCE4EC', // Background pink muda
    },
    title: {
        marginBottom: 16,
        color: '#FFFFFF', // Teks pink gelap
    },
    description: {
        marginBottom: 32,
        textAlign: 'center',
    },
    button: {
        marginTop: 16,
    },
});

export default DetailsScreen;
