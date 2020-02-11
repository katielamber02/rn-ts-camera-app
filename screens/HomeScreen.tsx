// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export default class HomeScreen extends Component {
//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     )
//   }
// }

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar
} from 'react-native';
import styled from 'styled-components/native';
import { Card } from '../components/Card'
import * as Icon from '@expo/vector-icons'
import { NotificationIcon } from '../components/Icons'
import { Logo } from '../components/Logo'
import { logos, cards, courses } from '../data'
import { Course } from '../components/Course'
import Menu from '../components/Menu'
import { connect } from 'react-redux'



function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {

  return {
    openMenu: () => dispatch({
      type: "OPEN_MENU"
    })
  }
}


interface Props {
  closeMenu: () => void;
  openMenu: () => void;
  action: string;
}
interface State { }
class App extends React.Component<Props, State> {
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 2,
        duration: 500,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if (this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 500,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  };
  render() {
    return (
      <Root>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{ scale: this.state.scale }],
            opacity: this.state.opacity
          }}
        >

          <SafeAreaView>
            <ScrollView>
              <TitleBar>
                <TouchableOpacity onPress={this.props.openMenu} style={{ position: "absolute", top: 0, left: 20 }}>
                  <Avatar source={require('../assets/avatar.jpeg')} />
                </TouchableOpacity >
                <Title>Hello world</Title>
                <Name>Hello world</Name>
                {/* <Icon.Ionicons name="ios-notifications" size={32} color="blue" style={{ position: "absolute", right: 20, top: 5 }} /> */}
                <NotificationIcon style={{ position: "absolute", right: 20, top: 5 }} />
              </TitleBar>


              <ScrollView
                showsHorizontalScrollIndicator={false}
                style={{ flexDirection: "row", padding: 20, paddingLeft: 12, paddingTop: 30 }} horizontal={true}>
                {logos.map((logo, index) => (
                  <Logo key={index} image={logo.image} text={logo.text} />
                ))}


              </ScrollView>
              <SubtitleBar>Some text SubtitleBar</SubtitleBar>
              <ScrollView horizontal={true} style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
                {cards.map((card, index) => (
                  <Card
                    key={index}
                    title={card.title}
                    image={card.image}
                    caption={card.caption}
                    logo={card.logo}
                    subtitle={card.subtitle}
                  />
                ))}
              </ScrollView>

              <SubtitleBar>Popular Courses</SubtitleBar>
              {courses.map((course, index) => (
                <Course
                  key={index}
                  image={course.image}
                  title={course.title}
                  subtitle={course.subtitle}
                  logo={course.logo}
                  author={course.author}
                  avatar={course.avatar}
                  caption={course.caption}
                />
              ))}
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </Root>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
const Container = styled.View`
          flex: 1;
          background-color:white;
          border-radius:10px;
          
        `;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Root = styled.View`
 background:black;
 flex:1
`

const Title = styled.Text`
          font-size:20px;
          color:red;
          font-weight:400;
        `;
const Name = styled.Text`
          font-size:30px;
          font-weight:bold;
          color:aqua;
        `

const TitleBar = styled.View`
         width:100%;
         margin-top:50px;
         padding-left:80px;
        `
const Avatar = styled.Image`
        width:44px;
        height:44px;
        border-radius:22px;
        background:black;
      
        `

const SubtitleBar = styled.Text`
          color:#b8bece;
          font-weight:600;
          font-size:15px;
          margin-left:20px;
          margin-top:20px;
          text-transform:uppercase;
        `
