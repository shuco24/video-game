export function sort<T extends object>(games: T[], key: keyof T): T[] {
  return [...games].sort((a, b) => {
    const av = a[key];
    const bv = b[key];

    if (typeof av === "number" && typeof bv === "number") {
      return bv - av;
    }

    return String(av).localeCompare(String(bv));
  });
}
