import React from 'react'
import QuizCardTemplate from "@/components/QuizCardTemplate"

const getGameInfo = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-quizz-info?id=101` , { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response.json();
  }
};

export default async function page() {
    const result = await getGameInfo();
    const info = result.result.rows;
  
    return (
      <main className="flex min-h-screen flex-col items-center  p-24">
        
        {info.map((item, index) => (
          <div key={index}>
            <QuizCardTemplate q_image={`/assets/${item.quizz_picture}`} q_headline={item.quizz_headline} q_text={item.quizz_text} q_options={item.quizz_options} />
          </div>
        ))}

      </main>
    )
}

