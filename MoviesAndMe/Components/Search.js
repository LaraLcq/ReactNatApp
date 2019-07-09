import React from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component{
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Titre du film' />
                <Button title='Rechercher' onPress={() => {}} />
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()} // identifie de manière unique nos items et crée une "key"
                    renderItem={({item}) => <FilmItem film={item}/>} // on initialise nos items FilmItem, ajoutez notre propre prop film  
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})

export default Search 
