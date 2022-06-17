import { Box } from "@chakra-ui/react"

export const BoxProfile = ({ children }) => {
    return (
        <Box
            padding={'20px 0 0 20px'}
        >
            <Box
                position="relative"
                textAlign="center"
                padding="16px"
                backgroundColor="#fff"
                borderRadius="10px"
                boxShadow=" 0 2px 8px rgb(0 0 0 / 15%)"
                marginBottom="20px"
            >
                {children}
            </Box>
        </Box>
    )
}
export const BoxAvatar = ({ children, avatar }) => {
    return (
        <Box
            backgroundImage={`url(${avatar})`}
            width="35px"
            height="35px"
            backgroundColor="#eee"
            backgroundPosition="50%"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            flex="0 0 auto"
            cursor="pointer"
            borderRadius="50%"
            border="none"
            overflow="hidden"
        >
            {
                children
            }
        </Box>
    )
}