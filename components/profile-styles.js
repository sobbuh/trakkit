const React = require("react-native")
import { white, teal, background, purple} from '../utils/colors'

const { StyleSheet } = React;

export default {

  topHalfBackground: {
    flex: 1,
    alignSelf: 'stretch',
    width: null
  },
  topHalf: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: background

  },
  profilePicWrapper: {
    width: null,
    borderRadius: 100,
    alignItems: 'center',
    backgroundColor: background,
  },
  profilePic:{
    flex: 1,
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: white,
    borderWidth: 4,
    marginTop: 20,

  },
  name: {
    marginTop: 20,
    fontSize: 20,
    color: purple,
    fontWeight: 'bold'
  },
  stacks: {
    color: purple,
    marginTop: 4,
    fontSize: 20
  },
  container: {
  backgroundColor: "#FFF"
  }
}
