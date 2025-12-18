import SearchableLayout from '@/components/searchable-layout';
import { ReactNode, useEffect, useState } from 'react';
import style from './index.module.css';
import MoviewItem from '@/components/movie-item';
import fetchMovies from '@/lib/fetch-movies';
import { useRouter } from 'next/router';
import { MovieData } from '@/type';
import Head from 'next/head';

export default function Page() {
  const [movies, setMovies] = useState<MovieData[]>([]);

  const router = useRouter();
  const q = router.query.q;

  const getSearchResult = async () => {
    const data = await fetchMovies(q as string);
    setMovies(data);
  };

  useEffect(() => {
    if (q) {
      getSearchResult();
    }
  }, [q]);

  return (
    <>
      <Head>
        <title>한입 씨네마 - 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입 씨네마 - 검색결과" />
        <meta
          property="og:description"
          content="한입 씨네마에 등록된 영화들을 만나보세요"
        />
      </Head>
      <div className={style.container}>
        {movies.map((movie) => (
          <MoviewItem key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
