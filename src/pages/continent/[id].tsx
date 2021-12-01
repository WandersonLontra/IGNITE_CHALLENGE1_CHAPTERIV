import { GetStaticProps, GetStaticPropsContext } from "next"
import Head from "next/head";

import { Flex, Text, Box, SimpleGrid, Stack, VStack, Image, Avatar, useBreakpointValue } from '@chakra-ui/react';

import { api } from "../../services/api"
import ContinentAbout from "../../components/ContinentAbout";

type CitiesData = {
    id: string;
    name: string;
    country: string;
    country_flag: string;
    city_image: string;
}

type continentData = {
    id: string;
    name: string;
    about: string;
    country_amount: number;
    language_amount: number;
    cities_amount: number;
    most_cities_amount: number;
    banner_url: string;
    cities: CitiesData[];
}

interface ContinentPageProps {
    dataTreated: continentData;
}

export default function ContinentPage({dataTreated}: ContinentPageProps){
    const isMobile = useBreakpointValue({
        base: true,
        lg: false
    });    
    
    return(
        <Flex w="100%" h="100%" align="center" direction="column"  >
            <Head>
                <title>WorldTrip | {dataTreated.name}</title>
            </Head>
            
            <Box as="section" w="100%" maxW={1440}>
                <Flex
                    bgImage={`url(${dataTreated.banner_url})`}
                    bgRepeat="no-repeat"
                    bgPosition="center"
                    bgSize="cover" 
                    h={[150, 300, 400, 500]}
                    px={["6","20","32"]}
                    py={["7","10","14"]}
                    align={isMobile ? "center": "flex-end"}
                    justify={isMobile ? "center": "flex-start"} 
                >
                    <Text
                        fontSize={["3xl","5xl"]}
                        lineHeight={["2.62rem","4.5rem"]} 
                        fontWeight="bold" 
                        color="gray.100"
                    >
                        {dataTreated.name}
                    </Text>
                </Flex>
            </Box>

            <ContinentAbout
                aboutText={dataTreated.about}
                countryAmount={dataTreated.country_amount}
                languageAmount={dataTreated.language_amount}
                mostCitiesAmount={dataTreated.most_cities_amount}
                citiesAmount={dataTreated.cities_amount}
            />

            <VStack
                as='section'
                w="100%"
                maxW={1160}
                pb="9"
            >
                <Text
                    display="block"
                    w="100%"
                    fontSize={["2xl","3xl","4xl"]}
                    lineHeight={["9","10","3.37rem"]}
                    fontWeight="medium"
                    color="gray.600"
                    pl={isMobile ? '4': ''}
                    mb={["5","7","10"]}
                >
                    Cidades +100
                </Text>
                <SimpleGrid px={isMobile ? '14': ''} columns={[1,2,3,4]} spacing={["20px",45]} >
                    {dataTreated.cities.map(city => (
                        <Box
                            key={city.id}
                            borderRadius='lg'
                            overflow='hidden'
                            boxSizing="content-box"
                        >
                            <Image
                                w="100%"
                                h={173} 
                                src={city.city_image}
                                alt={city.name}
                            />
                            <Stack 
                                px={["6"]}
                                py={["5"]}
                                borderWidth='1px'
                                borderColor='yellow.500'
                                borderBottomRadius='lg'
                                direction='row'
                                align="center"
                                justify="space-between"
                            >
                                <Flex direction="column">
                                    <Text 
                                        fontSize={["xl"]}
                                        lineHeight={["1.56rem"]}
                                        fontWeight="bold"
                                        color="gray.600"
                                    >
                                        {city.name}
                                    </Text>
                                    <Text
                                        fontSize={["md"]}
                                        lineHeight={["1.62rem"]}
                                        fontWeight="medium"
                                        color="gray.500"
                                        mt={["3"]}                                    
                                    >
                                        {city.country}
                                    </Text>
                                </Flex>
            
                                <Avatar w={35} h={35} src={city.country_flag} />
                            </Stack>
                        </Box>
                    ))}
                </SimpleGrid>
            </VStack>

        </Flex>
    )
}

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (req: GetStaticPropsContext) => {
    const id = req.params?.id

    const { data } = await api.get(`/continents/${id}`);

    const dataTreated = {
        id: data.id,
        name: data.name,
        about: data.about,
        country_amount: data.country_amount,
        language_amount: data.language_amount,
        cities_amount: data.cities_amount,
        most_cities_amount: data.most_cities_amount,
        banner_url: data.banner_url.page,
        cities: data.cities
    }
    
    return {
        props: {dataTreated},
        revalidate: 60 * 60 *24 * 7,
    }
}