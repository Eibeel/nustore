import { extendTheme } from '@chakra-ui/react'

export const defaultTheme = extendTheme({
    colors: {
        brand: {
            0: "#FFF", // white
            20: "#969696", // font_gray_light
            30: "#14181F", // bg_ft
            40: "#E54335", // alternative
            50: "#EDEDED", // border
        },
        gray: {
            800: "#323232"
        }
    },
    fonts: {
        body: "Public Sans, sans-serif",
        heading: "PT Sans, sans-serif"
    },
})
