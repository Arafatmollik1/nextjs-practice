"use client"
import React from 'react'
import { Radio, RadioGroup , Input, Card, CardBody, CardFooter, Image, Stack, Heading, Text,ButtonGroup, Button } from '@chakra-ui/react'

const QuizCardTemplate = ({ q_image, q_headline, q_text, q_options   }) => {
    const [value, setValue] = React.useState('value1')
  return (
    <Card maxW='sm'>
        <CardBody>
            <Image
            src={q_image}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
                <Heading size='md'>{q_headline}</Heading>
                <Text>
                    {q_text}
                </Text>
                <RadioGroup onChange={setValue} value={value}>
                    <Stack direction='column'>
                        <Radio value='value1' variant="checkbox">{q_options.option1}</Radio>
                        <Radio value='value2' >{q_options.option2}</Radio>
                        <Radio value='value3' >{q_options.option3}</Radio>
                        <Radio value='value4' >{q_options.option4}</Radio>
                    </Stack>
                </RadioGroup>
            </Stack>
        </CardBody>
        <Input className="mx-5" placeholder='Enter your email' width='300px'/>
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
                Submit
            </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
  )
}

export default QuizCardTemplate