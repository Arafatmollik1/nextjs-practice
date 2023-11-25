"use client"
import React from 'react'
import { Alert, AlertIcon, AlertTitle, AlertDescription} from '@chakra-ui/react'
export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center">
    <Alert
      status='warning'
      variant='subtle'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      height='200px'
    >
      <AlertIcon boxSize='40px' mr={0} />
      <AlertTitle mt={4} mb={1} fontSize='lg'>
        Oh no!
      </AlertTitle>
      <AlertDescription maxWidth='sm'>
        You are not supposed to be here. Please contact Arafat Mollik.
      </AlertDescription>
    </Alert>
    </main>
  )
}
