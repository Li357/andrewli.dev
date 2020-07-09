export function getPathWithoutPrefix(filePath: string) {
  // returns path without posts/ prefix
  return filePath.slice(filePath.indexOf('/') + 1);
}

export function getBlogPathFromFile(filePath: string) {
  const fileName = getPathWithoutPrefix(filePath);
  const slug = fileName.slice(0, -3);
  return `/blog/${slug}`;
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
