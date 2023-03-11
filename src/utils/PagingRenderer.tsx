import { map, round, toString } from "lodash-es";

type Props = {
  recordsPerPage: number;
  page: number;
  totalRecords: number;
  onPageChange: Function;
};

function PagingRenderer(props: Props) {
  const { recordsPerPage, page, totalRecords, onPageChange } = props;
  const paging = { recordsPerPage, page, totalRecords };
  const currentPage = toString(page);
  const totalPages = round(totalRecords / recordsPerPage) + 1;
  let pages: string[] = [];
  for (let i = 1; i < totalPages; i++) {
    pages.push(toString(i));
  }

  return (
    <div style={{ display: "flex" }}>
      {map(pages, (page) => (
        <button
          key={page}
          onClick={() => {
            paging.page = Number(page);
            onPageChange(paging);
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default PagingRenderer;
