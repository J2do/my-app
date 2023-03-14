import React from "react";
import { IFilter, IPost } from "../App";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

interface FilterProps {
  filter: IFilter;
  setFilter(filter: IFilter): void;
}

const PostFilter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(event: any) =>
          setFilter({ ...filter, query: event.target.value })
        }
        placeholder="Search..."
        type={undefined}
      />
      <MySelect
        value={filter.sortKey}
        onChange={
          (selectedSort) =>
            setFilter({ ...filter, sortKey: selectedSort as keyof IPost }) // todo: сделать, чтобы выводило тип selectedSort
        }
        defaultValue="sort"
        options={[
          { value: "title", name: "massage" },
          { value: "body", name: "tag" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
