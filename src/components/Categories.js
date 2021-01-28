import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {/* map over the categories that are in the data.js file */}
      {categories.map((category, index) => {
        return (
          <button type="button" className="filter-btn btn" key={index} onClick={()=>filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
