import { useSearch } from "../components/serchbar";

export default () => {
  const { search, setsearch } = useSearch();

  const src = (a, b) => `https://image.tmdb.org/t/p/w500${a[b]}`;
  console.log(search.ret);
  return (
    <div className="container">
      {search.ret.map((a) => {
        <div className="card">
          <div>
            <img src={src(a, 1)} alt={src(a, 10)} />
          </div>
          <div>
            <div>{a[12] / 2}</div>
            <div>{a[10]}</div>
            <div>{a[6]}</div>
          </div>
        </div>;
      })}
    </div>
  );
};
