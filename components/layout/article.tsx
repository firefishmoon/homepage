import Head from "next/head"
import { motion } from "framer-motion"
import { Box } from "@chakra-ui/react"

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

const Layout = ({ children, title }) => {
    const t = `${title} - Jay`
    return (
        <Box bgColor='black' height="100%">
            <motion.article
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.4, type: 'easeInOut' }}
                style={{ position: 'relative' }}
            >
                <Head>
                    <title>{t}</title>
                </Head>
                {children}
            </motion.article>
        </Box>
    )
}

export default Layout
