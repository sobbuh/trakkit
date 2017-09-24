import React, { Component } from "react";
import { Image, View, StatusBar, Slider, FlatList } from "react-native";

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

import styles from "./feed-styles";

const pratik = require("../../../img/contacts/pratik.png");
const sanket = require("../../../img/contacts/sanket.png");
const megha = require("../../../img/contacts/megha.png");

const datas = [
  {
    img: pratik,
    text: "Jason W",
    note: "Added Estrogen to his stack",
    time: "3:43 pm"
  },
  {
    img: sanket,
    text: "Chris B",
    note: "Added Caffeine-ECGC stack",
    time: "1:12 pm"
  },
  {
    img: megha,
    text: "Lebron James",
    note: "Added HGH to his stack",
    time: "10:03 am"
  },
];

const cardOne = require("../../img/meditation.png");
const cardTwo = require("../../img/sleep.png");
const cardThree = require("../../img/supplements.png");

const cards = [
	{
		text: "Card One",
		name: "One",
		image: cardOne,
	},
	{
		text: "Card Two",
		name: "Two",
		image: cardTwo,
	},
	{
		text: "Card Three",
		name: "Three",
		image: cardThree,
	},
];


class FeedPage extends Component {
	// eslint-disable-line
  state = {
    newRatings: {
      energy : 5.0,
      mood : 5.0,
      focus : 5.0,
      productivity : 5.0
    }
  }

	render() {
		return (
      <Container style={styles.container}>
				<StatusBar barStyle="light-content" />

        <Header>
          <Left />
          <Body>
            <Title>Feed</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem itemHeader first>
            <Text>How are you feeling?</Text>
          </ListItem>


          <Text style={styles.ratingLabel}> Energy</Text>
          <Text style={styles.rating}> {this.state.newRatings.energy}</Text>
          <Slider style={styles.slider} maximumValue={10} value={this.state.newRatings.energy} minimumValue={0} step={1}
            onValueChange= {(e) => this.setState({ newRatings: {
            ...this.state.newRatings,
            energy: e}})}/>

          <Text style={styles.ratingLabel}> Focus</Text>
          <Text style={styles.rating}> {this.state.newRatings.focus}</Text>
          <Slider style={styles.slider} maximumValue={10} value={this.state.newRatings.focus} minimumValue={0} step={1}
            onValueChange= {(e) => this.setState({ newRatings: {
            ...this.state.newRatings,
            focus: e}})}/>

          <Text style={styles.ratingLabel}> Productivity </Text>
          <Text style={styles.rating}> {this.state.newRatings.productivity}</Text>
          <Slider style={styles.slider} maximumValue={10} value={this.state.newRatings.productivity} minimumValue={0} step={1}
            onValueChange= {(e) => this.setState({ newRatings: {
            ...this.state.newRatings,
            productivity: e}})}/>


          <ListItem itemHeader >
            <Text>What your friends are up to</Text>
          </ListItem>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem avatar>
                <Left>
                  <Thumbnail small source={data.img} />
                </Left>
                <Body>
                  <Text>{data.text}</Text>
                  <Text numberOfLines={1} note>{data.note}</Text>
                </Body>
                <Right>
                  <Text note>{data.time}</Text>
                </Right>
              </ListItem>}
          />
          <ListItem itemHeader>
            <Text>Things to Consider</Text>
          </ListItem>

          <View style={{ flex: 1, padding: 12 }}>
            <DeckSwiper
              style={styles.deckSwiper}
              dataSource={cards}
              looping={true}
              renderItem={item =>
                <Card style={{ elevation: 2 }}>
                  <CardItem cardBody>
                    <Image
                      style={{
                        resizeMode: "cover",
                        width: null,
                        flex: 1,
                        height: 300,
                      }}
                      source={item.image}
                    />
                  </CardItem>
                </Card>}
            />
          </View>

          <ListItem itemHeader>
            <Text>Your Stack</Text>
          </ListItem>

          </Content>
    </Container>
		);
	}
}

export default FeedPage;
