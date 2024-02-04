import { Box } from "@chakra-ui/react"
import Layout from "../components/layout/article"
import Head from "next/head"
import Script from "next/script"


const Click = () => (
    <>
        <Head>
            <script src="jquery-1.12.4.min.js" />
            <script src="flipclock.js" />
        </Head>
        <Layout title='clock'>
            <Box w="100%" h="100%" bg="white">
                <div className="clock"></div>
                <Script src='fc.js'></Script>
            </Box>
        </Layout >
    </>
)

export default Click 
