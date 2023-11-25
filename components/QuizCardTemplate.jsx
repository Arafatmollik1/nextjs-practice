"use client"
import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider,ButtonGroup, Button, Checkbox, CheckboxGroup } from '@chakra-ui/react'

const QuizCardTemplate = ({ q_image, q_headline, q_text, q_options   }) => {
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
            <CheckboxGroup colorScheme='green'>
                <Stack direction={['column']}>
                    <Checkbox value='value1'>{q_options.option1}</Checkbox>
                    <Checkbox value='value2'>{q_options.option2}</Checkbox>
                    <Checkbox value='value3'>{q_options.option3}</Checkbox>
                    <Checkbox value='value4'>{q_options.option4}</Checkbox>
                </Stack>
            </CheckboxGroup>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
                Submit
            </Button>
            <Button variant='ghost' colorScheme='blue'>
                Cancel
            </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
  )
}

export default QuizCardTemplate