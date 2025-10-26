export const cleanName = (name: string): string => {
  if (!name) return "";

  const text = document.createElement("textarea");
  text.innerHTML = name;
  const decoded = text.value;

  const index = decoded.indexOf(":");
  if (index !== -1) {
    return decoded.slice(index + 1).trim();
  }

  return decoded.trim();
};
