import { Heading, Box, Text, Flex, useColorModeValue } from '@chakra-ui/react';

export const Card = ({
  title,
  content,
  rating,
  dollarSigns,
  link,
  address,
}: {
  title: string;
  content: string;
  rating: 'do' | 'dont' | 'ok';
  dollarSigns: number;
  link: string;
  address?: string;
}) => {
  const bg = useColorModeValue('gray.700', 'gray.100');
  const color = useColorModeValue('gray.100', 'gray.700');
  let str = '$';

  return (
    <Box bg={bg} color={color} p='2vw' maxW='20vw' borderRadius={10}>
      <Flex alignItems='center' direction='column'>
        <Heading fontSize='2vw' mb={5}>
          {title} <span>{str.repeat(dollarSigns)}</span>
        </Heading>
        <Text fontSize='1vw'>{content}</Text>
      </Flex>
    </Box>
  );
};

Card.defaultProps = {
  title: 'Name',
  content: 'Description of the place',
  rating: 'do',
  dollarSigns: 2,
  link: 'https://google.com',
};
