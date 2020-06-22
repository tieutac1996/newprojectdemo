import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';

function ExercisesList() {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    axios
      .get('/exercises')
      .then((res) => setExercises(res.data));
  }, []);

  function handleDelete(id) {
    axios
      .delete('/exercises/' + id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    setExercises(exercises.filter((filter) => filter._id !== id));
  }

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Description</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((map, i) => (
            <tr key={i}>
              <th scope='row'>{i + 1}</th>
              <td>{map.username}</td>
              <td>{map.description}</td>
              <td>
                <Button onClick={() => handleDelete(map._id)} color='danger'>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ExercisesList;
