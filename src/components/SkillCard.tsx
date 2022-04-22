import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

interface SkillProps extends TouchableOpacityProps {
  name: string;
}

export function SkillCard({ name, ...rest }: SkillProps) {
    return(
        <TouchableOpacity 
          style={styles.buttonSkill}
          {...rest}
        >
            <Text style={styles.textSkill}>
                {name}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textSkill: {
      color: '#FFF',
      fontSize: 22,
      fontWeight: 'bold'
    },
    buttonSkill: {
      backgroundColor: '#1F1E25',
      padding: 15,
      borderRadius: 50,
      alignItems: 'center',
      marginVertical: 10
    }
  })