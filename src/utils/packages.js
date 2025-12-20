export function processPackages(allPackages, filterType, searchText, sortOption) {
  let result = [...allPackages]

  result = result.filter(p => p.active !== false)

  if (filterType && filterType !== 'الكل') {
    result = result.filter(p => p.category === filterType)
  }

  if (searchText) {
    const text = searchText.toLowerCase().trim()
    result = result.filter(p => 
      p.title.toLowerCase().includes(text) || 
      p.destination.toLowerCase().includes(text)
    )
  }

  result.sort((a, b) => {
    if (sortOption === 'price-asc') {
      return a.price - b.price 
    } 
    else if (sortOption === 'price-desc') {
      return b.price - a.price 
    }
    return (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)
  })

  return result
}

export function calculatePrice(price, rate) {
  if (!price || !rate) return 0
  return Number((price * rate).toFixed(2))
}