import { ResponsiveBump } from '@nivo/bump'
import {
    useColorModeValue,
    Box
} from '@chakra-ui/react';
const NivoBump = () => {
    const Bdata = [
        {
            "id": "JavaScript",
            "data": [
                {
                    "x": 2014,
                    "y": 1
                },
                {
                    "x": 2015,
                    "y": 1
                },
                {
                    "x": 2016,
                    "y": 1
                },
                {
                    "x": 2017,
                    "y": 1
                },
                {
                    "x": 2018,
                    "y": 1
                },
                {
                    "x": 2019,
                    "y": 1
                },
                {
                    "x": 2020,
                    "y": 1
                },
                {
                    "x": 2021,
                    "y": 1
                },
                {
                    "x": 2022,
                    "y": 1
                }
            ]
        },
        {
            "id": "Python",
            "data": [
                {
                    "x": 2014,
                    "y": 4
                },
                {
                    "x": 2015,
                    "y": 3
                },
                {
                    "x": 2016,
                    "y": 3
                },
                {
                    "x": 2017,
                    "y": 3
                },
                {
                    "x": 2018,
                    "y": 3
                },
                {
                    "x": 2019,
                    "y": 2
                },
                {
                    "x": 2020,
                    "y": 2
                },
                {
                    "x": 2021,
                    "y": 2
                },
                {
                    "x": 2022,
                    "y": 2
                }
            ]
        },
        {
            "id": "Java",
            "data": [
                {
                    "x": 2014,
                    "y": 2
                },
                {
                    "x": 2015,
                    "y": 2
                },
                {
                    "x": 2016,
                    "y": 2
                },
                {
                    "x": 2017,
                    "y": 2
                },
                {
                    "x": 2018,
                    "y": 2
                },
                {
                    "x": 2019,
                    "y": 3
                },
                {
                    "x": 2020,
                    "y": 3
                },
                {
                    "x": 2021,
                    "y": 3
                },
                {
                    "x": 2022,
                    "y": 3
                }
            ]
        },
        {
            "id": "TypeScript",
            "data": [
                {
                    "x": 2014,
                    "y": 10
                },
                {
                    "x": 2015,
                    "y": 10
                },
                {
                    "x": 2016,
                    "y": 10
                },
                {
                    "x": 2017,
                    "y": 10
                },
                {
                    "x": 2018,
                    "y": 7
                },
                {
                    "x": 2019,
                    "y": 5
                },
                {
                    "x": 2020,
                    "y": 4
                },
                {
                    "x": 2021,
                    "y": 4
                },
                {
                    "x": 2022,
                    "y": 4
                }
            ]
        },
        {
            "id": "C#",
            "data": [
                {
                    "x": 2014,
                    "y": 8
                },
                {
                    "x": 2015,
                    "y": 7
                },
                {
                    "x": 2016,
                    "y": 6
                },
                {
                    "x": 2017,
                    "y": 6
                },
                {
                    "x": 2018,
                    "y": 6
                },
                {
                    "x": 2019,
                    "y": 7
                },
                {
                    "x": 2020,
                    "y": 5
                },
                {
                    "x": 2021,
                    "y": 5
                },
                {
                    "x": 2022,
                    "y": 5
                }
            ]
        },
        {
            "id": "C++",
            "data": [
                {
                    "x": 2014,
                    "y": 6
                },
                {
                    "x": 2015,
                    "y": 6
                },
                {
                    "x": 2016,
                    "y": 5
                },
                {
                    "x": 2017,
                    "y": 5
                },
                {
                    "x": 2018,
                    "y": 5
                },
                {
                    "x": 2019,
                    "y": 6
                },
                {
                    "x": 2020,
                    "y": 7
                },
                {
                    "x": 2021,
                    "y": 7
                },
                {
                    "x": 2022,
                    "y": 6
                }
            ]
        },
        {
            "id": "PHP",
            "data": [
                {
                    "x": 2014,
                    "y": 3
                },
                {
                    "x": 2015,
                    "y": 4
                },
                {
                    "x": 2016,
                    "y": 4
                },
                {
                    "x": 2017,
                    "y": 4
                },
                {
                    "x": 2018,
                    "y": 4
                },
                {
                    "x": 2019,
                    "y": 4
                },
                {
                    "x": 2020,
                    "y": 6
                },
                {
                    "x": 2021,
                    "y": 6
                },
                {
                    "x": 2022,
                    "y": 7
                }
            ]
        },
        {
            "id": "Shell",
            "data": [
                {
                    "x": 2014,
                    "y": 9
                },
                {
                    "x": 2015,
                    "y": 9
                },
                {
                    "x": 2016,
                    "y": 9
                },
                {
                    "x": 2017,
                    "y": 8
                },
                {
                    "x": 2018,
                    "y": 9
                },
                {
                    "x": 2019,
                    "y": 9
                },
                {
                    "x": 2020,
                    "y": 9
                },
                {
                    "x": 2021,
                    "y": 8
                },
                {
                    "x": 2022,
                    "y": 8
                }
            ]
        },
        {
            "id": "C",
            "data": [
                {
                    "x": 2014,
                    "y": 7
                },
                {
                    "x": 2015,
                    "y": 8
                },
                {
                    "x": 2016,
                    "y": 8
                },
                {
                    "x": 2017,
                    "y": 7
                },
                {
                    "x": 2018,
                    "y": 8
                },
                {
                    "x": 2019,
                    "y": 8
                },
                {
                    "x": 2020,
                    "y": 8
                },
                {
                    "x": 2021,
                    "y": 9
                },
                {
                    "x": 2022,
                    "y": 9
                }
            ]
        },
        {
            "id": "Ruby",
            "data": [
                {
                    "x": 2014,
                    "y": 5
                },
                {
                    "x": 2015,
                    "y": 5
                },
                {
                    "x": 2016,
                    "y": 7
                },
                {
                    "x": 2017,
                    "y": 9
                },
                {
                    "x": 2018,
                    "y": 10
                },
                {
                    "x": 2019,
                    "y": 10
                },
                {
                    "x": 2020,
                    "y": 10
                },
                {
                    "x": 2021,
                    "y": 10
                },
                {
                    "x": 2022,
                    "y": 10
                }
            ]
        },
    ]
    const Bump = ({ data }) => {
        return (
            <Box
                h={{ base: 0, md: 450 }}
                w={{ base: '100%', md: '60%' }}
                bg={useColorModeValue('gray.100', 'gray.700')}

            >
                <ResponsiveBump
                    data={data}
                    colors={{ scheme: 'spectral' }}
                    lineWidth={3}
                    activeLineWidth={6}
                    inactiveLineWidth={3}
                    inactiveOpacity={0.15}
                    pointSize={10}
                    activePointSize={16}
                    inactivePointSize={0}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={1}
                    activePointBorderWidth={2}
                    pointBorderColor={{ from: 'serie.color' }}
                    margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
                    axisRight={null}
                />
            </Box>
        )
    }
    return (
        <Bump data={Bdata} />
    )
}


export default NivoBump
