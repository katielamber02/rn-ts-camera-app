import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { Card } from './components/Card'
import * as Icon from '@expo/vector-icons'

interface Props { }
interface State { }
export default class App extends React.Component<Props, State> {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <ScrollView>
            <TitleBar>
              <Avatar source={require('./assets/avatar.jpeg')} />
              <Title>Hello world</Title>
              <Name>Hello world</Name>
              <Icon.Ionicons name="ios-notifications" size={32} color="blue" style={{ position: "absolute", right: 20, top: 5 }} />

            </TitleBar>
            <SubtitleBar>Some text SubtitleBar</SubtitleBar>
            <ScrollView horizontal={true} style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
              <Card title="styled components 1" image={require('./assets/background1.jpg')} capture="React Native" logo={require('./assets/avatar.jpeg')} subtitle="5 of 12 sections" />
              <Card title="styled components 2" image={require('./assets/background1.jpg')} capture="React Native" logo={require('./assets/avatar.jpeg')} subtitle="5 of 12 sections" />
              <Card title="styled components 3" image={require('./assets/background1.jpg')} capture="React Native" logo={require('./assets/avatar.jpeg')} subtitle="5 of 12 sections" />
              <Card title="styled components 4" image={require('./assets/background1.jpg')} capture="React Native" logo={require('./assets/avatar.jpeg')} subtitle="5 of 12 sections" />
            </ScrollView>
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