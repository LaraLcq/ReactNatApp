import React from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' 

class Search extends React.Component{
    _loadFilms() {
        getFilmsFromApiWithSearchedText("star").then(data => console.log(data));
    }
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Titre du film' />
                {/* méthode au clic sur le bouton "Rechercher" */}
                <Button title='Rechercher' onPress={() => this._loadFilms()} />  
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
