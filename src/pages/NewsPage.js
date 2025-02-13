import React, { Component } from 'react';
import './NewsPage.css';

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: [
        {
          id: 1,
          date: '10.01.2025',
          title: 'Новый Li7',
          status: 'Опубликован',
          type: 'Новость',
          views: 12,
        },
        {
          id: 2,
          date: '12.01.2025',
          title: 'Обновление',
          status: 'Опубликован',
          type: 'Сториз',
          views: 12,
        },
        {
          id: 3,
          date: '12.01.2025',
          title: 'Про РФ',
          status: 'Опубликован',
          type: 'Сториз',
          views: 12,
        },
      ],
      showModal: false,       
      modalType: 'Новость',    
      newTitle: '',            
      newDate: '',             
    };
  }

  
  handleOpenModal = (type) => {
    this.setState({
      showModal: true,
      modalType: type,
      newTitle: '',
      newDate: '',
    });
  };

  
  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  
  handleSave = (event) => {
    event.preventDefault();

    const { newsData, newTitle, newDate, modalType } = this.state;

    
    const newID = newsData.length + 1; 
    const newRecord = {
      id: newID,
      date: newDate || '—',
      title: newTitle || 'Без названия',
      status: 'Опубликован',
      type: modalType, 
      views: 0,
    };

    
    const updatedData = [...newsData, newRecord];

    this.setState({
      newsData: updatedData,
      showModal: false,
      newTitle: '',
      newDate: '',
    });
  };

  handleDelete = (id) => {
    const updatedData = this.state.newsData.filter((item) => item.id !== id);
    this.setState({ newsData: updatedData });
  };

  render() {
    const { newsData, showModal, modalType, newTitle, newDate } = this.state;

    return (
      <div className="news-container">
        <h1 className="news-title">Новости</h1>
        <div className="news-actions">
          <button
            className="news-button"
            onClick={() => this.handleOpenModal('Новость')}
          >
            Добавить новость
          </button>
          <button
            className="news-button"
            onClick={() => this.handleOpenModal('Сториз')}
          >
            Добавить Сториз
          </button>
        </div>
        <table className="news-table">
          <thead>
            <tr>
              <th>№</th>
              <th>Дата новости</th>
              <th>Наименование</th>
              <th>Статус</th>
              <th>Тип</th>
              <th>Setting</th>
              <th>Кол-во Просмотров</th>
            </tr>
          </thead>
          <tbody>
            {newsData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.date}</td>
                <td>{item.title}</td>
                <td>
                  <span className="status-label">{item.status}</span>
                </td>
                <td>
                  <span
                    className={
                      'type-label ' + (item.type === 'Новость' ? 'type-news' : 'type-story')
                    }
                  >
                    {item.type}
                  </span>
                </td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => this.handleDelete(item.id)}
                  >
                    Удалить
                  </button>
                </td>
                <td>{item.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Добавить: {modalType}</h2>
              <form onSubmit={this.handleSave}>
                <div className="form-group">
                  <label>Дата новости:</label>
                  <input
                    type="text"
                    name="newDate"
                    value={newDate}
                    onChange={this.handleChange}
                    placeholder="например, 12.01.2025"
                  />
                </div>
                <div className="form-group">
                  <label>Наименование:</label>
                  <input
                    type="text"
                    name="newTitle"
                    value={newTitle}
                    onChange={this.handleChange}
                    placeholder="Напишите заголовок..."
                  />
                </div>
                <div className="modal-buttons">
                  <button className="save-button" type="submit">
                    Сохранить
                  </button>
                  <button
                    className="cancel-button"
                    type="button"
                    onClick={this.handleCloseModal}
                  >
                    Отмена
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

export default NewsPage;
