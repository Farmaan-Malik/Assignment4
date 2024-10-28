/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [submit, setSubmit] = useState(false);


  return (
    <SafeAreaView style={{paddingTop: 20, paddingHorizontal: 16}}>
      <Text
        style={{
          textAlign: 'center',
          width: '100%',
          fontSize: 25,
          fontWeight: 'bold',
        }}>
        Fill the Form
      </Text>
      <View
        style={{
          width: '100%',
          height: 100,
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TextInput
          value={name}
          placeholder="Please enter your name"
          onChangeText={setName}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            width: '75%',
          }}
        />
        <TextInput
          value={age}
          keyboardType="numeric"
          placeholder="Please enter your age"
          onChangeText={setAge}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            width: '75%',
          }}
        />
      </View>
      <TouchableOpacity onPress={()=> setSubmit(true)}>
        <Text>Submit</Text>
      </TouchableOpacity>
      {submit && 
      <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}>
      <Text>Show info</Text>
      <Switch
        value={showInfo}
        onValueChange={() => {
          setShowInfo(!showInfo);
        }}
      />
    </View>}
      {showInfo && (
        <ScrollView style={{paddingTop: 20}}>
          <Text style={{fontSize: 18, fontWeight: 'semibold'}}>
            Name: {name}
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'semibold'}}>Age: {age}</Text>
        </ScrollView>
      )};
    </SafeAreaView>
  );
};

export default App;
