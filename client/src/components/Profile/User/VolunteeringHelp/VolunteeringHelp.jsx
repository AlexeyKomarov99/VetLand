import React, {useState, useEffect, useContext} from 'react';

//===== Ресурсы =====//
import './VolunteeringHelp.scss';
import { IoIosSearch as SearchIcon } from "react-icons/io";

//===== Компоненты =====//
import Pagination from '../../../Pagination/Pagination';

//===== Контекст =====//
import {AuthContext} from '../../../../contexts/AuthContext';

const VolunteeringHelp = () => {
  
    // Данные о пользователе полученные после авторизации
    const {user} = useContext(AuthContext);
    
    // Список всех животных
    const [animalList, setAnimalList] = useState([]);

    // Состояние для поиска животного по его имени
    const [searchAnimal, setSearchAnimal] = useState('');

    // Объект ошибки при неудачной загрузке данных от сервера
    const [error, setError] = useState(null);

    // Функция загрузки данных о животных
    const loadDataAnimal = async () => {
        try {
        // const animals = await
        } catch (error) {
        console.log('Ошибка получения данных о животных с сервера');
        setError(error);
        }
    }

    // Автоматическое получение всех животных после авторизации
    useEffect(() => {
        loadDataAnimal();
    }, [user?.id]); // Зависимость только от user.id

    //=== Параметры для пагинации ===//
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (selected) => {
        setCurrentPage(selected.selected);
    };

    const handleRowsChange = (e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(0);  // Сбросить на первую страницу
    };

    
    //=== Поиск животного по его кличке ===//
    const filteredAnimals = animalList.filter(animal =>
        animal.animalName.toLowerCase().includes(searchAnimal.toLowerCase())
    )
    
    //=== Обработчик считывания клички животного с поля ввода ===//
    const handleSearchChange = (e) => {
        setSearchAnimal(e.target.value);
        setCurrentPage(0); // Сбросить на первую страницу при новом поиске
    }
    
    const displayedAnimals = filteredAnimals.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);
    const pageCount = Math.ceil(filteredAnimals.length / itemsPerPage);

  //========== == ==========//

  //===== Работа API =====//


  //========= == =========//
  
  return (
    <div className='VolunteeringHelp'>
      
      <div className="VolunteeringHelp__content">

        {/* Титул и навигация */}
        <div className="VolunteeringHelp__content-header">
          <div className="VolunteeringHelp__content-chapter">Список животных на вашем попечительстве</div>
          <span className="VolunteeringHelp__content-search-animal-group">
            <SearchIcon className='icon' />
            <input 
              type="text"
              value={searchAnimal}
              onChange={handleSearchChange}
              className="VolunteeringHelp__content-search-animal"
              placeholder='Поиск животного по кличке ...'
            />
          </span>
        </div>
        
        <div className="VolunteeringHelp__content-body">
          
        {/* Таблица с животными */}
        <table className="VolunteeringHelp__animal-care-table">
          <thead className="VolunteeringHelp__animal-care--thead">
            <tr className="VolunteeringHelp__animal-care-tr">
              <th className="VolunteeringHelp__animal-care-th">Имя питомца</th>
              <th className="VolunteeringHelp__animal-care-th">Возраст</th>
              <th className="VolunteeringHelp__animal-care-th">Пол</th>
              <th className="VolunteeringHelp__animal-care-th">Тип</th>
              <th className="VolunteeringHelp__animal-care-th">Статус</th>

            </tr>
          </thead>
          <tbody className="VolunteeringHelp__animal-care-tbody">
          {
            animalList && animalList.length !== 0 ? (
              displayedAnimals.map((animal) => (
                <tr key={animal.id} className="VolunteeringHelp__animal-care-tr">
                  <td className="VolunteeringHelp__animal-care-td">{animal.animalName ? animal.animalName : 'Не определен'}</td>
                  <td className="VolunteeringHelp__animal-care-td">{animal.age ? animal.age : 'Не определен'}</td>
                  <td className="VolunteeringHelp__animal-care-td">{animal.gender ? animal.gender : 'Не определен'}</td>
                  <td className="VolunteeringHelp__animal-care-td">{animal.animalType_id ? animal.animalType_id : 'Не определен'}</td>
                  <td className="VolunteeringHelp__animal-care-td">{animal.animalStatus_id ? animal.animalStatus_id: 'Не определен'}</td>
                </tr>
              ))
            ) : (
              <tr className="VolunteeringHelp__animal-care-tr">
                <td colSpan='5' className="VolunteeringHelp__animal-care-td">В данный момент отсутствуют животные под вашим присмотром</td>
              </tr>
            )
          }
          </tbody>
        </table>
          
        {/* Пагинация к таблице */}
        <div className="VolunteeringHelp__paginate">
          <div className="VolunteeringHelp__paginate-rows-per-page">
            <span className="VolunteeringHelp__record">
                Количество записей на странице:
            </span>
            <select className='select-paginate' onChange={handleRowsChange} value={itemsPerPage}>
                {[5, 10, 15].map(count => (
                <option key={count} value={count}>{count}</option>
                ))}
            </select>
          </div>
          {
              displayedAnimals.length === 0 ? (
                  <></>
              ) : (
                  <Pagination className="VolunteeringHelp__pagination" pageCount={pageCount} onPageChange={handlePageChange} />
              )
          }
          </div>

        </div>

      </div>
    </div>
  )
}

export default VolunteeringHelp;