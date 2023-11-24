"use client"
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

function Chakra({ children}) {
    return (
        <ChakraProvider>{children}</ChakraProvider>
    )
}

export default Chakra