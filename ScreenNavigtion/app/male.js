import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';

class male extends Component {
  state = {
    names: [
       {
        id: 1,
        name: 'Logan',
        sex: 'boy'
      },  {
        id: 2,
        name: 'Kai',
        sex: 'boy'
      }, {
        id: 3,
        name: 'Dashiell',
        sex: 'boy'
      }, {
        id: 4,
        name: 'John',
        sex: 'boy'
      },  {
        id: 5,
        name: 'Tobias',
        sex: 'boy'
      }, /* {
        id: 13,
        name: 'Knox',
        sex: 'boy'
      }, {
        id: 14,
        name: 'August',
        sex: 'boy'
      },  {
        id: 17,
        name: 'Wyatt',
        sex: 'boy'
      }, {
        id: 18,
        name: 'Ezra',
        sex: 'boy'
      },  {
        id: 20,
        name: 'Sebastian',
        sex: 'boy'
      }, {
        id: 21,
        name: 'Gabriel',
        sex: 'boy'
      }, {
        id: 22,
        name: 'Charlie',
        sex: 'boy'
      },  {
        id: 24,
        name: 'Elliot',
        sex: 'boy'
      }, {
        id: 25,
        name: 'Declan',
        sex: 'boy'
      }, {
        id: 26,
        name: 'Benjamin',
        sex: 'boy'
      },  {
        id: 28,
        name: 'Lucas',
        sex: 'boy'
      }, , {
        id: 31,
        name: 'Austin',
        sex: 'boy'
      },  {
        id: 33,
        name: 'Grayson',
        sex: 'boy'
      }, {
        id: 34,
        name: 'Beckett',
        sex: 'boy'
      }, {
        id: 35,
        name: 'Nicholas',
        sex: 'boy'
      }, {
        id: 36,
        name: 'Ronan',
        sex: 'boy'
      },  {
        id: 40,
        name: 'Nathaniel',
        sex: 'boy'
      }, {
        id: 41,
        name: 'Ryker',
        sex: 'boy'
      },  {
        id: 43,
        name: 'Leo',
        sex: 'boy'
      }, {
        id: 44,
        name: 'Zane',
        sex: 'boy'
      }, {
        id: 45,
        name: 'Grace',
        sex: 'girl'
      }, {
        id: 46,
        name: 'Owen',
        sex: 'boy'
      },  {
        id: 48,
        name: 'Julian',
        sex: 'boy'
      }, {
        id: 49,
        name: 'Caleb',
        sex: 'boy'
      }, {
        id: 50,
        name: 'Nolan',
        sex: 'boy'
      }, {
        id: 51,
        name: 'Roman',
        sex: 'boy'
      }, {
        id: 52,
        name: 'Felix',
        sex: 'boy'
      }, {
        id: 53,
        name: 'Aryan',
        sex: 'boy'
      },  {
        id: 60,
        name: 'Theo',
        sex: 'boy'
      }, {
        id: 61,
        name: 'Nathan',
        sex: 'boy'
      },  {
        id: 63,
        name: 'Josiah',
        sex: 'boy'
      }, {
        id: 64,
        name: 'Harrison',
        sex: 'boy'
      }, {
        id: 65,
        name: 'Archer',
        sex: 'boy'
      },  {
        id: 67,
        name: 'Rowan',
        sex: 'boy'
      }, {
        id: 68,
        name: 'Eden',
        sex: 'girl'
      }, {
        id: 69,
        name: 'Rhys',
        sex: 'boy'
      },  {
        id: 74,
        name: 'Emmett',
        sex: 'boy'
      },  {
        id: 76,
        name: 'Axel',
        sex: 'boy'
      }, {
        id: 79,
        name: 'David',
        sex: 'boy'
      }, {
        id: 80,
        name: 'Miles',
        sex: 'boy'
      },  {
        id: 90,
        name: 'Oscar',
        sex: 'boy'
      },  {
        id: 92,
        name: 'Silas',
        sex: 'boy'
      },  {
        id: 94,
        name: 'Jude',
        sex: 'boy'
      },  {
        id: 100,
        name: 'Lachlan',
        sex: 'boy'
      },  {
        id: 102,
        name: 'Hugo',
        sex: 'boy'
      },  {
        id: 104,
        name: 'Maddox',
        sex: 'boy'
      }, {
        id: 105,
        name: 'Asher',
        sex: 'boy'
      }, {
        id: 106,
        name: 'Jayden',
        sex: 'boy'
      },  {
        id: 108,
        name: 'Callum',
        sex: 'boy'
      }, {
        id: 109,
        name: 'Jasper',
        sex: 'boy'
      },  {
        id: 112,
        name: 'Lola',
        sex: 'girl'
      }, {
        id: 113,
        name: 'Jonah',
        sex: 'boy'
      },  {
        id: 117,
        name: 'Sawyer',
        sex: 'boy'
      },  {
        id: 119,
        name: 'Soren',
        sex: 'boy'
      },  {
        id: 122,
        name: 'Beau',
        sex: 'boy'
      }, {
        id: 123,
        name: 'Maxwell',
        sex: 'boy'
      },  {
        id: 127,
        name: 'James',
        sex: 'boy'
      }, {
        id: 128,
        name: 'Arthur',
        sex: 'boy'
      },  {
        id: 130,
        name: 'Samuel',
        sex: 'boy'
      }, {
        id: 131,
        name: 'Atticus',
        sex: 'boy'
      }, {
        id: 132,
        name: 'Bodhi',
        sex: 'boy'
      }, {
        id: 133,
        name: 'Elijah',
        sex: 'boy'
      }, {
        id: 134,
        name: 'Griffin',
        sex: 'boy'
      }, {
        id: 135,
        name: 'Graham',
        sex: 'boy'
      }, {
        id: 136,
        name: 'Weston',
        sex: 'boy'
      }, {
        id: 137,
        name: 'Hudson',
        sex: 'boy'
      }, {
        id: 138,
        name: 'Henry',
        sex: 'boy'
      }, {
        id: 139,
        name: 'Levi',
        sex: 'boy'
      },   {
        id: 146,
        name: 'Simon',
        sex: 'boy'
      },  {
        id: 149,
        name: 'Thomas',
        sex: 'boy'
      },  {
        id: 152,
        name: 'Oliver',
        sex: 'boy'
      },  {
        id: 154,
        name: 'Ethan',
        sex: 'boy'
      }, {
        id: 155,
        name: 'Liam',
        sex: 'boy'
      }, {
        id: 156,
        name: 'Alexander',
        sex: 'boy'
      }, {
        id: 157,
        name: 'Wesley',
        sex: 'boy'
      }, {
        id: 158,
        name: 'William',
        sex: 'boy'
      },  {
        id: 160,
        name: 'Isaac',
        sex: 'boy'
      },   {
        id: 164,
        name: 'Xavier',
        sex: 'boy'
      },  {
        id: 166,
        name: 'Andrew',
        sex: 'boy'
      },  {
        id: 169,
        name: 'Everett',
        sex: 'boy'
      }, {
        id: 170,
        name: 'Lincoln',
        sex: 'boy'
      },   {
        id: 180,
        name: 'Milo',
        sex: 'boy'
      },  {
        id: 182,
        name: 'Noah',
        sex: 'boy'
      }, {
        id: 183,
        name: 'Matthew',
        sex: 'boy'
      }, {
        id: 184,
        name: 'Luca',
        sex: 'boy'
      }, {
        id: 185,
        name: 'Finn',
        sex: 'boy'
      },  {
        id: 187,
        name: 'Theodore',
        sex: 'boy'
      }, {
        id: 188,
        name: 'George',
        sex: 'boy'
      }, {
        id: 189,
        name: 'Jackson',
        sex: 'boy'
      }, {
        id: 190,
        name: 'Jacob',
        sex: 'boy'
      },  {
        id: 192,
        name: 'Daniel',
        sex: 'boy'
      }, {
        id: 193,
        name: 'Ryder',
        sex: 'boy'
      },  {
        id: 195,
        name: 'Zachary',
        sex: 'boy'
      }, {
        id: 196,
        name: 'Luke',
        sex: 'boy'
      }, {
        id: 197,
        name: 'Jack',
        sex: 'boy'
      }, {
        id: 198,
        name: 'Charles',
        sex: 'boy'
      }, {
        id: 199,
        name: 'Bennett',
        sex: 'boy'
      }*/
    ]
  }

  render() {
    return (
      <View>


        {
          this.state.names.map((item, index) => (
            <TouchableOpacity
              key = {item.id}
              style = {styles.container}
              >

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
export default male

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
  girl:{
    backgroundColor: '#ffc6e5',
    color: '#940050',


  },

  boy:{
    backgroundColor: '#a0cfee',
    color: '#16527a',
  },

})
