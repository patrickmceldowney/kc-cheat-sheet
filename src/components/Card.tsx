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
  const bg = useColorModeValue('white', 'gray.300');
  const color = useColorModeValue('gray.100', 'gray.700');
  const shadow = useColorModeValue('lg', 'inner');
  let str = '$';

  return (
    <Box
      bg='white'
      color='gray.700'
      p='30px'
      m='20px'
      w='content'
      borderRadius={5}
      boxShadow={shadow}
      borderTop='3px solid'
      borderColor='cyan.300'
    >
      <Flex alignItems='start' direction='column' p={0}>
        <Heading fontSize='20px' mb={5}>
          {title} <span>{str.repeat(dollarSigns)}</span>
        </Heading>
        <Text fontSize='14px'>{content}</Text>
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
