import React, { useEffect, useState } from "react";
import useDebounce from "../../../../hooks/debounce";

interface SearchPanelProps {
  value: string;
  setValue: Function;
  clearKpp: Function;
}

const SearchPanel = ({ value, setValue, clearKpp }: SearchPanelProps) => {
  const [textForSearch, setTextForSearch] = useState(value);
  // const debounceSearch = useDebounce<string>("", 1400);
  // useEffect(() => {
  //   setValue(debounceSearch);
  // }, [debounceSearch]);
  return (
    <div>
      <h2>Введите информацию для поиска:</h2>
      <div>
        <input
          onChange={(e) => setTextForSearch(e.target.value)}
          value={textForSearch}
        />
        <button
          onClick={() => {
            setValue(textForSearch);
            clearKpp();
          }}
        >
          Найти
        </button>
      </div>
    </div>
  );
};

export default SearchPanel;
