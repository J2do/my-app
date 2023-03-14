import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

interface FilterProps {
  filter: any;
  setFilter: any;
}

const PostFilter: React.FC<FilterProps> = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={({ e }: any) =>
          setFilter({ ...filter, query: e.target.value })
        }
        placeholder="Search..."
        type={undefined}
      />
      <MySelect
        value={filter.sort}
        onChange={({ selectedSort }: any) =>
          setFilter({ ...filter, sort: selectedSort })
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
