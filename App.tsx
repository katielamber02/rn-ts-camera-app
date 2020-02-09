import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { Card } from './components/Card'
import * as Icon from '@expo/vector-icons'
import { NotificationIcon } from './components/Icons'
import { Logo } from './components/Logo'
import { logos, cards, courses } from './data'
import { Course } from './components/Course'
import Menu from './components/Menu'

interface Props { }
interface State { }
export default class App extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <Menu />
        <SafeAreaView>
          <ScrollView>
            <TitleBar>
              <Avatar source={require('./assets/avatar.jpeg')} />
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
      </Container>
    );
  }
}
const Container = styled.View`
  flex: 1;
  background-color:white;
  
`;
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
margin-left:20px;
position:absolute;
top:0;
left:0;
`

const SubtitleBar = styled.Text`
  color:#b8bece;
  font-weight:600;
  font-size:15px;
  margin-left:20px;
  margin-top:20px;
  text-transform:uppercase;
`


// import React from 'react';
// import styled from 'styled-components/native';

// // dynamic styles:
// interface IContainerProps {
//   background: string;
// }

// const Container = styled.View`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props: IContainerProps) => props.background ? props.background : 'white'};
// `;
// const MainText = styled.Text`
//   font-size: 20;
//   text-align: center;
//   margin: 10px;
//   color: white;
// `;

// interface Props { }
// interface State { }
// export default class Dynamic extends React.Component<Props, State> {
//   render() {
//     return (
//       <Container background="red">
//         <MainText>Hello world</MainText>
//       </Container>
//     );
//   }
// }