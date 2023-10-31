import React, { FC } from 'react';
import './styles.css'
interface FiltererProps{
    filter:string;
    setFilter:(title:string)=>void
}
const Filterer:FC<FiltererProps> = ({ filter, setFilter }) => {
  return (
    <input
      type="text"
      placeholder="Filter by title"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default Filterer;