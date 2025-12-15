import fetchOneMovie from '@/lib/fetch-one-movie';
import style from './[id].module.css';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;

  const movie = await fetchOneMovie(Number(id));
  return {
    props: { movie },
  };
};

export default function Page({
  movie,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
