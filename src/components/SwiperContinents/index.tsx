import React from 'react';

import Link from 'next/link';

import { Stack, Text } from '@chakra-ui/react';


import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination, Navigation, Autoplay]);

type ContinentsProps = {
    id: string;
    name: string;
    description: string;
    banner_url: string;
}

interface SwiperContinentsProps {
    data: ContinentsProps[];
}


export default function SwiperContinents({ data }: SwiperContinentsProps) {
    return (
        <Swiper
            className='swiper'
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            loop={true}
            pagination={{ "clickable": true }}
            navigation
            autoplay={{
                "delay": 5000
            }}
        >
            {
                data.map(({ id, name, description, banner_url }) => (
                    <SwiperSlide key={id} className="swiperSlide">
                        <Link href={`/continent/${id}`} passHref>
                            <Stack
                                w="100%"
                                h={[250, 350, 450]}
                                spacing="4"
                                bgImage={`url(${banner_url})`}
                                bgPosition="center"
                                bgRepeat="no-repeat"
                                objectFit="contain"
                                align="center"
                                justify="center"
                                cursor="pointer"
                            >
                                <Text
                                    fontSize={["2xl", "4xl", "5xl"]}
                                    lineHeight={["9", "7xl"]}
                                    fontWeight="bold"
                                    color="gray.100"
                                >
                                    {name}
                                </Text>

                                <Text
                                    fontSize={["sm", "lg", "2xl"]}
                                    lineHeight={["1,31rem", "4xl"]}
                                    fontWeight="bold"
                                    color="gray.300"
                                >
                                    {description}
                                </Text>
                            </Stack>
                        </Link>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

