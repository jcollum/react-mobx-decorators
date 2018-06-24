import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

const Container = styled(Box)`
  max-width: 1024px;
`;
Container.defaultProps = {
  mx: 'auto'
};
const GreyBox = styled(Box)`
  background-color: #ccc;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

const BlueFlex = styled(Flex)`
  background-color: #3a85ff;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

@observer
class App extends Component {
  @observable counter = 0;

  onIncrement = () => {
    this.counter++;
  };

  onDecrement = () => {
    this.counter--;
  };

  render() {
    return (
      <Container p={20}>
        <Flex alignItems={'center'}>
          <GreyBox width={1 / 2} px={2}>
            <button onClick={this.onIncrement} type="button">
              Increment
            </button>
          </GreyBox>
          <GreyBox width={1 / 2} px={2}>
            <button onClick={this.onDecrement} type="button">
              Decrement
            </button>
          </GreyBox>
        </Flex>
        <BlueFlex alignItems={'center'}>
          <Box width={1} />
          <Box width={1 / 10}>{this.counter}</Box>
          <Box width={1}> </Box>
        </BlueFlex>
      </Container>
    );
  }
}

export default App;
