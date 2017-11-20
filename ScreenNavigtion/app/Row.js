import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

class Row extends Component {
  /*constructor(props) {
    super(props)
    this.state = {
      tagList: [],


      selectedTags: [],
    }
  }*/

  state = {
    names: [],
    selectedTags: [],
  }
  /*alertItemName = (item) => {
    alert(item.name)
  }*/


  render() {
    return (
      <View>


        {
          this.state.selectedTags.map((item) => (
            <TouchableOpacity
              key = {item.id}
              style = {styles.container}
              /*onPress = {() => this.alertItemName(item)}>*/
              >
              {/*<Text style={styles.itemText}style = {styles.text}>{item.name}</Text>*/}

              <Text style = {styles.text}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))
        }

      </View>
    )
  }
}
export default Row

const styles = StyleSheet.create ({
  container: {
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
  },
  text: {
    color: '#4f603c'
  },
  /*girl:{
    backgroundColor: '#ffc6e5',
    color: '#940050',


  },

  boy:{
    backgroundColor: '#a0cfee',
    color: '#16527a',
  },*/

})
