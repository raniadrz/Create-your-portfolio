import React from 'react';
import { Avatar, Heading, VStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const greeting = 'Hello, I am User!';
const bio1 = 'A frontend developer';
const bio2 = 'Specialised in React';

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={10}>
      <Avatar boxSize="300px" src="https://cdnb.artstation.com/p/assets/images/images/048/114/445/large/luupaloop-illustration-9.jpg?1649243050" />
      <Heading as="h1" fontSize="md">
        {greeting}
      </Heading>
      <Heading as="h2" fontSize="3xl">
        {bio1}
      </Heading>
      <Heading as="h2" fontSize="3xl">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
