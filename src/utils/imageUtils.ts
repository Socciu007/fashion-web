export const getImageUrl = (imagePath: string) => {
  // Nếu là URL đầy đủ (http/https), giữ nguyên
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  // Nếu không, thêm prefix /assets/
  return `${imagePath.replace(/^\//, '')}`;
}; 