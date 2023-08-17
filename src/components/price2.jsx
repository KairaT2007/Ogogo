import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

function PriceWrapper({ children }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'center' }}
            borderColor={useColorModeValue('gray.400', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    );
}

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function ThreeTierPricing({ desc1, desc2, desc3 }) {
    React.useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        if (query.get('success')) {
            console.log('Order placed! You will receive an email confirmation.');
        }

        if (query.get('canceled')) {
            console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
        }
    }, []);

    return (
        <Box py={12}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl">
                    Plans that fit your need
                </Heading>
            </VStack>
            <Stack
                direction={{ base: 'column', xl: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}>
                <PriceWrapper>
                    <Box py={4} px={{ base: 8, md: 12 }}>
                        <Text fontWeight="500" fontSize="2xl">
                            Front-End
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="4xl" fontWeight="900">
                                16,000
                            </Text>
                            <Text fontSize="3xl" fontWeight="600">
                                KGS
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /month
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.200', 'gray.800')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                {desc1}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                {desc2}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                {desc3}
                            </ListItem>
                        </List>
                        <Box w="65%" pt={7}>
                            <form action="/api/checkout_sessions3" method="POST">
                                <Button
                                    type='submit'
                                    role="link"
                                    w="full"
                                    variant="outline"
                                    bg={useColorModeValue('orange.300', 'orange.500')}
                                >
                                    Enroll Now
                                </Button>
                            </form>
                        </Box>
                    </VStack>
                </PriceWrapper>

                <PriceWrapper>
                    <Box py={4} px={{ base: 8, md: 12 }}>
                        <Text fontWeight="500" fontSize="2xl">
                            UX-UI
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="4xl" fontWeight="900">
                                12,000
                            </Text>
                            <Text fontSize="3xl" fontWeight="600">
                                KGS
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /month
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.200', 'gray.800')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                {desc1}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                {desc2}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                {desc3}
                            </ListItem>
                        </List>
                        <Box w="65%" pt={7}>
                            <form action="/api/checkout_sessions5" method="POST">
                                <Button
                                    type='submit'
                                    role="link"
                                    w="full"
                                    variant="outline"
                                    bg={useColorModeValue('orange.300', 'orange.500')}
                                >
                                    Enroll Now
                                </Button>
                            </form>
                        </Box>
                    </VStack>
                </PriceWrapper>

                <PriceWrapper>
                    <Box py={4} px={{ base: 8, md: 12 }}>
                        <Text fontWeight="500" fontSize="2xl">
                            Back-End
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="4xl" fontWeight="900">
                                16,000
                            </Text>
                            <Text fontSize="3xl" fontWeight="600">
                                KGS
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /month
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.200', 'gray.800')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                {desc1}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                {desc2}
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                {desc3}
                            </ListItem>
                        </List>
                        <Box w="65%" pt={7}>
                            <form action="/api/checkout_sessions4" method="POST">
                                <Button
                                    type='submit'
                                    role="link"
                                    w="full"
                                    variant="outline"
                                    bg={useColorModeValue('orange.300', 'orange.400')}
                                >
                                    Enroll Now
                                </Button>
                            </form>
                        </Box>
                    </VStack>
                </PriceWrapper>
            </Stack>
        </Box>
    );
}