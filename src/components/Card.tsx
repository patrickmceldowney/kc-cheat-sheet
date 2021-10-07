import {
  Heading,
  Box,
  Text,
  Flex,
  useColorModeValue,
  Badge,
} from '@chakra-ui/react';
import { PlaceTypes } from '../lib/types';
export const Card = ({
  title,
  content,
  rating,
  dollarSigns,
  link,
  address,
}: PlaceTypes) => {
  const bg = useColorModeValue('white', 'gray.600');
  const color = useColorModeValue('gray.700', 'gray.100');
  const shadow = useColorModeValue('lg', 'inner');
  let str = '$';

  return (
    <Box
      bg={bg}
      color={color}
      p='30px'
      m='20px'
      maxW='20em'
      h='auto'
      borderRadius={5}
      boxShadow={shadow}
      borderTop='3px solid'
      borderColor='cyan.300'
    >
      <Flex alignItems='start' direction='column' p={0}>
        <Heading fontSize='20px' mb={5}>
          {title} <Badge colorScheme='cyan'>{str.repeat(dollarSigns)}</Badge>
        </Heading>
        <Text fontSize='14px'>{content}</Text>
        <Text color='cyan.700' as='i' fontSize='16px'>
          {address}
        </Text>
      </Flex>
    </Box>
  );
};

Card.defaultProps = {
  title: 'Name',
  content: 'Description of the place',
  rating: 'do',
  dollarSigns: 2,
  address: '110000 Sweet St, FlavorTown MO',
  link: 'https://google.com',
};
