import React from 'react'
import ReactSlick from './components/ReactSlick';
import Swiper from './components/Swiper';
import Tabs from './components/Tabs';
import Modal from './components/Modal'
import Form from './components/Form';
import UserList from './components/UserList';

const App = () => {
  return (
    <div>
      <ReactSlick />
      <Swiper />
      <Tabs />
      <Modal />
      <Form />
      <br />
      <UserList/>
    </div>
  )
}

export default App