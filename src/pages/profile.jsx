import Link from "next/link";
import { getSession, useSession } from 'next-auth/react'
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
} from '@chakra-ui/react';

export default () => {
    const { data: session } = useSession()

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Center lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                    User Profile
                </Center>
                <FormControl id="userName">
                    <Center mb={4}>User Icon</Center>
                        <Center>
                            <Avatar size="xl" src={`${session.user.image}`} />
                        </Center>
                </FormControl>
                <FormControl id="userName">
                    <FormLabel>User name</FormLabel>
                    <Input
                        placeholder="UserName"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        value={session.user.name}
                    />
                </FormControl>
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                        placeholder="your-email@example.com"
                        _placeholder={{ color: 'gray.500' }}
                        type="email"
                        value={session.user.email}
                    />
                </FormControl>
            </Stack>
        </Flex>
    );
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                premanent: false
            }
        }
    }
    // authorize user return session
    return {
        props: { session }
    }
}