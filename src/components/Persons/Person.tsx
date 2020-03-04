import React, { FC, useState } from 'react';
import { Typography, createStyles, makeStyles, Theme } from '@material-ui/core';

interface Props {
  name: string;
  gender: string;
  age: number;
  id: string;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleOnAgeChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => void;
  click: (e: React.MouseEvent, id: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '1px solid red',
      margin: theme.spacing(5),
      padding: theme.spacing(3),
      '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.1)'
      }
    }
  })
);

const Person: FC<Props> = ({
  name,
  gender,
  age,
  id,
  handleOnChange,
  handleOnAgeChange,
  click
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root} onClick={event => click(event, id)}>
      <Typography variant="h4">{name}</Typography>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={event => handleOnChange(event, id)}
      />
      <p>{gender}</p>
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        name="age"
        max="100"
        min="1"
        value={age}
        onChange={event => handleOnAgeChange(event, id)}
      />
      <p>{age}</p>
    </div>
  );
};

export default Person;
