import React from 'react';
import { Flex, Grid, Heading, Link } from '@chakra-ui/react';

import Logo from '../assets/logo.svg';
import BackgroudImage from '../assets/back.png';

const OrphanagesMap: React.FC = () => {
  return (
    <Grid
      as="main"
      backgroundColor="blue.500"
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
        justifyContent="space-around"
        alignItems="start"
        justifySelf="end"
        paddingLeft={6}
        width="100%"
        height="100%"
      >
        <Link href="/">
          <Logo />
        </Link>
        <Heading
          fontWeight="bold"
          lineHeight={0.9}
          paddingTop={6}
          paddingRight={4}
          fontSize={36}
          color="white"
        >
          Escolha uma casa de acolhimento no mapa
          <Heading
            fontSize={18}
            fontWeight="medium"
            paddingTop={8}
            lineHeight={1.4}
            color="white"
          >
            Muitas crianças estão esperando a sua visita :)
          </Heading>
        </Heading>

        <Heading fontWeight="bold" color="white" fontSize={20}>
          São Miguel do Oeste
          <Heading fontWeight="normal" fontSize={16}>
            Santa Catarina
          </Heading>
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
        backgroundColor="gray.100"
      >
        Mapa
      </Flex>
    </Grid>
  );
};

export default OrphanagesMap;
