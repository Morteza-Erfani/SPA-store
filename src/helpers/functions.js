const quantityCount = (cart, id) => {
  const product = cart.selectedItems.find((item) => item.id === id);
  if (product) {
    return product.quantity;
  } else {
    return 0;
  }
};

const getPrevUser = () => {
  const prevUser = localStorage.getItem("user");
  if (!prevUser) {
    return {
      name: "",
      email: "",
      login: false,
    };
  } else {
    const parsePrevUser = JSON.parse(prevUser)
    return {...parsePrevUser}
  }
};

export { quantityCount, getPrevUser };
