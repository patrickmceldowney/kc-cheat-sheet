import {
  Heading,
  Box,
  Text,
  Flex,
  useColorModeValue,
  Badge,
  Link,
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
  const addressColor = useColorModeValue('purple.400', 'purple.300');
  let borderColor = 'cyan.300';

  if (rating === 'average') borderColor = 'green.400';
  else if (rating === 'dont') borderColor = 'red.500';
  let str = '$';

  return (
    <Box
      bg={bg}
      color={color}
      pos='relative'
      p='30px'
      m='20px'
      maxW='20em'
      h='auto'
      borderRadius={5}
      boxShadow={shadow}
      borderTop='3px solid'
      borderColor={borderColor}
    >
      <Badge pos='absolute' right={2} top={2} colorScheme='cyan'>
        {str.repeat(dollarSigns)}
      </Badge>
      <Flex alignItems='start' direction='column' p={0}>
        <Link href={link} isExternal>
          <Heading fontSize='20px' mb={5}>
            {title}
          </Heading>
        </Link>
        <Text fontSize='14px'>{content}</Text>
        <Text color={addressColor} as='i' fontSize='16px'>
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
