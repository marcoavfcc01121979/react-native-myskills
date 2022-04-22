import React, { useState, useEffect } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Platform,
  FlatList
} from 'react-native'
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkill, setMySkill] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkill(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkill(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 12) {
      setGreeting('Good morning');
    } else if(currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good night')
    }

  }, [])

  return(
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Marco Ferreira</Text>

        <Text style={styles.greetings}>
          {greeting}
        </Text>

        <TextInput 
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, { marginVertical: 50 }]}>
          My Skills
        </Text>

        <FlatList 
          data={mySkill}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SkillCard 
              name={item.name}
              onPress={() => handleRemoveSkill(item.id)}
            />
          )}
        />

      </View>      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
  greetings: {
    color: "#FFF"
  }
})