import { MovieData } from '@/type';

export default async function fetchRandomMovies(): Promise<MovieData[]> {
  const url = `https://onebite-cinema-api-main-lilac.vercel.app/movie/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
}
