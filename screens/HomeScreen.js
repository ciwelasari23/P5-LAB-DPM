import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

const articles = [
    { id: '1', title: 'React Native Basics', description: 'Learn the basics of React Native.' },
    { id: '2', title: 'React Navigation', description: 'Learn how to navigate between screens.' },
    { id: '3', title: 'React Native Paper', description: 'Use Material Design components in React Native.' },
];

const HomeScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <Card style={styles.card}>
            <Card.Title title={item.title} />
            <Card.Content>
                <Text>{item.description}</Text>
            </Card.Content>
            <Card.Actions>
                <Button mode="contained" onPress={() => navigation.navigate('Details', { article: item })}>
                    Read More
                </Button>
            </Card.Actions>
        </Card>
    );

    return (
        <FlatList
            data={articles}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#FCE4EC', // Background pink muda
    },
    card: {
        marginBottom: 16,
        backgroundColor: '#F8BBD0', // Warna card pink lembut
    },
});

export default HomeScreen;
