export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, value);
};

export const getLocalStorageItem = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const removeLocalStorageItem = (key) => {
  localStorage.removeItem(key);
};
