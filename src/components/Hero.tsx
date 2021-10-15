import { Flex, Heading } from '@chakra-ui/react';

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent='center'
    alignItems='start'
    height='43vh'
    mt='50px'
    bgGradient='linear(to-l, #7928CA, #FF0080)'
    bgClip='text'
  >
    <Heading fontSize={{ base: '8vw', sm: '10vw', md: '5.5vw' }}>
      {title}
    </Heading>
  </Flex>
);

Hero.defaultProps = {
  title: 'with-chakra-ui-typescript',
};
