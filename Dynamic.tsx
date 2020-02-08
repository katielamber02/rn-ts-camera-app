import React from 'react';
import styled from 'styled-components/native';

// dynamic styles:
interface IContainerProps {
    background: string;
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: IContainerProps) => props.background ? props.background : 'white'};
`;
const MainText = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10px;
  color: red;
`;

interface Props { }
interface State { }
export default class Dynamic extends React.Component<Props, State> {
    render() {
        return (
            <Container background="red">
                <MainText>Hello world</MainText>
            </Container>
        );
    }
}