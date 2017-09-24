const React = require("react-native")
import { white, teal} from '../utils/colors'

const { StyleSheet } = React;

export default {
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  },
  rating: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#8BBEB2',
  },
  slider: {
    marginTop: 15,
    width: 275,
    alignSelf: "center"
  },
  ratingLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 24,
    marginLeft:48
  },
  deckSwiper: {
    paddingBottom: 15,
    marginBottom: 25
  },
  container: {
    flex: 1,
    backgroundColor: white
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iosSubmitBtn: {
    backgroundColor: teal,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: teal,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  }

};
