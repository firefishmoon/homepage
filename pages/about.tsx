import { Container, Text, Image, Heading, Divider, VStack, Box, StackDivider } from "@chakra-ui/react"
import Layout from "../components/layout/article"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const About = () => (
    <Layout title='About'>
        <Navbar></Navbar>
        <Container bgColor='gray.900' paddingBottom={10}>
            <Image fit="cover" src="https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk_2.jpg"
                w="100%" h='300'></Image>
            <VStack
                marginTop={10}
                spacing={10}
                align='stretch'>
                <Box>
                    <Heading>🏠 关于本站</Heading>
                    <Divider marginTop={5} marginBottom={5}></Divider>
                    <Text>本站诞生于2023年，使用技术栈为Next.js、chakra-ui，免费托管于Vercel。本站是个人前端学习的项目，代码参考了https://github.com/craftzdog/craftzdog-homepage，感谢伟大的开源精神。</Text>
                    <Text marginTop={5}>本站也作为一个个人博客，会不定期更新一些个人的技术或者生活的感想。</Text>
                </Box>
                <Box>
                    <Heading>👨‍💻 博主是谁</Heading>
                    <Divider marginTop={5} marginBottom={5}></Divider>
                    <Text>网名“火月”，茫茫尘世间一个小小的程序员，现就职于一家外企，10多年开发经验，技术大抵擅长于C/C++/Python等，关注技术方案和代码架构，非大牛，努力学习中……</Text>
                    <Text marginTop={5}>希望未来有一天自己的被动收入能 Cover 生活必需的支出，到时想工作就工作，不想工作就出去走走。(目标还远得很)</Text>
                </Box>
                <Box>
                    <Heading>⛹ 兴趣爱好</Heading>
                    <Divider marginTop={5} marginBottom={5}></Divider>
                </Box>
            </VStack>
            <Text>Things I like:</Text>
            <Text marginBottom={10}>VideoGame, GameDev, AI, Math, Drawing</Text>
            <Footer />
        </Container>
    </Layout>
)

export default About 
