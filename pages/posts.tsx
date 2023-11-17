import { GridItem } from "../components/grid-item"
import Layout from "../components/layout/article"
import Navbar from "../components/navbar"
import Section from "../components/section"
import Footer from "../components/footer"
import { chakra, Center, Container, Heading, Image, SimpleGrid } from "@chakra-ui/react"
import { Paginate } from "react-paginate-chakra-ui"
import * as React from "react"
import { getSortedPostsData } from "../lib/posts"

const textColor = '#D4D4D4'
const pageSize = 10


const Posts = ({ allPostsData }) => {
    const [page, setPage] = React.useState(0)
    const handlePageClick = (p: number) => setPage(p)
    let endIdx = (page + 1) * pageSize
    if (endIdx >= allPostsData.length)
        endIdx = allPostsData.length
    const displayedPostsData = allPostsData.slice(page * pageSize, endIdx)
    return (
        <Layout title='Posts' >
            <Navbar></Navbar>
            <Container bgColor='gray.900' p={0}>
                <Image fit="cover" src="https://www.notion.so/images/page-cover/nasa_robert_stewart_spacewalk_2.jpg"
                    w="100%" h='300'></Image>
                <Heading as="h3" fontSize={20} m={4} textColor={textColor} >
                    Posts
                </Heading>
                <Section delay={0.1}>
                    <SimpleGrid columns={[1, 1, 1]} gap={6} m={4}>
                        {displayedPostsData.map(({ id, date, title }) => (
                            <GridItem
                                title={title}
                                date={date}
                                href={`/posts/${id}`}
                            ></GridItem>
                        ))}
                    </SimpleGrid>
                </Section>
                <Center>
                    <Paginate
                        page={page}
                        count={allPostsData.length}
                        pageSize={pageSize}
                        onPageChange={handlePageClick}
                        textColor={textColor}
                        margin={2}
                        colorScheme='red'
                    />
                </Center>
                <Footer />
            </Container>
        </Layout >
    )
}

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}
export default Posts
