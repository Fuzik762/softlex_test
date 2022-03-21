export const getPageArray = (totalPages) => {
  let pages = []
  for(let i=0; i < totalPages; i++) {
    pages.push(i + 1)
  }
  return pages
}