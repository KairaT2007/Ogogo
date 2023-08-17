import { ResponsivePie } from '@nivo/pie'
import {
    useColorModeValue,
    Box
} from '@chakra-ui/react';

const NivoCircle = () => {

    const Pdata = [
        {
            "id": "English",
            "label": "English",
            "value": 1132,
            "color": "hsl(338, 70%, 50%)"
        },
        {
            "id": "Chinese",
            "label": "Chinese",
            "value": 1117,
            "color": "hsl(338, 70%, 50%)"
        },
        {
            "id": "Hindi",
            "label": "Hindi",
            "value": 615,
            "color": "hsl(338, 70%, 50%)"
        },
        {
            "id": "Spanish",
            "label": "Spanish",
            "value": 534,
            "color": "hsl(338, 70%, 50%)"
        },
        {
            "id": "French",
            "label": "French",
            "value": 280,
            "color": "hsl(338, 70%, 50%)"
        },
        {
            "id": "Arabic",
            "label": "Arabic",
            "value": 274,
            "color": "hsl(338, 70%, 50%)"
        },
        {
            "id": "Bengal",
            "label": "Bengal",
            "value": 265,
            "color": "hsl(338, 70%, 50%)"
        },
        {
            "id": "Russian",
            "label": "Russian",
            "value": 258,
            "color": "hsl(338, 70%, 50%)"
        },
        {
            "id": "Portuguese",
            "label": "Portuguese",
            "value": 234,
            "color": "hsl(338, 70%, 50%)"
        },
        {
            "id": "Indonesian",
            "label": "Indonesian",
            "value": 991,
            "color": "hsl(224, 70%, 50%)"
        }
    ]
    const Pie = ({ data }) => {
        return (
            <Box h={450} w={{ base: '90%', md: '60%' }} bg={useColorModeValue('gray.100', 'gray.700')}>
                <ResponsivePie

                    data={data}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    startAngle={-180}
                    innerRadius={0.4}
                    padAngle={1}
                    cornerRadius={5}
                    activeOuterRadiusOffset={8}
                    borderWidth={2}
                    borderColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                0.2
                            ]
                        ]
                    }}
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsTextColor={{
                        from: 'color',
                        modifiers: [
                            [
                                'darker',
                                '1.4'
                            ]
                        ]
                    }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: 'rgba(255, 255, 255, 0.3)',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                />
            </Box>
        )
    }
    return (
        <Pie data={Pdata} />
    )

}

export default NivoCircle

