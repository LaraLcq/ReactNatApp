// Components/Search.js

import React from 'react'
import { StyleSheet, View, TextInput, Button,  FlatList, ActivityIndicator } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'


class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
    this.page = 0 //compteur pour connaitre la page courante 
    this.totalPages = 0 // Nombre de pages totales pour savoir si on a atteint la fin du retour de l'api 
    this.state = {
      films: [],
      isLoading: false // par défaut false car il n'y a pas de chargement tant que l'on ne lance pas de recherche 
    }
  }

  _loadFilms() {
    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true })
      getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
          this.page = data.page
          this.totalPages = data.total_pages
          this.setState({
            films: [ ...this.state.films, ...data.results ], // films: data.results , à chaque appel, on aurait écrasé et perdu les films que l'on a déjà récupérés. Notre but est d'ajouter les films à ceux que l'on a déjà récupérés et c'est exactement ce que l'on a fait ici. C'est une simplification permise par ES6, encore une fois. La syntaxe  ...tableau  crée une copie du tableau. 
            isLoading: false
          })
      })
    }
}

  _searchTextInputChanged(text) {
    this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
  }

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
          {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
        </View>
      )
    }
  }
  

  render() {
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Titre du film'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._loadFilms()} // permet de valider la recherche avec le clavier du smartphone 
        />
        <Button title='Rechercher' onPress={() => this._loadFilms()}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FilmItem film={item}/>}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (this.page < this.totalPages) { // On vérifie qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
              this._loadFilms()
            }
          }}
        />
        {this._displayLoading()}
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
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'

  }
})

export default Search