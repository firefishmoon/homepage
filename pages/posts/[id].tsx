import Layout from "../../components/layout/article"
import { getAllPostIds, getPostData } from '../../lib/posts'
import Navbar from "../../components/navbar"
import { Container, Text, Divider, Link, OrderedList, UnorderedList, ListItem, Heading } from "@chakra-ui/react"
import Footer from "../../components/footer"
import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Comments from "../../components/comments"

const markdownTheme = {
    p: props => {
        const { children } = props
        return (
            <Text mt='1em' mb='1em' fontSize={16}>
                {children}
            </Text>
        )
    },
    a: props => {
        const { children } = props
        return (
            <Link textColor='blue.300'>
                {children}
            </Link>
        )
    },
    ol: props => {
        const { children } = props
        return (
            <OrderedList>
                {children}
            </OrderedList>
        )
    },
    ul: props => {
        const { children } = props
        return (
            <UnorderedList mb='3'>
                {children}
            </UnorderedList>
        )
    },
    li: props => {
        const { children } = props
        return (
            <ListItem>
                {children}
            </ListItem>
        )
    },
    code: props => {
        const { className, children } = props
        const match = /language-(\w+)/.exec(className || '')
        return (
            <SyntaxHighlighter
                showLineNumbers={true}
                style={darcula}
                language={match[1]}
            >
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
        )

    },
    h1: props => {
        const { children } = props
        return (
            <Heading fontSize='4xl' as='h1' mb='3'>
                {children}
            </Heading>
        )
    },
    h2: props => {
        const { children } = props
        return (
            <Heading fontSize='3xl' as='h2' mb='3'>
                {children}
            </Heading>
        )
    },
    h3: props => {
        const { children } = props
        return (
            <Heading fontSize='2xl' as='h3' mb='3'>
                {children}
            </Heading>
        )
    },
}

export default function Post({ postData }) {
    return (
        <Layout title={`${postData.title} - Jay`}>
            <Navbar></Navbar>
            <Container bgColor='gray.900' p={4} maxW="680">
                <Text mt={10} fontSize='4xl' fontWeight='bold' textAlign='center'>{postData.title}</Text>
                <br />
                <Divider></Divider>
                <br />
                <ReactMarkdown
                    components={ChakraUIRenderer(markdownTheme)}
                    remarkPlugins={[remarkGfm]}>
                    {postData.markdown}
                </ReactMarkdown>
                <br />
                {postData.date}
                <br />
                <br />
                <Divider />
                <Comments></Comments>
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




