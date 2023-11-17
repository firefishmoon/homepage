import { Box, Center } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Center>
            <Box opacity={0.4} fontSize="sm" textColor="white">
                &copy; {new Date().getFullYear()} Jay. All Rights Reserved.
            </Box>
        </Center>
    )
}

export default Footer
