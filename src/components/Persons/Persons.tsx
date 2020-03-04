import React, { FC, useState } from 'react';

import {
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Divider,
  Container
} from '@material-ui/core';
import Person from './Person';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100vh',
      width: '100%',
      paddingTop: theme.spacing(10)
    }
  })
);
const Persons: FC = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    persons: [
      {
        id: 'asdad1',
        name: 'Frank',
        gender: 'male',
        age: 31
      },
      {
        id: '231asdasdf',
        name: 'Teo',
        gender: 'male',
        age: 16
      },
      {
        id: 'sadab323er',
        name: 'Luke',
        gender: 'male',
        age: 25
      }
    ]
  });
  const { persons } = state;

  const handleChangeName = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { value } = e.target;
    const updatedPersons = [...persons];
    const personIndex = updatedPersons.findIndex(p => p.id === id);
    const person = updatedPersons[personIndex];
    person.name = value;

    setState({ persons: updatedPersons });
  };

  const handleChangeAge = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const { value } = e.target;
    const updatedPersons = [...persons];
    const personIndex = updatedPersons.findIndex(p => p.id === id);
    const person = updatedPersons[personIndex];
    person.age = Number(value);

    setState({ persons: updatedPersons });
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
    const updatedPersons = [...persons];
    const personIndex = updatedPersons.findIndex(p => p.id === id);
    updatedPersons.splice(personIndex, 1);
    setState({
      persons: updatedPersons
    });
  };

  return (
    <div className={classes.root}>
      <Typography variant="h1">The Persons Handler</Typography>
      <Divider />
      <Container maxWidth="sm">
        {persons.map(person => (
          <Person
            key={person.id}
            id={person.id}
            name={person.name}
            age={person.age}
            gender={person.gender}
            handleOnChange={event => handleChangeName(event, person.id)}
            handleOnAgeChange={event => handleChangeAge(event, person.id)}
            click={event => handleDelete(event, person.id)}
          />
        ))}
      </Container>
    </div>
  );
};

export default Persons;
