import { Text, Stack, Box, Tooltip, Icon } from '@chakra-ui/react';

import { RiInformationLine } from "react-icons/Ri";

interface ContinentAboutProps {
    aboutText: string;
    countryAmount: number;
    languageAmount: number;
    mostCitiesAmount: number;
    citiesAmount: number;
}

export default function ContinentAbout({
    aboutText,
    countryAmount,
    languageAmount,
    mostCitiesAmount,
    citiesAmount
}: ContinentAboutProps) {

    return (

        <Stack
            as='section'
            direction={["column", "column", "column", "row"]}
            spacing={["4", "4.37rem"]}
            w="100%"
            maxW={1440}
            py={["6", "10", "20"]}
            px={["4", "8","20", "32"]}
            align="center"
        >
            <Text
                maxW={600}
                fontSize={["sm", "lg", "2xl"]}
                lineHeight={["1.31rem", "2.25rem"]}
                textAlign="justify"
                color="gray.600"
            >
                {aboutText}
            </Text>
            <Stack
                direction="row"
                spacing={["6","8","10"]}
                align="center"
            >
                <Box align="center" justify="center">
                    <Text
                        fontSize={["2xl", "3xl", "5xl"]}
                        lineHeight={["2.25rem", "3rem", "4.5rem"]}
                        fontWeight="bold"
                        textAlign={["left", "center"]}
                        color="yellow.500"
                    >
                        {countryAmount}
                    </Text>
                    <Text
                        fontSize={["lg", "xl", "2xl"]}
                        lineHeight={["1.68rem", "1.875rem", "2.25rem"]}
                        fontWeight="bold"
                        textAlign={["left", "center"]}
                        color="gray.600"
                    >
                        países
                    </Text>
                </Box>

                <Box align="center" justify="center">
                    <Text
                        fontSize={["2xl", "3xl", "5xl"]}
                        lineHeight={["2.25rem", "3rem", "4.5rem"]}
                        fontWeight="bold"
                        textAlign={["left", "center"]}
                        color="yellow.500"
                    >
                        {languageAmount}
                    </Text>
                    <Text
                        fontSize={["lg", "xl", "2xl"]}
                        lineHeight={["1.68rem", "1.875rem", "2.25rem"]}
                        fontWeight="bold"
                        textAlign={["left", "center"]}
                        color="gray.600"
                    >
                        línguas
                    </Text>
                </Box>

                <Box align="center" justify="center">
                    <Text
                        fontSize={["2xl", "3xl", "5xl"]}
                        lineHeight={["2.25rem", "3rem", "4.5rem"]}
                        fontWeight="bold"
                        textAlign={["left", "center"]}
                        color="yellow.500"
                    >
                        {mostCitiesAmount}
                    </Text>
                    <Text
                        fontSize={["lg", "xl", "2xl"]}
                        lineHeight={["1.68rem", "1.875rem", "2.25rem"]}
                        fontWeight="bold"
                        textAlign={["left", "center"]}
                        color="gray.600"
                        textWrap="no-wrap"
                    >
                        {citiesAmount > 100 ? "cidades +100" : `${citiesAmount} cidades`}
                        <Tooltip
                            hasArrow
                            label={`${citiesAmount} cidades`}
                            bg="yellow.500"
                            color="gray.600"
                            placement='bottom'
                        >
                            <span>
                                <Icon as={RiInformationLine} fontSize="18px" color="gray.450" ml="1.5" />
                            </span>
                        </Tooltip>
                    </Text>
                </Box>
            </Stack>
        </Stack>
    )
}