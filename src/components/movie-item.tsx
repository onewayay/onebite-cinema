import { MovieData } from '@/type';
import Link from 'next/link';
import style from './movie-itme.module.css';

export default function MoviewItem({ id, posterImgUrl }: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={posterImgUrl} />
    </Link>
  );
}
