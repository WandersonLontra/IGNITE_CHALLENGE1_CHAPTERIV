import { Flex, Center, Image, Icon, Grid, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import Link from "next/link";

import { HiOutlineChevronLeft } from 'react-icons/Hi';


export default function Header() {
    const router = useRouter();
    let isHomePage = true;

    if(router.asPath === "/")
    isHomePage = false

    return (
        <Flex as="header" w="100%" py={["4","7"]} align="center" justify="center" >
            <Grid w="100%" maxW={1440} px={["4","20","36"]} templateColumns='repeat(3, 1fr)'>
                <Flex align="center" justify="flex-start" cursor="pointer" >
                    {isHomePage && (
                        <Link href="/" passHref>
                            <Icon as={HiOutlineChevronLeft} w={[6,8]} h={[6,8]} color="gray.600"/>
                        </Link>
                    )}
                </Flex>
                <Center>
                    <Link href="/" passHref>
                        <Image src="/assets/Logo.svg" alt="Logo" htmlWidth='184px' cursor="pointer" />
                    </Link>
                </Center>
                <Box></Box>
            </Grid>
        </Flex>
    )
}