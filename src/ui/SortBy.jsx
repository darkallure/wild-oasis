import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function handleChange(event) {
    searchParams.set("sortBy", event.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      value={sortBy}
      options={options}
      type={"white"}
      onChange={handleChange}
    ></Select>
  );
}

export default SortBy;