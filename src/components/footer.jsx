// @ts-nocheck
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaYoutube, FaTelegram } from 'react-icons/fa';

const Logo = () => {
    return (
        <Box
            w={{ base: 'none', md: 128 }}
        >
            <img src="https://english.ogogoacademy.kg/logo.png" alt="" width={60} />
        </Box >
    );
};

const SocialButton = ({children, label, href,}) => {
    return (
        <chakra.button
            bg={useColorModeValue('#004946', '#004946')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.900', 'gray.900')}
            color={useColorModeValue('gray.200', 'gray.200')}
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Logo />
                <Text
                    display={{ base: 'none', sm: 'block' }}
                >© 2022 OGOGO Academy. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Telegram'} href={'https://t.me/Ogogo_English'}>
                        <FaTelegram />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'https://www.youtube.com/@ogogoacademy5746/featured'}>
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'https://www.instagram.com/ogogo_english/'}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}