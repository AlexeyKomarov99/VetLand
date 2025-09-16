// Поиск животных по типу
export const animalTypes = [
    {id: 1, type: 'all', name: 'Все животные'},
    {id: 2, type: 'cats', name: 'Кошки'},
    {id: 3, type: 'dogs', name: 'Собаки'},
]

// Возраст
export const ageRange = [
    {
        id: 1,  
        age: 'до 3 месяцев',
        min: 0,
        max: 3,
        unit: 'months'
    },
    {
        id: 2,  
        age: 'до 1 года',
        min: 0,
        max: 12,
        unit: 'months'
    },
    {
        id: 3,  
        age: '2-5 лет',
        min: 24,
        max: 60,
        unit: 'months'
    },
    {
        id: 4,  
        age: 'старше 5 лет',
        min: 60,
        max: null, // null означает "и больше"
        unit: 'months'
    }
]

// Статус
export const animalStatus = [
    {id: 1, type: 'healthy', name: 'Здоров'},
    {id: 2, type: 'ill', name: 'Болен'},
    {id: 3, type: 'under treatment', name: 'На лечении'},
    {id: 4, type: 'needs surgery', name: 'Требуется операция'},
    {id: 5, type: 'in rehabilitation', name: 'Реабилитация'},
]