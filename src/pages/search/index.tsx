import SearchableLayout from '@/components/searchable-layout';
// import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import dummy from '@/mock/dummy.json';
import style from './index.module.css';
import MoviewItem from '@/components/movie-item';

export default function Page() {
  // const router = useRouter();
  // const { q } = router.query;

  return (
    <div className={style.container}>
      {dummy.map((movie) => (
        <MoviewItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
