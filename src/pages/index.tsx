import React from 'react';
import { Button, Flex, Grid, Heading, Text } from '@chakra-ui/core';

import { FiArrowRight } from 'react-icons/fi';

import Logo from '../assets/logo.svg';
import BackgroudImage from '../assets/back.png';

const Home: React.FC = () => {
  return (
    <Grid
      as="main"
      backgroundColor="blue.300"
      templateColumns="1fr 300px 700px 1fr"
      templateRows="1fr 680px 1fr"
      height="100vh"
      width="100vw"
      templateAreas="
        '. . . . '
        '. logo logon .'
        '. . . . '
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        gridArea="logo"
        flexDir="column"
        justifyContent="center"
        alignItems="start"
        justifySelf="end"
        width="100%"
        height="100%"
      >
        <Logo />
        <Heading
          fontWeight="bold"
          lineHeight={0.9}
          paddingTop={48}
          fontSize={64}
        >
          Leve felicidade para o mundo
        </Heading>
        <Heading
          fontSize={20}
          fontWeight="normal"
          paddingTop={16}
          lineHeight={1.4}
        >
          Visite uma casa de acolhimento e mude o dia de muitas crianças.
        </Heading>
      </Flex>

      <Flex
        gridArea="logon"
        flexDir="column"
        justifyContent="space-between"
        paddingBottom={8}
        paddingTop={12}
        alignItems="flex-end"
        justifySelf="padding"
        width="100%"
        height="100%"
        backgroundImage={`url(${BackgroudImage})`}
        backgroundPosition="left center"
        backgroundRepeat="no-repeat"
      >
        <Heading fontWeight="bold" fontSize={20}>
          São Miguel do Oeste
          <Heading fontWeight="normal" fontSize={16}>
            Santa Catarina
          </Heading>
        </Heading>
        <Button
          backgroundColor="yellow.500"
          height="80px"
          width="80px"
          borderRadius="lg"
        >
          <FiArrowRight color="#8D734B" fontSize={32} fontWeight="bold" />
        </Button>
      </Flex>
    </Grid>
  );
};

export default Home;
