import React from 'react';
import { Picker, TextInput, Alert, Button, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';


export default class App extends React.Component {

  state = {
    zipcode: '',
    userEmail: '',
    userPass: '',
    fname: ''
  };

  AddToDB(){
 
    var user = firebase.auth().currentUser;

    if( user != null){
        firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/zipcodes').push({
        zipcode: this.state.zipcode
      }); 
    }
    else{
      Alert.alert("You must be signed in to save a zipcode.");
    }
       
  }

  logout(){
    firebase.auth().signOut();
    Alert.alert("Logged Out");
  }


  createAccount(){
    firebase.auth().createUserWithEmailAndPassword(this.state.userEmail, this.state.userPass).then(function(user){
      //Alert.alert("all is well");
      Alert.alert(user.uid)
      //writeUserData(user.uid);
    }).catch(function(error) {
      
      var errorCode = error.code;
      var errorMessage = error.message;
      Alert.alert(errorMessage); 
  });




  }

  login(){

  firebase.auth().signInWithEmailAndPassword(this.state.userEmail, this.state.userPass).then(function(user){
    // search for the zipcodes
    
    var ref = firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/zipcodes/');
    ref.on("child_added", function(snapshot) {
      var zips = snapshot.val();
      Alert.alert(zips.zipcode);
    }, function (errorObject) {
      Alert.alert("The read failed: " + errorObject.code);
    });
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    
    Alert.alert(errorMessage)

    // ...
  });

}

  render() {
    return (
      <View style={styles.container}>
         <TextInput
        placeholder="Name"
        onChangeText={(value) => this.setState({fname: value})}
        />{"\n"}{"\n"}{"\n"}
        <TextInput
        placeholder="Zip Code"
        onChangeText={(value) => this.setState({zipcode: value})}
        />{"\n"}{"\n"}{"\n"}
        <TextInput
        placeholder="Email"
        onChangeText={(value) => this.setState({userEmail: value})}
        />{"\n"}{"\n"}{"\n"}
        <TextInput
        placeholder="Password"
        onChangeText={(value) => this.setState({userPass: value})}
        />{"\n"}{"\n"}{"\n"}
        
        <Button onPress={ this.AddToDB.bind(this) } title="Save Zipcode" />{"\n"}
        <Button onPress={ this.login.bind(this) } title="Sign In" />{"\n"}
        <Button onPress={ this.logout.bind(this) } title="Sign Out" />{"\n"}
        <Button onPress={ this.createAccount.bind(this) } title="Create Account" />
      </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBH4YejbRQoEo5ThbCMHj6dbajHlIWeHZo",
  authDomain: "weatherdb-814eb.firebaseapp.com",
  databaseURL: "https://weatherdb-814eb.firebaseio.com",
  storageBucket: "weatherdb-814eb.appspot.com"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    
    Alert.alert("Logged In");

    //var user = firebase.auth().currentUser;

    //if(user != null){

      //var email_id = user.email;
      //document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;

    //}

  //} else {
    // No user is signed in.

    //document.getElementById("user_div").style.display = "none";
    //document.getElementById("login_div").style.display = "block";

  }
});


