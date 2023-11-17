import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="sm" textColor="white">
            &copy; {new Date().getFullYear()} Jay. All Rights Reserved.
        </Box>
    )
}

export default Footer
