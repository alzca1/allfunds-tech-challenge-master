export const truncateText = (text: string, numCharacters: number): string => {
  if (text?.length <= numCharacters) {
    return text; // Devuelve el texto original si no supera la longitud máxima
  }
  return text.slice(0, numCharacters) + "...";
};
