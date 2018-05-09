import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { NavigationActions } from 'react-navigation';



import { mainColor, dangerColor, gray } from './../util/colors'

class Quiz extends Component{
  state = {
    remainingQuestions: this.props.questionList,
    numberTotal: this.props.questionList.length,
    numberRemaining: this.props.questionList.length,
    numberCorrect: 0,
    showingAnswer: false
  }


  static navigationOptions = {
    title: 'Quiz',
    headerTintColor: '#fff',
    headerStyle:{
      backgroundColor: mainColor,
    },
    headerTitleStyle:{
      fontWeight: 'bold'
    }
  };

  correct = () => {
    this.setState((prevState) => ({
      showingAnswer: false,
      numberCorrect: prevState.numberCorrect + 1,
      numberRemaining: prevState.numberRemaining - 1,
      remainingQuestions: prevState.remainingQuestions.filter((question) => question[0] != prevState.remainingQuestions[0][0])
    }))

  }

  incorrect = () => {
    this.setState((prevState) => ({
      showingAnswer: false,
      numberRemaining: prevState.numberRemaining - 1,
      remainingQuestions: prevState.remainingQuestions.filter((question) => question[0] != prevState.remainingQuestions[0][0])
    }))
  }

  reveal = () => {
    this.setState(() => ({
      showingAnswer: true
    }))
  }

  restart = () => {
    this.setState(() => ({
      remainingQuestions: this.props.questionList,
      numberTotal: this.props.questionList.length,
      numberRemaining: this.props.questionList.length,
      numberCorrect: 0,
      showingAnswer: false
    }))
  }

  back = () => {

  }

  render(){
    console.log(this.props)
    return(
      <View style={styles.container}>
        { this.state.remainingQuestions.length > 0 &&
          <View style={styles.container}>
            <Text style={styles.title}>Question</Text>
            <Text style={styles.text}>{this.state.remainingQuestions[0][0]}</Text>
            {!this.state.showingAnswer &&
              <TouchableOpacity
              style={styles.iosButton}
                onPress={this.reveal}>
                <Text style={styles.buttonText}>Show Answer</Text>
              </TouchableOpacity>
            }
            {this.state.showingAnswer &&
              <View  style={styles.container}>
                <Text style={styles.title}>Answer</Text>
                <Text style={styles.text}>{this.state.remainingQuestions[0][1]}</Text>
                <TouchableOpacity
                  style={styles.iosButton}
                  onPress={this.correct}>
                  <Text style={styles.buttonText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.dangerButton}
                  onPress={this.incorrect}>
                  <Text style={styles.buttonText}>Incorrect</Text>
                </TouchableOpacity>
              </View>
            }
            <Text style={styles.text}>{this.state.numberRemaining} question(s) remaining</Text>
          </View>
        }
        { this.state.remainingQuestions.length == 0 &&
          <View  style={styles.container}>
            <Text style={styles.title}>End of Quiz</Text>
            <Text style={styles.text}>Answered {this.state.numberCorrect} of {this.state.numberTotal} correctly</Text>
            <TouchableOpacity
              onPress={this.restart}
              style={styles.iosButton}
            >
              <Text style={styles.buttonText}>Restart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.back}
              style={styles.dangerButton}
            >
              <Text style={styles.buttonText}> Back to Deck</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center'

  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  iosButton: {
   backgroundColor: mainColor,
   padding: 10,
   borderRadius: 7,
   height: 45,
   marginLeft: 40,
   marginRight: 40,
 },
 dangerButton: {
   backgroundColor: dangerColor,
   padding: 10,
   borderRadius: 7,
   height: 45,
   marginLeft: 40,
   marginRight: 40,
 },
 title:{
   fontSize: 22,
   color: mainColor,
   fontWeight: 'bold',
   textAlign: 'center',
   padding: 10
 },
 text:{
   color: gray
 }
})

function mapStateToProps({decks}, {navigation}){
  return {
    decks: decks,
    deck: navigation.state.params.deck,
    questionList: Object.keys(decks[navigation.state.params.deck]).map((key) => [key, decks[navigation.state.params.deck][key]])
  }
}

export default connect(mapStateToProps)(Quiz)
