import React from 'react';
import { ScrollView, StyleSheet, Image} from 'react-native';


export default class BoardsScreen extends React.Component {
  static navigationOptions = {
    title: 'Boards',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={require('../assets/images/blue.png')} style={styles.image} />
        <Image source={require('../assets/images/brick.jpg')} style={styles.image}/>
        <Image source={require('../assets/images/grainy-leaf.jpg')} style={styles.image}/>
        <Image source={require('../assets/images/gray-wood.jpg')} style={styles.image}/>
        <Image source={require('../assets/images/gray-chalk.jpg')} style={styles.image}/>
        <Image source={require('../assets/images/green-maple.jpg')} style={styles.image}/>
        <Image source={require('../assets/images/hardwood.jpg')} style={styles.image}/>
        <Image source={require('../assets/images/leaf-green.jpg')} style={styles.image}/>
        <Image source={require('../assets/images/oak.jpg')} style={styles.image}/>
        <Image source={require('../assets/images/rose.jpg')} style={styles.image}/>
        <Image source={require('../assets/images/wood-grain.jpg')} style={styles.image}/>
        <Image source={require('../assets/images/black-green.jpg')} style={styles.image}/>
        <Image source={require('../assets/images/blue-sky.jpg')} style={styles.image}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
    width: '100%',
    alignContent: 'center',
    borderWidth: 1,
    },
  image: {
  width:100, 
  height: 100,
  padding: 5,
  }

});
