export const localStorageGetItem = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
};
export const localStorageRemoveItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {}
};
export const localStorageSetItem = (key: string, value: string) => {
  try {
    return localStorage.setItem(key, value);
  } catch (error) {}
};
