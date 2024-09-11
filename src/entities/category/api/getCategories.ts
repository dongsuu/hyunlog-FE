export const getCategories = async () => {
  const response = await fetch("/categories/all");
  if (!response.ok) {
    throw new Error("[Error] Fetch Categories Failed");
  }
};
