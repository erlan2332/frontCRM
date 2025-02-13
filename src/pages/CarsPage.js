import React, { Component } from 'react';
import './CarsPage.css';

class CarsPage extends Component {
  constructor(props) {
    super(props);
    // Список машин (фиктивные данные) с полями:
    // 1) "badges" – массив «ярлыков» (L7-AN12, На СВХ со стороны...)
    // 2) "name" и "vin" – основная информация
    // 3) "steps" – этапы процесса (с датой и описанием)
    // 4) "isOpen" – в открытом ли состоянии аккордеон
    this.state = {
      cars: [
        {
          id: 1,
          badges: ['L7-AN12', 'На СВХ со стороны Казахстана'],
          name: 'Lixiang L7',
          vin: '142112312341',
          isOpen: false,
          steps: [
            // Тут может быть пусто или что-то вроде:
            // { date: '12.01.2025', desc: 'Оплата в Китай (SWIFT)' }, ...
          ],
        },
        {
          id: 2,
          badges: ['SU 7-HD12', 'SU7-Едет до точки клиента'],
          name: 'SU 7 MAX',
          vin: '142112312341',
          isOpen: true, // для примера эта в развёрнутом состоянии
          steps: [
            { date: '12.01.2025', desc: 'Оплата в Китай (SWIFT)' },
            { date: '14.01.2025', desc: 'Составление контракта с китайцами' },
            { date: '15.01.2025', desc: 'Подтверждение оплаты)' },
          ],
        },
      ],
    };
  }

  // При клике на карточку будем переключать isOpen
  toggleCar = (carId) => {
    this.setState((prevState) => {
      const updatedCars = prevState.cars.map((car) => {
        if (car.id === carId) {
          return { ...car, isOpen: !car.isOpen };
        }
        return car;
      });
      return { cars: updatedCars };
    });
  };

  render() {
    const { cars } = this.state;

    return (
      <div className="cars-container">
        <h1 className="cars-title">Машины</h1>
        
        {/* Поле поиска, если нужно (пока без логики) */}
        <div className="search-box">
          <input type="text" placeholder="Поиск" />
        </div>

        {/* Список "аккордеонов" */}
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            {/* Шапка карточки */}
            <div className="car-header" onClick={() => this.toggleCar(car.id)}>
              <div className="car-badges">
                {/* Выводим ярлыки (badges) */}
                {car.badges.map((badge, index) => (
                  <span key={index} className="car-badge">
                    {badge}
                  </span>
                ))}
              </div>
              {/* Основная информация (название, VIN) */}
              <div className="car-info">
                <div className="car-name">{car.name}</div>
                <div className="car-vin">VIN:{car.vin}</div>
              </div>
              {/* Иконка стрелки (условно) */}
              <div className="car-arrow">
                {car.isOpen ? '▴' : '▾'}
              </div>
            </div>

            {/* Содержимое (steps) показываем только если isOpen=true */}
            {car.isOpen && (
              <div className="car-body">
                {car.steps.length === 0 ? (
                  <div className="empty-steps">Нет этапов</div>
                ) : (
                  car.steps.map((step, index) => (
                    <div key={index} className="car-step">
                      <span className="step-date">{step.date}</span>
                      <span className="step-desc">{step.desc}</span>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default CarsPage;
