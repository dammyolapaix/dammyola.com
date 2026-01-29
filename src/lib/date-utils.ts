export function formatDate(dateString: string | undefined): string {
  if (!dateString) {
    return "No date";
  }

  const date = new Date(dateString);
  
  if (isNaN(date.getTime())) {
    console.warn(`Invalid date string: ${dateString}`);
    return "Invalid date";
  }

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
