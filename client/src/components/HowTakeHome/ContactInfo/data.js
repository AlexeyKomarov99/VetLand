export const listContactInfo = [
  {id: 1, type: 'text', name: 'name', placeholder: 'Имя', error: 'Укажите имя' },
  {id: 2, type: 'text', name: 'surname', placeholder: 'Фамилия', error: 'Укажите фамилию' },
  {id: 3, type: 'text', name: 'phone', placeholder: '+7 (___) ___-__-__', error: 'Некорректная форма телефона', maxLength: 18 },
  {id: 4, type: 'email', name: 'email', placeholder: 'Почта', error: 'Укажите почту' },
  {id: 5, type: 'text', name: 'age', placeholder: 'Возраст', error: 'Укажите возраст' },
]

export const listRegionInfo = [
  {id: 1, name: 'region', placeholder: 'Москва и Моск. обл.'},
  {id: 2, name: 'region', placeholder: 'Санкт-Петербург и Ленинградская обл.'}
]