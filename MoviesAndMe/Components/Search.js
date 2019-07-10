import React from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' 

class Search extends React.Component{
    constructor(props) {
        super(props)
        this.state = { fims: [] } // on initialise notre state avec un tableau film vide 
    }
    _loadFilms() { //  récupérer nos films dans ce tableau
        getFilmsFromApiWithSearchedText("star").then(data => {
          this.setState({ films: data.results }) // Nous avons modifié les données de notre component Search, le state, en passant par la fonction  setState 
          //this.state.films  contient la liste des films de l'API. Votre FlatList utilise ces nouvelles données et les affiche.
        })
     }
    render() {
        
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Titre du film' />
                {/* méthode au clic sur le bouton "Rechercher" */}
                <Button title='Rechercher' onPress={() => this._loadFilms()} />  
                <FlatList
                    data={this.state.films} // On indique à notre flatlist d'utiliser la donnée pour afficher les films 
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
