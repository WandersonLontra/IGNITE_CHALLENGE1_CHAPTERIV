import { Flex, Wrap, Spacer, Box, Circle, Image, Text, useBreakpointValue } from '@chakra-ui/react';


export default function AttractiveInHome() {
    const isMobile = useBreakpointValue({
        base: true,
        lg: false
    });

    if(isMobile) {
        return (
            <Wrap
                as="section"
                w="100%"
                px="12"
                my="9"
                justify="center" 
            >
                <Flex  align="center" justify="center" mb="6" >
                    <Circle as="span" size="8px" bg="yellow.500" mr="3" />
                    <Text fontWeight="bold" fontSize="lg" lineHeight="7" color="gray.600" >vida noturna</Text>
                </Flex>
                <Spacer />
                <Flex align="center" justify="center" mb="6" >
                    <Circle as="span" size="8px" bg="yellow.500" mr="3" />
                    <Text fontWeight="bold" fontSize="lg" lineHeight="7" color="gray.600" >praia</Text>
                </Flex>
                <Spacer />
                <Flex align="center" justify="center" mb="6" >
                    <Circle as="span" size="8px" bg="yellow.500" mr="3" />
                    <Text fontWeight="bold" fontSize="lg" lineHeight="7" color="gray.600" >moderno</Text>
                </Flex>
                <Spacer />
                <Flex align="center" justify="center" mb="6" >
                    <Circle as="span" size="8px" bg="yellow.500" mr="3" />
                    <Text fontWeight="bold" fontSize="lg" lineHeight="7" color="gray.600" >clássico</Text>
                </Flex>
                <Spacer />
                <Flex align="center" justify="center"  >
                    <Circle as="span" size="8px" bg="yellow.500" mr="3" />
                    <Text fontWeight="bold" fontSize="lg" lineHeight="7" color="gray.600" >e mais...</Text>
                </Flex>
            </Wrap>
        )
    }

    return (
        <Flex
            as="section"
            w="100%"
            maxW={1440}
            px="32"
            my="20"
            justify="space-between"
        >
            <Box align="center">
                <Image src="/assets/cocktail.svg" alt="cocktail icon" />    
                <Text fontWeight="bold" fontSize="2xl" lineHeight="4xl" color="gray.600" mt="6">vida noturna</Text>
            </Box>
            <Box align="center">
                <Image src="/assets/beach.svg" alt="beach icon" />
                <Text fontWeight="bold" fontSize="2xl" lineHeight="4xl" color="gray.600" mt="6">praia</Text>
            </Box>
            <Box align="center">
                <Image src="/assets/building.svg" alt="building icon" />
                <Text fontWeight="bold" fontSize="2xl" lineHeight="4xl" color="gray.600" mt="6">moderno</Text>
            </Box>
            <Box align="center">
                <Image src="/assets/museum.svg" alt="museum icon" />
                <Text fontWeight="bold" fontSize="2xl" lineHeight="4xl" color="gray.600" mt="6">clássico</Text>
            </Box>
            <Box align="center">
                <Image src="/assets/earth.svg" alt="earth icon" />
                <Text fontWeight="bold" fontSize="2xl" lineHeight="4xl" color="gray.600" mt="6">e mais...</Text>
            </Box>
        </Flex>
    )
}