import { Box, Image, Flex } from '@chakra-ui/react'

const Map = () => {
    return (
        <Flex
            m={'auto'}z
            w={{ base: '100%', md: '70%' }}
            direction={{ base: 'column', xl: 'row' }}
            alignItems={'center'}
            mb={50}

        >
            <Image src="https://d1xzdqg8s8ggsr.cloudfront.net/63f9dca35a6fc74b8b7e8ab8/9f5b5668-2a41-4a73-b40a-6905021eace2_1678876339773973582?Expires=-62135596800&Signature=jb4YdyvKskpfYpeyhM-pxAPAElAQE53E-7nrKpbdV~QpVbdI3n2HM7Umj9TCxl9sGlu1fcVZi4~Hu8WS9EtvEwl0bL-ySPs8NN7Rr7sprui0VDDX7gDLG8wL0m2mea34Nga6MOcEXn4RPFVpcnhsUE67OtK~~PN9ywzb5od7vjgJwvefmX-lMlNiAXHScWJpdDkcnbp17O6~OgYtM~0aHDjsHOMpfUvjSwLqs7dhnglnJKVWvxfRoD0wkgf8ZINyd3xrQH-LilyKGnm5j4V8dZtTaVW6EgfhqOukD2MQue9MKRW0ZvYJhB31YIVnBRT1E8GmozZx7sYa95Np-ajLbw__&Key-Pair-Id=K1P54FZWCHCL6J" alt="location" w={420} />

            <Box
                w={{ base: 320, md: 450 }}
                h={{ base: 320, md: 450 }}
                margin={'auto'}

            >
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aeefba32e0c5fd5cfc56c1aeafd9464564c9fdba7d0aeee04a34fd01b0c20cf49&amp;source=constructor" width="100%" height="100%" frameborder="0" style={{ borderRadius: '5%' }}></iframe>

            </Box>
        </Flex>

    )
}

export default Map