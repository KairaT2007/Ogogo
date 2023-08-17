import ThreeTierPricing from '~/components/price'
import NivoCircle from '~/components/static'
import {
    useColorModeValue,
    Box,
    Flex
} from '@chakra-ui/react';
import Desc from '~/components/desc'
import Carousel from '~/components/carousel'
import Map from '~/components/map'
import CallToActionWithVideo from '~/components/hero'
import { Image } from '@chakra-ui/react'
import WithSpeechBubbles from '../components/testimonials';
import { useTranslation } from 'react-i18next';
import Comments from '../components/comments';

const English = () => {

    const { t, i18n } = useTranslation();


    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <Box
            bg={useColorModeValue('gray.100', 'gray.700')}
        >
            {/* <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("ru")}>RU</button>
            <div>{t("text")}</div> */}
            <Flex
                justify={'center'}
                align={'center'}
                bg={useColorModeValue('gray.100', 'gray.700')}
                mt={{ base: 40, md: 150 }}
                mb={{ base: 40, md: 210 }}
                direction={{ base: 'column', md: 'row' }}
                gap={5}
            >
                <Desc
                    zag="Develop with us"
                    desc='The "Ogo-Go" Academy is dedicated to providing top-tier education in the English language, helping students to develop their proficiency and fluency. With experienced teachers and a comprehensive curriculum, "Ogo-Go" students learn to communicate effectively and confidently in English, both in written and spoken form. Through personalized instruction and innovative teaching methods, students are able to accelerate their language development and gain the skills they need to succeed in academic and professional settings.'
                />
                <Image
                    alt={'Hero Image'}
                    fit={'cover'}
                    w={{ base: '60%', md: '40%' }}
                    borderRadius={'5%'}
                    src={
                        'https://gifscenter.com/wp-content/uploads/2017/05/animated%20british%20flag%20Gif%20Image.gif'
                    }
                />
            </Flex>
            <Carousel />
            <Flex
                direction={{ base: 'column', md: 'row-reverse' }}
                justify={'center'}
                align={'center'}
                bg={useColorModeValue('gray.100', 'gray.700')}
                my={{ base: 10, md: 120 }}
            >
                <Desc
                    zag="Develop with us"
                    desc="English is the most widely spoken language in the world, with over 1.5 billion people speaking it either as a first or second language. It is the official language in over 50 countries and is the most commonly used language in international business, science, and technology. Compared to other languages, English has the largest number of words in its vocabulary, with over 170,000 words in current use. It is also the most commonly taught language in the world, with more than 1 billion people learning English as a second language. With such widespread use and influence, proficiency in English is becoming increasingly important in today's globalized world"
                />
                <NivoCircle />
            </Flex>
            <CallToActionWithVideo />
            <ThreeTierPricing
                price1={'3.000'}
                price2={'3.500'}
                desc2={'Caworking access'}
                desc1={'Regular tests and controls'}
                desc3={'Workbook'}
            />
            <Map />
        </Box>
    )
}

export default English