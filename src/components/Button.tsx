import React from 'react'
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  TouchableOpacityProps 
} from 'react-native'

type ButtonProps = TouchableOpacityProps

export function Button({ onPress }: ButtonProps) {
    return(
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={.7}
            onPress={onPress}
        >
            <Text style={styles.buttontext}>Add</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#A370F7',
      padding: 15,
      borderRadius: 7,
      alignItems: 'center',
      marginTop: 20
    },
    buttontext: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 17
    }
  })