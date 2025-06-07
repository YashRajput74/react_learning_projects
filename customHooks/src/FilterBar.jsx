import React from "react";

const FilterBar = React.memo(({ onFilter }) => {
    console.log('FilterBar rendered');
    return (
        <>
            <button onClick={() => onFilter('all')}>Show All</button>
            <button onClick={() => onFilter('general')}>Show General</button>
            <button onClick={() => onFilter('important')}>Show Important</button>
        </>
    );
});

export default FilterBar;