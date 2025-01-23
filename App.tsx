import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { vacationDestination, vacationPricing } from './app/cookies';

export default function App() {

  interface Person2 {name:string, occupation: string, vacationDestination?: string, vacationPricing?: number};

  const data1: Person2 = {
    name: "Renata Glasc",
    occupation: "Chembaron",
    vacationDestination: "Zaun",
    vacationPricing: 5000
  }

  const data2: Person2 = {
    name: "Singed",
    occupation: "Doctor",
    vacationDestination: "Zaun",
    vacationPricing: 5000
  }

  const data3: Person2 = {
    name: "Heimerdinger",
    occupation: "Scientist",
    vacationDestination: "Piltover",
    vacationPricing: 5000
  }

  const datalist = [data1, data2, data3];


  return (


    <View style={styles.container}>


      <View>
        <Text style={styles.title}>Welcome {datalist[2].name}</Text>
      </View>
      
      <View>
        <Text>Vacation Destination: {datalist[2].vacationDestination}</Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => alert('You are the dirt under my nails')} style={styles.button}>
          <Text style={styles.buttonText}>Click here to paint the town blue.</Text>
        </TouchableOpacity>
      </View>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  button: {
    fontWeight: 'bold',
    backgroundColor: 'lightblue',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }

});
