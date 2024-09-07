import { extendTheme } from "@chakra-ui/react"
import 'lxgw-wenkai-webfont/style.css'

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
    fonts: {
        heading: `'LXGW WenKai', sans-serif`,
        body: `'LXGW WenKai', sans-serif`
    }
})
export default theme
