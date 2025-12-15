import SearchableLayout from '@/components/searchable-layout';
import { ReactNode } from 'react';
import dummy from '@/mock/dummy.json';
import MoviewItem from '@/components/movie-item';
import style from './index.module.css';

export default function Home() {
  const recommendMovie = dummy.slice(0, 3);

  return (
    <div className={style.container}>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.recommend_moive}>
          {recommendMovie.map((movie) => (
            <MoviewItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.all_movie}>
          {dummy.map((movie) => (
            <MoviewItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
