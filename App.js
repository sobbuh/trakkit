import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { TabNavigator, StackNavigator } from 'react-navigation'
import Feed from './components/Feed'
import Profile from './components/Profile'
import Explore from './components/Explore'
import Cohorts from './components/Cohorts'
import Record from './components/Record'
import { white, backgroundColor, teal } from './utils/colors'
import EntryDetail from './components/EntryDetail'

function TrakkitStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ion-ios-list' size={30} color={tintColor} />
    }
  },
  History: {
    screen: Cohorts,
    navigationOptions: {
      tabBarLabel: 'Cohorts',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ion-ios-people' size={30} color={tintColor} />
    },
  },
  Record: {
    screen: Record,
    navigationOptions: {
      tabBarLabel: 'Record',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='ion-android-radio-button-on' size={30} color={tintColor} />
    },
  },
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ion-compass' size={30} color={tintColor} />
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-person' size={30} color={tintColor} />
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? teal : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : teal,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: backgroundColor,
      }
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <TrakkitStatusBar backgroundColor={backgroundColor} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
