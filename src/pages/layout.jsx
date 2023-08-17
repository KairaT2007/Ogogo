// @ts-nocheck
import { Box, useColorModeValue } from '@chakra-ui/react'
import Footer from '~/components/footer'
import Header from '~/components/header'
import { HelpWidget } from '~/components/HelpWidget'


export default function Layout({ children }) {
    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.700')}
        >
            <Header />
            <main>{children}</main>
            <HelpWidget />
            <Footer />
        </Box>
    )
}