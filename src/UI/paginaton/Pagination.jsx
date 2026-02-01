import { getPagesArray } from "../../utils/pages";
export default function Pagination({ totalPages, page, changePage }) {
  let pageArray = getPagesArray(totalPages);
  return (
    <div className="page__wrapper">
      {pageArray.map((p) => (
        <span
          onClick={() => {
            changePage(p);
          }}
          key={p}
          className={page == p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
}
