import React, { Component } from 'react'

import { Image, View, TouchableOpacity, StatusBar, Slider, Platform } from "react-native";
import { connect } from 'react-redux'
import styles from './record-styles'
import { addEntry } from '../actions'
import { submitEntry, removeEntry } from '../utils/api'
import { NavigationActions } from 'react-navigation'

import {
  timeToString,
  getDailyReminderValue,
  clearLocalNotification,
  setLocalNotification
} from '../utils/helpers'

import {
  List,
  ListItem,
  DeckSwiper,
  Container,
  Header,
  Title,
  Button,
  IconNB,
  Card,
  CardItem,
  Icon,
  Thumbnail,
  Text,
  Left,
  Right,
  Body,
  Content
} from "native-base";

function SubmitBtn ({ onPress }) {
return (
  <TouchableOpacity
    style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
    onPress={onPress}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
  </TouchableOpacity>
)
}

class Record extends Component {

  state = {
      energy : 0.0,
      mood : 0.0,
      focus : 0.0,
      productivity : 0.0
  }

  submit = () => {
    const key = timeToString()
    const entry = this.state

    this.props.dispatch(addEntry({
      [key]: entry
    }))

    this.setState(() => ({ energy : 0.0, mood : 0.0, focus : 0.0, productivity : 0.0 }))

    this.toHome()

    submitEntry({ key, entry })

    clearLocalNotification()
      .then(setLocalNotification)
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: 'Record'}))
  }

  render(){
    return (

        <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title>Record</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem itemHeader first>
            <Text>How are you feeling?</Text>
          </ListItem>


          <Text style={styles.ratingLabel}> Energy</Text>
          <Text style={styles.rating}> {this.state.energy}</Text>
          <Slider style={styles.slider} maximumValue={10} value={this.state.energy} minimumValue={0} step={1}
            onValueChange= {(e) => this.setState( {
            ...this.state,
            energy: e})}/>

          <Text style={styles.ratingLabel}> Focus</Text>
          <Text style={styles.rating}> {this.state.focus}</Text>
          <Slider style={styles.slider} maximumValue={10} value={this.state.focus} minimumValue={0} step={1}
            onValueChange= {(e) => this.setState( {
            ...this.state,
            focus: e})}/>

          <Text style={styles.ratingLabel}> Productivity </Text>
          <Text style={styles.rating}> {this.state.productivity}</Text>
          <Slider style={styles.slider} maximumValue={10} value={this.state.productivity} minimumValue={0} step={1}
            onValueChange= {(e) => this.setState( {
            ...this.state,
            productivity: e})}/>


            <SubmitBtn onPress={this.submit} />
          </Content>
        </Container>

    )
  }
}

function mapStateToProps (state) {
  const key = timeToString()

  return {
    alreadyLogged: state[key] && typeof state[key].today === 'undefined'
  }
}

export default connect(
  mapStateToProps
)(Record)
