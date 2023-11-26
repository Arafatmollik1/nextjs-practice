import React from 'react'
import QuizCardTemplate from "@/components/QuizCardTemplate"

const getGameInfo = async (id) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-quizz-info?id=${id}` , { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response.json();
  }
};

export default async function page({params}) {
    const result = await getGameInfo(params.gameid);
    const info = result.result.rows;
  
    return (
      <main className="flex min-h-screen flex-col justify-center items-center">
        
        {info.map((item, index) => (
          <div key={index}>
            <QuizCardTemplate q_image={`/assets/${item.quizz_picture}`} q_headline={item.quizz_headline} q_text={item.quizz_text} q_options={item.quizz_options} q_gameId={params.gameid} />
          </div>
        ))}

      </main>
    )
}

