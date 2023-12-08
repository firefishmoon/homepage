import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, imgUrl }) => (
    <Box as="main" display="flex" justifyContent="center" alignItems="center"
        height="100vh" bgImg={imgUrl} bgRepeat='round'>
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            style={{ position: 'relative' }}
        >
            {children}
        </motion.article>
        <Head>
            <meta name="og:title" content="Jay - Homepage" />
            <title>Jay - Homepage</title>
        </Head>
    </Box>
)


export default Layout
