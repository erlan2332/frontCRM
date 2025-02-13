import React, { Component } from 'react';
import './LogisticsPage.css';

class LogisticsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      clients: [
        {
          id: 12,
          code: 'ADS',
          fio: 'Айдана',
          contact: '+996554222045',
          status: 'Нулевка',
          machines: [
            'L7-AN12',
            'На СВХ со стороны Казахстана',
            'SU 7-HD12',
            'ZEEKR 001-AX12',
            'ZEEKR 001-Едет до точки клиента',
          ],
        },
        {
          id: 13,
          code: 'VFS',
          fio: 'Акылай',
          contact: '+996558611100',
          status: 'Клиент',
          machines: ['ZEEKR 001-AX12', 'ZEEKR 001-Едет до точки клиента'],
        },
        {
          id: 6,
          code: 'SFSD',
          fio: 'Акылай',
          contact: '+996558611100',
          status: 'Оптовик',
          machines: ['ZEEKR 001-AX12', 'ZEEKR 001-Едет до точки клиента'],
        },
      ],


      showAddClientModal: false,
      showChangeStatusModal: false,
      showEditModal: false, 

    
      searchValue: '',
      newClientFio: '',
      newClientCode: '',
      newClientContact: '',
      newClientStatus: '',
      newClientMachine: '',

      selectedMachine: '',
      newStatus: '',

    
      editClientId: null, 
      editFio: '',
      editCode: '',
      editContact: '',
      editStatus: '',
    };
  }

  handleSearchChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };

  handleOpenAddClientModal = () => {
    this.setState({ showAddClientModal: true });
  };
  handleCloseAddClientModal = () => {
    this.setState({ showAddClientModal: false });
  };

  handleChangeField = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSaveNewClient = (e) => {
    e.preventDefault();
    const {
      clients,
      newClientFio,
      newClientCode,
      newClientContact,
      newClientStatus,
      newClientMachine,
    } = this.state;

    const newId = clients.length > 0 ? Math.max(...clients.map((c) => c.id)) + 1 : 1;
    const newClient = {
      id: newId,
      fio: newClientFio || 'Без имени',
      code: newClientCode || 'XXX',
      contact: newClientContact || 'Не указан',
      status: newClientStatus || 'Нулевка',
      machines: newClientMachine ? [newClientMachine] : [],
    };

    this.setState({
      clients: [...clients, newClient],
      showAddClientModal: false,
      newClientFio: '',
      newClientCode: '',
      newClientContact: '',
      newClientStatus: '',
      newClientMachine: '',
    });
  };


  handleOpenChangeStatusModal = () => {
    this.setState({ showChangeStatusModal: true });
  };
  handleCloseChangeStatusModal = () => {
    this.setState({ showChangeStatusModal: false });
  };

  handleSaveChangeStatus = (e) => {
    e.preventDefault();
    const { selectedMachine, newStatus } = this.state;
    alert(
      `Изменяем статус для машины "${selectedMachine}" на "${newStatus}". (логика обновления тут)`
    );
    this.setState({
      showChangeStatusModal: false,
      selectedMachine: '',
      newStatus: '',
    });
  };

  handleOpenEditModal = (client) => {
    
    this.setState({
      showEditModal: true,
      editClientId: client.id,
      editFio: client.fio,
      editCode: client.code,
      editContact: client.contact,
      editStatus: client.status,
    });
  };

  handleCloseEditModal = () => {
    this.setState({ showEditModal: false });
  };

  handleSaveEditClient = (e) => {
    e.preventDefault();
    const { clients, editClientId, editFio, editCode, editContact, editStatus } = this.state;


    const updated = clients.map((c) => {
      if (c.id === editClientId) {
        return {
          ...c,
          fio: editFio,
          code: editCode,
          contact: editContact,
          status: editStatus,
        };
      }
      return c;
    });

    this.setState({
      clients: updated,
      showEditModal: false,
      editClientId: null,
      editFio: '',
      editCode: '',
      editContact: '',
      editStatus: '',
    });
  };

  render() {
    const {
      clients,
      searchValue,

      showAddClientModal,
      showChangeStatusModal,
      showEditModal,

      newClientFio,
      newClientCode,
      newClientContact,
      newClientStatus,
      newClientMachine,

      selectedMachine,
      newStatus,

      editFio,
      editCode,
      editContact,
      editStatus,
    } = this.state;

    return (
      <div className="logistics-container">
        <h1 className="page-title">Логистика</h1>

        <div className="top-controls">
          <input
            type="text"
            placeholder="Поиск"
            value={searchValue}
            onChange={this.handleSearchChange}
            className="search-input"
          />
          <button className="btn-action" onClick={this.handleOpenAddClientModal}>
            Добавить нового клиента
          </button>
          <button className="btn-action" onClick={this.handleOpenChangeStatusModal}>
            Изменить статус
          </button>
        </div>

        {/* Таблица */}
        <table className="logistics-table">
          <thead>
            <tr>
              <th>№</th>
              <th>Код клиента</th>
              <th>ФИО</th>
              <th>Контакт</th>
              <th>
                Статус <span>⇅</span>
              </th>
              <th>Логистика</th>
              <th>Машины</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.code}</td>
                <td>{item.fio}</td>
                <td>{item.contact}</td>
                <td>
                  <span className={`status-badge ${item.status}`}>{item.status}</span>
                </td>

                <td>
                  <button
                    className="btn-logistics-active"
                    onClick={() => this.handleOpenEditModal(item)}
                  >
                    Изменить
                  </button>
                </td>

                <td>
                  {item.machines.map((m, i) => (
                    <span key={i} className="machine-badge">
                      {m}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showAddClientModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Добавление клиента и машины</h2>
              <form onSubmit={this.handleSaveNewClient} className="modal-form">
                <div className="modal-row">
                  <div className="form-group">
                    <label>ФИО клиента</label>
                    <input
                      type="text"
                      name="newClientFio"
                      value={newClientFio}
                      onChange={this.handleChangeField}
                      placeholder="Введите имя"
                    />
                  </div>
                  <div className="form-group">
                    <label>Номер</label>
                    <input
                      type="text"
                      name="newClientContact"
                      value={newClientContact}
                      onChange={this.handleChangeField}
                      placeholder="Введите номер"
                    />
                  </div>
                </div>

                <div className="modal-row">
                  <div className="form-group">
                    <label>Регион (код клиента)</label>
                    <input
                      type="text"
                      name="newClientCode"
                      value={newClientCode}
                      onChange={this.handleChangeField}
                      placeholder="Введите регион / код"
                    />
                  </div>
                  <div className="form-group">
                    <label>Статус клиента</label>
                    <select
                      name="newClientStatus"
                      value={newClientStatus}
                      onChange={this.handleChangeField}
                    >
                      <option value="">Выбрать</option>
                      <option value="Нулевка">Нулевка</option>
                      <option value="Клиент">Клиент</option>
                      <option value="Оптовик">Оптовик</option>
                    </select>
                  </div>
                </div>

                <div className="modal-row">
                  <div className="form-group">
                    <label>Машина (одна)</label>
                    <input
                      type="text"
                      name="newClientMachine"
                      value={newClientMachine}
                      onChange={this.handleChangeField}
                      placeholder="Введите модель"
                    />
                  </div>
                </div>

                <div className="modal-buttons">
                  <button type="submit" className="save-button">
                    Сохранить
                  </button>
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={this.handleCloseAddClientModal}
                  >
                    Отменить
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showChangeStatusModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Изменить статус логистики</h2>
              <form onSubmit={this.handleSaveChangeStatus} className="modal-form">
                <div className="modal-row">
                  <div className="form-group">
                    <label>Машина</label>
                    <input
                      type="text"
                      name="selectedMachine"
                      value={selectedMachine}
                      onChange={this.handleChangeField}
                      placeholder="Lixiang L7 - AN1"
                    />
                  </div>
                  <div className="form-group">
                    <label>Статус</label>
                    <input
                      type="text"
                      name="newStatus"
                      value={newStatus}
                      onChange={this.handleChangeField}
                      placeholder="На СВХ со стороны Казахстана"
                    />
                  </div>
                </div>

                <div className="modal-row">
                  <div className="form-group">
                    <label>Задержка</label>
                    <select>
                      <option>Нет</option>
                      <option>1 день</option>
                      <option>Неделя</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Комментарий</label>
                    <input type="text" placeholder="..." />
                  </div>
                </div>

                <div className="modal-buttons">
                  <button type="submit" className="save-button">
                    Сохранить
                  </button>
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={this.handleCloseChangeStatusModal}
                  >
                    Отменить
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {showEditModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Редактировать клиента</h2>
              <form onSubmit={this.handleSaveEditClient} className="modal-form">
                <div className="modal-row">
                  <div className="form-group">
                    <label>ФИО</label>
                    <input
                      type="text"
                      name="editFio"
                      value={editFio}
                      onChange={this.handleChangeField}
                    />
                  </div>
                  <div className="form-group">
                    <label>Код клиента</label>
                    <input
                      type="text"
                      name="editCode"
                      value={editCode}
                      onChange={this.handleChangeField}
                    />
                  </div>
                </div>

                <div className="modal-row">
                  <div className="form-group">
                    <label>Контакт</label>
                    <input
                      type="text"
                      name="editContact"
                      value={editContact}
                      onChange={this.handleChangeField}
                    />
                  </div>
                  <div className="form-group">
                    <label>Статус</label>
                    <select
                      name="editStatus"
                      value={editStatus}
                      onChange={this.handleChangeField}
                    >
                      <option value="Нулевка">Нулевка</option>
                      <option value="Клиент">Клиент</option>
                      <option value="Оптовик">Оптовик</option>
                    </select>
                  </div>
                </div>

                <div className="modal-buttons">
                  <button type="submit" className="save-button">
                    Сохранить
                  </button>
                  <button
                    type="button"
                    className="cancel-button"
                    onClick={this.handleCloseEditModal}
                  >
                    Отменить
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LogisticsPage;
