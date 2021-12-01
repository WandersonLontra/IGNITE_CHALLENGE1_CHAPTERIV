import Head from "next/head";

import { GetStaticProps } from "next";

import { Flex, Spacer, Box, Text, Image, Center, Circle, useBreakpointValue  } from "@chakra-ui/react";

import { api } from "../services/api";


import SwiperContinents from '../components/SwiperContinents';
import AttractiveInHome from "../components/AttractiveInHome";


type ContinentsProps = {
  id: string;
  name: string;
  description: string;
  banner_url: string;
}

interface HomeProps {
  dataTreated: ContinentsProps[];
}



export default function Home({ dataTreated }:HomeProps){
  const isMobile = useBreakpointValue({
    base: true,
    lg: false
  });
  
  console.log("CHECK: " + isMobile)
  return (
    <Flex w="100%" h="100%" align="center" flexDir="column" >
      <Head>
        <title>WorldTrip</title>
      </Head>

      <Flex
        as="section" 
        bgImage="url('/assets/images/Background.png')"
        bgRepeat="no-repeat" 
        w="100%" 
        maxW={1440} 
        h={[163,368]}
        px={["6","20","32"]}
        pt={["7","10","20"]}
        pb={["7","10","16"]}
      >
        <Flex w="100%">
          <Box maxW={524}>
            <Text 
              fontSize={["xl","2xl","4xl"]}
              lineHeight={["1.87rem","3.37rem"]} 
              fontWeight="medium" 
              color="gray.100" 
            >
              5 Continentes, <br/> infinitas possibilidades.
            </Text>
            <Text
              fontSize={["sm","md","xl"]}
              lineHeight={["1.31rem","1.875rem"]}
              fontWeight="normal"
              color="gray.300"
              mt="5"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          <Spacer />
          {!isMobile && (
            <Box>
              <Image src="/assets/Airplane.svg" alt="Airplane" htmlWidth='417.15px' />
            </Box>
          ) }
        </Flex>
      </Flex>

      <AttractiveInHome />

      <Box w={["60px","90px"]} pt="2px" bg="gray.600" />

      <Center py={["10","14"]}>
        <Text 
          fontSize={["xl","4xl"]}
          fontWeight="medium" 
          lineHeight={["1.87rem","3rem"]} 
          color="gray.600"
          textAlign="center"
        >
          Vamos nessa? <br/> Então escolha seu continente
        </Text>
      </Center>

      <Flex w="100vw" maxW={1240} pb="8" align="center" justify="center">
          <SwiperContinents data={dataTreated} />  
      </Flex>

    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('continents');

  const dataTreated = data.map((data: any) => ({
    id: data.id,
    name: data.name,
    description: data.description,
    banner_url: data.banner_url.swiper,
  }))
  
  return{
    props: {dataTreated},
    revalidate: 60 * 60 *24 * 7,
  }
}

