import React, { Component } from 'react'

import { Image, View } from "react-native";

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

const pratik = require("../img/contacts/pratik.png");
const sanket = require("../img/contacts/sanket.png");
const megha = require("../img/contacts/megha.png");

const datas = [
  {
    img: pratik,
    text: "Creatine",
    note: "5g / day",
    time: "6m"
  },
  {
    img: sanket,
    text: "Caffeine-Theanine",
    note: "200mg, 60mg / day",
    time: "2m"
  },
  {
    img: megha,
    text: "Fish Oil",
    note: "2g / day",
    time: "3w"
  },
];


class ProfileStacks extends Component{
  render(){
    return(
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
    )
  }



}

export default ProfileStacks
