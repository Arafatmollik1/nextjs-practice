"use client"
import React, { useState } from 'react';
import { Alert, AlertIcon, Radio, RadioGroup, Input, Card, CardBody, CardFooter, Image, Stack, Heading, Text, ButtonGroup, Button } from '@chakra-ui/react';

const QuizCardTemplate = ({ q_image, q_headline, q_text, q_options, q_gameId }) => {
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async () => {
    setIsLoading(true);
    const response = await fetch('/api/save-quizz-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gameID: q_gameId,
        quizzAnswer: value,
        participantEmail: email,
      }),
    });

    const data = await response.json();
    console.log(data);
    setIsLoading(false);
    setStatus(response.status);
  };

  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={q_image}
          alt='Picture could not be loaded'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{q_headline}</Heading>
          <Text>
            {q_text}
          </Text>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction='column'>
              <Radio value='value1'>{q_options.option1}</Radio>
              <Radio value='value2'>{q_options.option2}</Radio>
              <Radio value='value3'>{q_options.option3}</Radio>
              <Radio value='value4'>{q_options.option4}</Radio>
            </Stack>
          </RadioGroup>
        </Stack>
      </CardBody>
      <Input className="mx-5" placeholder='আপনার ফোন নম্বর' width='300px' value={email} onChange={(e) => setEmail(e.target.value)} />
      <CardFooter className="flex flex-col">
        {status == 200  && status !== null && (
          <Alert className="my-2" status='success'>
            <AlertIcon />
            অংশগ্রহণ করার জন্য ধন্যবাদ
          </Alert>
        )}
        {status !== 200 && status !== null && (
          <Alert className="my-2" status='error'>
            <AlertIcon />
            দুঃখিত কিছু ভুল হয়েছে
          </Alert>
        )}
        {(status === null || status !== 200) && (
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue' onClick={handleSubmit} isLoading={isLoading} loadingText="Submitting">
              উত্তর পাঠান
            </Button>
          </ButtonGroup>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuizCardTemplate;
