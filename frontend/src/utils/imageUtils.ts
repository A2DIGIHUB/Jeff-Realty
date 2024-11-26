export const getPublicImageUrl = (path: string) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return process.env.PUBLIC_URL + '/' + cleanPath;
};
