'use client';

import React, { useMemo, useState } from 'react';
import useUsers from '../../hooks/useUsers';
import Search from '../../components/Search';
import Pagination from '../../components/Pagination';
import UserList from '../../components/UserList';
import useI18n from "../../hooks/useI18n";


export default function LangPage({ params }) {
  const unwrappedParams = React.use(params);
  const t = useI18n(unwrappedParams.lang)


  // custom hook handles fetching and states
  const { users, loading, error, refetch } = useUsers();

  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const perPage = 5;

  // filtered results
  const filtered = useMemo(() => {
    if (!users) return [];
    const q = query.trim().toLowerCase();
    if (!q) return users;
    return users.filter(u => {
      return u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
    });
  }, [users, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const currentPage = Math.min(page, totalPages);

  const pageItems = filtered.slice((currentPage - 1) * perPage, currentPage * perPage);

  // reset to page 1
  React.useEffect(() => setPage(1), [query]);

  return (
    <div>
      <title>{t.title}</title>
      <div className="header">
        <h1>{t.title}</h1>
      </div>

      <div className="card">
        <Search
          value={query}
          placeholder={t.searchPlaceholder}
          onChange={(v) => setQuery(v)}
        />

        <div style={{ marginTop: 12 }}>
          {loading && (
            <div className="small-muted loader-flex">
              <span className="spinner" /> <span>{t.loading}</span>
            </div>
          )}

          {error && (
            <div style={{ marginTop: 12 }}>
              <div className="small-muted">Error: {error.message}</div>
              <div style={{ marginTop: 8 }}>
                <button className="btn" onClick={refetch}>{t.retry}</button>
              </div>
            </div>
          )}

          {!loading && !error && (
            <>
              <UserList users={pageItems} noUser={t.noUser}/>
              <Pagination
                page={currentPage}
                totalPages={totalPages}
                onPageChange={setPage}
                prevLabel={t.previous}
                nextLabel={t.next}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
