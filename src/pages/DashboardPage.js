import React, { Component } from 'react';
import './DashboardPage.css';

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logisticsCarsData: [
        { number: 34, label: 'Машин в пути' },
        { number: 12, label: 'Составление договора' },
        { number: 52, label: 'Договор с китайской стороной' },
        { number: 22, label: 'Оплата в Китай (SWIFT)' },
        { number: 19, label: 'Составление контракта с китайцами' },
        { number: 0,  label: 'Подтверждение оплаты' },
        { number: 23, label: 'Подготовка автомобиля' },
        { number: 8,  label: 'Подготовка экспортных документов' },
        { number: 11, label: 'Погрузка на трал' },
        { number: 52, label: 'Отправка из Китая в Казахстан' },
        { number: 12, label: 'Принятие в СВХ в Казахстане' },
        { number: 55, label: 'Подготовка транзитных документов' },
        { number: 1,  label: 'Выезд из СВХ' },
        { number: 9,  label: 'Доставка до клиента' },
        { number: 9,  label: 'Принятие автомобиля клиентом' },
      ],
      logisticsUsersData: [
        { number: 12,  label: 'Активных пользователей' },
        { number: 265, label: 'Ждут одобрения' },
        { number: 12,  label: 'Клиентов с VIN' },
      ],
    };
  }

  render() {
    const { logisticsCarsData, logisticsUsersData } = this.state;

    return (
      <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
        <h2 className="section-title">Логистика машин</h2>
        <div className="cards-grid">
          {logisticsCarsData.map((item, index) => (
            <div key={index} className="card">
              <div className="card-number">{item.number}</div>
              <div className="card-label">{item.label}</div>
            </div>
          ))}
        </div>
        <h2 className="section-title">Логистика машин</h2>
        <div className="cards-grid">
          {logisticsUsersData.map((item, index) => (
            <div key={index} className="card">
              <div className="card-number">{item.number}</div>
              <div className="card-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DashboardPage;
