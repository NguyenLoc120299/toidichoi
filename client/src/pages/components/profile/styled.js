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