import {
  Link as ChakraLink,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
} from '@chakra-ui/react';

import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Card } from '../components/Card';
import {
  dinnerCas,
  dinnerFancy,
  breakfast,
  cocktails,
  beerAndCasual,
  wine,
  caffeine,
} from '../lib/constants';

const Index = () => (
  <Container minHeight='100vh'>
    <Hero title='Kansas City Cheat Sheet' />
    <Main maxW='100vw'>
      <Tabs isFitted variant='enclosed' m='0 2em'>
        <TabList mb='1em'>
          <Tab>Fancy Dinner 💃🎩</Tab>
          <Tab>Casual Dinner 🧢</Tab>
          <Tab>Cocktails 🍸</Tab>
          <Tab>Beer and Casual Hangs 🍻</Tab>
          <Tab>Wine 🍷</Tab>
          <Tab>Coffee ☕</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex alignContent='center' justifyContent='center' wrap='wrap'>
              {dinnerFancy.map((place, index) => (
                <Card
                  key={index}
                  title={place.title}
                  content={place.content}
                  rating={place.rating}
                  dollarSigns={place.dollarSigns}
                />
              ))}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex alignContent='center' justifyContent='center' wrap='wrap'>
              {dinnerCas.map((place, index) => (
                <Card
                  key={index}
                  title={place.title}
                  content={place.content}
                  rating={place.rating}
                  dollarSigns={place.dollarSigns}
                />
              ))}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex alignContent='center' justifyContent='center' wrap='wrap'>
              {cocktails.map((place, index) => (
                <Card
                  key={index}
                  title={place.title}
                  content={place.content}
                  rating={place.rating}
                  dollarSigns={place.dollarSigns}
                />
              ))}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex alignContent='center' justifyContent='center' wrap='wrap'>
              {beerAndCasual.map((place, index) => (
                <Card
                  key={index}
                  title={place.title}
                  content={place.content}
                  rating={place.rating}
                  dollarSigns={place.dollarSigns}
                />
              ))}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex alignContent='center' justifyContent='center' wrap='wrap'>
              {wine.map((place, index) => (
                <Card
                  key={index}
                  title={place.title}
                  content={place.content}
                  rating={place.rating}
                  dollarSigns={place.dollarSigns}
                />
              ))}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex alignContent='center' justifyContent='center' wrap='wrap'>
              {caffeine.map((place, index) => (
                <Card
                  key={index}
                  title={place.title}
                  content={place.content}
                  rating={place.rating}
                  dollarSigns={place.dollarSigns}
                />
              ))}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Main>

    <DarkModeSwitch />
    {/* <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer> */}
  </Container>
);

export default Index;
