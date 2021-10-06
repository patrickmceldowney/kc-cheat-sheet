import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Flex,
} from '@chakra-ui/react';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Card } from '../components/Card';

const Index = () => (
  <Container height='100vh'>
    <Hero title='Kansas City Cheat Sheet' />
    <Main>
      <Flex alignContent='center' justifyContent='space-around'>
        <Card />
        <Card />
      </Flex>
    </Main>

    <DarkModeSwitch />
    {/* <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer> */}
  </Container>
);

export default Index;
