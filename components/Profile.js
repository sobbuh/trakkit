import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

import styles from './profile-styles'

import {
  Header,
  Left,
  Right,
  Body,
  Title,
  Content,
  Container,
  Thumbnail,
  Tab,
  Tabs,
  ScrollableTab
} from "native-base";

import ProfileStacks from './profile-stacks'

class Profile extends Component {

  render(){
    return (
      <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title>Profile</Title>
          </Body>
          <Right>
            <Text> Settings </Text>
          </Right>
        </Header>

        <Content>
          <View style={styles.topHalfBackground}>
            <View style={styles.topHalf}>

          <View style={styles.profilePicWrapper}>
            <Image style={styles.profilePic} source={require('../img/profilePic.png')}/>
            <Text style={styles.name}> Andre </Text>
            <Text style={styles.stacks}> 3 Stacks </Text>
          </View>
        </View>
      </View>
      <Tabs renderTabBar={()=> <ScrollableTab />}>
  <Tab heading="Stacks">
    <ProfileStacks />
  </Tab>
  <Tab heading="Favorites">
    <ProfileFavorites />
  </Tab>
  <Tab heading="History">
    <Text>History</Text>
  </Tab>
  <Tab heading="Following">
    <Text>Tab 3</Text>
  </Tab>
  <Tab heading="Followers">
    <Text>Tab 4</Text>
  </Tab>
</Tabs>
        </Content>
      </Container>
    )
  }
}

export default Profile
