import { describe, it, expect } from 'vitest'
import { processPackages, calculatePrice } from '../src/utils/packages.js'

const mockData = [
  { id: 1, title: 'رحلة تركيا', destination: 'اسطنبول', price: 500, category: 'سياحة', active: true, createdAt: { seconds: 100 } },
  { id: 2, title: 'فندق النهر', destination: 'بنغازي', price: 200, category: 'فنادق', active: true, createdAt: { seconds: 200 } },
  { id: 3, title: 'تأشيرة مصر', destination: 'القاهرة', price: 100, category: 'تأشيرات', active: false, createdAt: { seconds: 300 } }, 
  { id: 4, title: 'رحلة دبي', destination: 'دبي', price: 1000, category: 'سياحة', active: true, createdAt: { seconds: 400 } },
]

describe('اختبار وظائف العروض', () => {

  it('يجب أن يستبعد العروض غير النشطة (active: false)', () => {
    const result = processPackages(mockData, 'الكل', '', 'newest')
    expect(result.length).toBe(3)
    expect(result.find(p => p.title === 'تأشيرة مصر')).toBeUndefined()
  })

  it('يجب أن يفلتر حسب التصنيف (فنادق)', () => {
    const result = processPackages(mockData, 'فنادق', '', 'newest')
    expect(result.length).toBe(1)
    expect(result[0].title).toBe('فندق النهر')
  })

  it('يجب أن يبحث بالاسم (بحث عن "دبي")', () => {
    const result = processPackages(mockData, 'الكل', 'دبي', 'newest')
    expect(result.length).toBe(1)
    expect(result[0].destination).toBe('دبي')
  })

  it('يجب أن يرتب حسب السعر من الأقل للأعلى', () => {
    const result = processPackages(mockData, 'الكل', '', 'price-asc')
    expect(result[0].price).toBe(200) 
    expect(result[2].price).toBe(1000)
  })

})

describe('اختبار تحويل العملة', () => {
  it('يحسب السعر بشكل صحيح', () => {
    expect(calculatePrice(100, 5)).toBe(500)
    expect(calculatePrice(10, 1.5)).toBe(15)
  })
})