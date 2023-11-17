import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: '#000',
                textColor: '#D4D4D4',

                // display: flex,
                // justifyContent: center,
                // alignItems: center,
                // height: '100vh',
                // bgImage: url("https://api.cyrilstudio.top/bing/image.php")(props)
            }
        }
    },
})
export default theme
