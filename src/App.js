import React, { useState, useEffect } from 'react'
import List from './List';
import Alert from './Alert';



function App() {
  const getItemLocally = () => {
    const getItems = localStorage.getItem('list');
    if (getItems) return JSON.parse(getItems);
    return [];
  }
  const [name, setName] = useState('');
  const [list, setList] = useState(getItemLocally());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false, msg: '', type: ''
  });

  const EmptyList = () => {
    if (list.length === 0) {
      return <p>Empty Array</p>
    }
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setAlert({ show: true, msg: 'Please enter value', type: 'danger' })
    } //display error
    else if (name && isEditing) {
      setList(list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name }
        }
        return item;
      }));
      setName('');
      setIsEditing(false);
      setEditId(null);
      setAlert({ show: true, type: 'success', msg: 'Value Changed' });
    } // deal with edit
    else {
      setAlert({ show: true, msg: 'Item Added', type: 'success' });
      const newItem = {
        id: new Date().getTime().toString(),
        title: name
      }
      setList([...list, newItem]);
      setName('');
    }
  }

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  }

  const editItem = (id) => {
    const returnItem = list.find((el) => el.id === id);
    setName(returnItem.title);
    setEditId(returnItem.id);
    setIsEditing(true);
  }

  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={setAlert} list={list} />}
      <h3>grocery bud</h3>
      {EmptyList()}
      <div className='form-control'>
        <input
          type='text'
          className='grocery' placeholder='eg: eggs!'
          value={name}
          onChange={(e) => setName(e.target.value)} />
        <button type='submit' className='submit-btn'>
          {isEditing ? 'edit' : 'submit'}
        </button>
      </div>
    </form>

    {list.length > 0 && (
      <div className='grocery-container'>
        <List items={list} removeItem={removeItem} editItem={editItem} />
        <button className='clear-btn' onClick={() => {
          setList([]);
          setAlert({ msg: 'Items Cleared', show: true, type: 'danger' });
        }}>Clear Items</button>
      </div>
    )}

  </section>
}

export default App;
