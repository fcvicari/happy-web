import React from 'react';
import {
  Flex,
  Grid,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/core';
import { FaUserAlt, FaLock } from 'react-icons/fa';

const SingUp: React.FC = () => {
  return (
    <Grid
      as="main"
      backgroundColor="blue.900"
      templateColumns="1fr 1fr"
      height="100vh"
      width="100vw"
      templateAreas="
        'singin backgroud'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        backgroundImage=""
        gridArea="singin"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        justifySelf="end"
        minWidth="375px"
        width="100%"
        height="100%"
      >
        <Icon name="fundo" />
        <Stack paddingTop={12}>
          <Heading size="xl" color="yellow.400">
            Bem-vindo!
          </Heading>
          <Heading size="xl" color="write">
            Você é nosso maior valor.
          </Heading>
        </Stack>
        <Stack spacing={2} paddingTop={3}>
          <InputGroup
            height="12"
            width="311px"
            backgroundColor="white"
            borderRadius="md"
            size="lg"
          >
            <InputLeftElement
              color="yellow.400"
              fontSize="1.3rem"
              pointerEvents="none"
              children={<FaUserAlt />}
            />
            <Input
              name="cpf"
              placeholder="CPF"
              focusBorderColor="yellow.400"
              color="gray.800"
            />
          </InputGroup>

          <InputGroup
            height="12"
            width="311px"
            backgroundColor="white"
            borderRadius="md"
            size="lg"
          >
            <InputLeftElement
              color="yellow.400"
              fontSize="1.3rem"
              pointerEvents="none"
              children={<FaLock />}
            />
            <Input
              name="senha"
              placeholder="Senha"
              focusBorderColor="yellow.400"
              type="password"
              color="gray.800"
            />
          </InputGroup>
        </Stack>
      </Flex>
    </Grid>
  );
};

export default SingUp;
