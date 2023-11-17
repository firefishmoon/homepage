import { Box, Image, Center, Divider, SimpleGrid, Link, Flex } from '@chakra-ui/react'
import Layout from '../components/layout/main'

const Home = () => (
    <Layout>
        <SimpleGrid columns={1}>
            <Box borderRadius='30' height={300} p={10}
                bgGradient="linear(to-r, #3a548fc7, #182848b2)"
                css={{ backdropFilter: 'blur(5px)' }}>
                <Center>
                    <Image
                        borderRadius="full"
                        width={100}
                        height={100}
                        src="/images/head1.jpg"
                    ></Image>
                </Center>
                <Box mt={1} textAlign="center" textColor='white' fontSize='3xl'>
                    Jay
                </Box>
                <Box textAlign="center" textColor='#888888'>
                    Mind will stay here for a moment.
                </Box>
                <Divider orientation="horizontal" />
                <SimpleGrid columns={3} spacing={1} mt={5}>
                    <Center textColor='white'><Link href='/posts'>Posts</Link></Center>
                    <Center><Divider orientation='vertical'></Divider></Center>
                    <Center textColor='white'><Link>About</Link></Center>
                </SimpleGrid>
            </Box>
            <Flex>
                <iframe frameBorder="no" border={0} marginWidth={0} marginHeight={0} width={330} height={110}
                    src="//music.163.com/outchain/player?type=0&id=8690599436&auto=1&height=90"></iframe>
            </Flex>
        </SimpleGrid>
    </Layout >
)

// export async function getStaticProps() {
//     const res = await fetch("http://www.baidu.com")
//     const result = await res.text()
//     return {
//         props: {
//             text: result
//         }
//     }
// }

export default Home
