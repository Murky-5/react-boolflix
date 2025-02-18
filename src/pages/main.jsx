import { UseSearch } from "../components/serchbar";

export default () => {
  const { search } = UseSearch();
  console.log(search);
};
