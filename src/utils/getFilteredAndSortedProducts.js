export const getFilteredAndSortedProducts = (state) => {
  let filteredProducts = state.filters.department === 'All'
    ? state.inventory
    : state.inventory.filter(item => item.department === state.filters.department);
  
  filteredProducts = state.filters.lowStock ? [...filteredProducts].filter(({stock}) => stock <= 10) : [...filteredProducts]

  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (state.filters.sort === 'name') {
      return a.name.localeCompare(b.name);
    } else if (state.filters.sort === 'price') {
      return a.price - b.price;
    } else if (state.filters.sort === 'stock') {
      return a.stock - b.stock;
    }
    return 0; // Default case
  });

  return filteredProducts;
};