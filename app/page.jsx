import RevealDiv from "@/components/RevealDiv";
import ShowTableForAllTours from "@/components/ShowTableForAllTours";
const getAllTourNames = async () => {
  const data = await fetch(`${process.env.VERCEL_URL}/get-all-tour-names` , { cache: 'no-store' });
  return data.json();
};
export default async function Home() {
  const result = await getAllTourNames();
  const tours = result.result.rows;

  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h3 className="h-10"> Hi, you wanna plan a tour? Add bellow name of the tour and get started.</h3>
      <RevealDiv />
      <ShowTableForAllTours tours={tours} />
    </main>
  )
}
