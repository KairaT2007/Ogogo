// @ts-nocheck
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    IconButton,
    HStack,
    Text,
    Image
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
import { getSession, useSession, signOut } from "next-auth/react"

const Links = ['Programming_UX-UI', 'English', 'Reviews'];

const NavLink = ({ children }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.700', 'gray.700'),
        }}
        href={`${children}`}>
        {children}
    </Link>
);

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { data: session } = useSession()

    function handleSignOut() {
        signOut()
    }

    return (
        <>
            <Box
                bg={useColorModeValue('gray.900', 'gray.900')}
                color={useColorModeValue('gray.200', 'gray.200')}
                px={4}
                p={2}
                position="sticky"
                zIndex={999}
                top={0}
            >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        color={useColorModeValue('gray.900', 'gray.200')}
                    />

                    <Box display={'flex'} alignItems={'center'}>
                        <Image src="https://english.ogogoacademy.kg/logo.png" alt="" width={{ base: 0, md: 50 }} />
                        <Text fontSize={{ base: 0, md: 15 }}>OGOGO Academy</Text>
                    </Box>
                    <HStack spacing={8} alignItems={'center'}>
                        <HStack
                            as={'nav'}
                            spacing={5}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>

                    <Flex alignItems={'center'} >
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode} color={useColorModeValue('gray.900', 'gray.200')}>
                                {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
                            </Button>
                            {!session ?
                                <Button
                                    color={useColorModeValue('gray.900', 'gray.200')}
                                >
                                    <Link href={'/login'}>
                                        Sign in
                                    </Link>
                                </Button>
                                :
                                <Menu color={useColorModeValue('gray.200', 'gray.900')}>
                                    <MenuButton
                                        as={Button}
                                        rounded={'full'}
                                        variant={'link'}
                                        cursor={'pointer'}
                                        minW={0}>
                                        <Avatar
                                            size={'sm'}
                                            src={`${session.user.image}`}
                                        />
                                    </MenuButton>
                                    <MenuList alignItems={'center'} color={useColorModeValue('gray.900', 'gray.200')} border={'0.5px solid black'}>
                                        <br />
                                        <Center>
                                            <Avatar
                                                size={'2xl'}
                                                src={`${session.user.image}`}
                                                border={'0.5px solid gray'}
                                            />
                                        </Center>
                                        <br />
                                        <Center>
                                            {session.user.name}
                                        </Center>
                                        <br />
                                        <MenuDivider />
                                        <MenuItem><Link href={'/profile'} >Account Settings</Link></MenuItem>
                                        <MenuItem onClick={handleSignOut} color={'red.300'}>Logout</MenuItem>
                                    </MenuList>
                                </Menu>
                            }
                        </Stack>
                    </Flex>
                </Flex>
                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: { session }
    }
}