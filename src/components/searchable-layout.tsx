import { ReactNode, useEffect, useState } from 'react';
import style from './searchable-layout.module.css';
import { useRouter } from 'next/router';

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const q = router.query.q as string;

  // 검색어 상태 유지되도록
  useEffect(() => {
    setSearch(q || '');
  }, [q]);

  const [search, setSearch] = useState(''); // 검색어 상태

  // input 검색어 상태 변경 이벤트
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // 검색 버튼 클릭 이벤트
  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  // 엔터키로 검색 버튼 작동 이벤트
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          placeholder="검색어를 입력하세요..."
          value={search}
          onChange={onChangeSearch}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
