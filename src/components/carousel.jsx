import React from 'react';
import { Box, IconButton, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import { Flex } from '@chakra-ui/react';

const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Carousel() {
    const [slider, setSlider] = React.useState(null);

    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    const cards = [
        'https://i8.photo.2gis.com/images/branch/0/30258560087130052_4f9d.jpg',
        'https://i7.photo.2gis.com/images/branch/0/30258560087130000_8ff1.jpg',
        'https://inai.kg/uploads/posts/139/image_1638156700.jpg',
    ];

    return (
        <Flex
            justify={'center'}
        >
            <Box
                position={'relative'}
                height={'680px'}
                width={'90%'}
                overflow={'hidden'}
                bgSize={'cover'}
                borderRadius={'25px'}
                display={{ base: 'none', md: 'block' }}
            >
                <link
                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
                <IconButton
                    bg={useColorModeValue('gray.900', 'gray.200')}
                    aria-label="left-arrow"
                    colorScheme="messenger"
                    borderRadius="full"
                    position="absolute"
                    left={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickPrev()}>
                    <BiLeftArrowAlt />
                </IconButton>
                <IconButton
                    bg={useColorModeValue('gray.900', 'gray.200')}
                    aria-label="right-arrow"
                    colorScheme="messenger"
                    borderRadius="full"
                    position="absolute"
                    right={side}
                    top={top}
                    transform={'translate(0%, -50%)'}
                    zIndex={2}
                    onClick={() => slider?.slickNext()}>
                    <BiRightArrowAlt />
                </IconButton>
                <Slider {...settings} ref={(slider) => setSlider(slider)}>
                    {cards.map((url, index) => (
                        <Box
                            key={index}
                            height={'6xl'}
                            position="relative"
                            backgroundPosition="center"
                            backgroundRepeat="no-repeat"
                            backgroundSize="cover"
                            backgroundImage={`url(${url})`}
                        />
                    ))}
                </Slider>
            </Box>
        </Flex>
    );
}