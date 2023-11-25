"use client"
import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
const config = {
    initialColorMode: 'system',
    useSystemColorMode: true,
}
  
const theme = extendTheme({ config })

function Chakra({ children}) {
    return (
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
    )
}

export default Chakra