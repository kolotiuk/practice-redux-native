import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from 'redux/users/userActions.js';

const FormList = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  const options = {
    name: setName,
    mail: setMail,
  };

  const funcToConectActionToReducer = useDispatch();
  const state = useSelector(state => {
    return state;
  });
  const handleChange = e => {
    const { name, value } = e.target;
    options[name](value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isDublicate = state.users.find(el => el.mail === mail);

    if (isDublicate) {
      return alert(`this ${isDublicate.name} is already exist`);
    }

    funcToConectActionToReducer(addUser({ name, mail }));

    setName('');
    setMail('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={mail}
          name="mail"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter your name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormList;
