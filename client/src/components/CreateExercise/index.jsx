import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import Axios from 'axios';

function CreateExercise() {
  const [user, setUser] = useState({
    username: '',
    description: '',
    duration: 0,
    date: new Date(),
  });

  function onSubmit(e) {
    e.preventDefault();
    Axios.post('/exercises/add', user).catch((err) =>
      console.log(err)
    );
    window.location = '/';
  }

  function handleOnChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleChangeDate(e) {
    setUser({ ...user, date: e });
  }

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit} method='post'>
        <FormGroup>
          <Label for='username'>Username</Label>
          <Input
            type='text'
            name='username'
            id='username'
            onChange={handleOnChange}
            value={user.username}
            placeholder='with a placeholder'
          />
        </FormGroup>
        <FormGroup>
          <Label for='description'>Description</Label>
          <Input
            type='text'
            name='description'
            id='description'
            onChange={handleOnChange}
            value={user.description}
            placeholder='with a placeholder'
          />
        </FormGroup>
        <FormGroup>
          <Label for='duration'>Duration</Label>
          <Input
            type='number'
            name='duration'
            id='username'
            onChange={handleOnChange}
            value={user.duration}
            placeholder='with a placeholder'
          />
        </FormGroup>
        <DatePicker
          selected={user.date}
          onChange={handleChangeDate}
          name='date'
        />

        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default CreateExercise;
