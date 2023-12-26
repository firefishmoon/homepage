import { Container, Text, Image } from "@chakra-ui/react"
import Layout from "../components/layout/article"
import Navbar from "../components/navbar"

const About = () => (
    <Layout title='About'>
        <Navbar></Navbar>
        <Container bgColor='gray.900'>
            <Image fit="cover" src="https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk_2.jpg"
                w="100%" h='300'></Image>
            <Text>Hi, I'm a software developer based in Chengdu China.</Text>
            <Text>Things I like:</Text>
            <Text>VideoGame, GameDev, AI, Math, Drawing</Text>
        </Container>
    </Layout>
)

export default About 
