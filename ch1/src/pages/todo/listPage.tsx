import { useSearchParams } from 'react-router';

function ListPage() {
  const [queryParams] = useSearchParams();
  const page: string | null = queryParams.get('page');
  const size: string | null = queryParams.get('size');

  //ex) http://localhost:5173/todo/list?page=2&size=10
  return (
    <div className="bg-white w-full">
      <div className="text-4xl">
        Todo List Page {page} {size}
      </div>
    </div>
  );

  return (
    <div className="bg-white w-full">
      <div className="text-4xl">Todo List Page</div>
    </div>
  );
}

export default ListPage;
