import Layout from "../../components/layout/article"
import { getAllPostIds, getPostData } from '../../lib/posts'
import Navbar from "../../components/navbar"
import { Container, Text, Divider } from "@chakra-ui/react"
import Footer from "../../components/footer"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import ReactMarkdown from "react-markdown"

export default function Post({ postData }) {
    return (
        <Layout title={`${postData.title} - Jay`}>
            <Navbar></Navbar>
            <Container bgColor='gray.900' p={4}>
                <Text mt={10} fontSize='2xl' fontWeight='bold' textAlign='center'>{postData.title}</Text>
                <br />
                <Divider></Divider>
                <br />
                <ReactMarkdown components={ChakraUIRenderer()}>
                    {postData.markdown}
                </ReactMarkdown>
                <br />
                {postData.date}
                <br />
                <Footer></Footer>
            </Container>
        </Layout>
    );
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };

}




