import {
    Flex,
    Text
} from '@chakra-ui/react'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400',
})

export default function Desc({ desc, zag }) {
    return (
        <Flex
            justify={'center'}
            direction={'column'}
            textAlign={'center'}
            w={{ base: '90%', md: '50%' }}
            gap={3}
        >
            <Text
                className={poppins.className}
                fontSize={{ base: '25px', md: '30px' }}
            >
                {zag}
            </Text>
            <Text
                px={{ '2xl': '100px', md: '50px' }}
                className={poppins.className}
                fontSize={{ '2xl': '18px', md: '14px' }}
            >
                {desc}
            </Text>
        </Flex>
    )
}