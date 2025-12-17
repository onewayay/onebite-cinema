import fetchOneMovie from '@/lib/fetch-one-movie';
import style from './[id].module.css';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
      { params: { id: '5' } },
      { params: { id: '6' } },
      { params: { id: '7' } },
      { params: { id: '8' } },
      { params: { id: '9' } },
      { params: { id: '10' } },
      { params: { id: '11' } },
      { params: { id: '12' } },
      { params: { id: '13' } },
      { params: { id: '14' } },
      { params: { id: '15' } },
      { params: { id: '16' } },
      { params: { id: '17' } },
      { params: { id: '18' } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;

  const movie = await fetchOneMovie(Number(id));

  if (!movie) {
    return { notFound: true };
  }

  return {
    props: { movie },
  };
};

export default function Page({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) return '로딩중입니다.';

  if (!movie) return '문제가 발생했습니다! 다시 시도하세요!';

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url(${movie.posterImgUrl})` }}
      >
        <img src={movie.posterImgUrl} />
      </div>
      <div className={style.info_container}>
        <div>
          <h2>{movie.title}</h2>
          <div>
            {movie.releaseDate} / {movie.genres.join(', ')} /{movie.runtime}분
          </div>
          <div>{movie.company}</div>
        </div>
        <div>
          <div className={style.subTitle}>{movie.subTitle}</div>
          <div className={style.description}>{movie.description}</div>
        </div>
      </div>
    </div>
  );
}
