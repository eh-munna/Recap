import { useState } from 'react';

export const useValue = (defaultValue = '') => {
  // const [value, setValue] = useState(defaultValue);

  // const handleChange = (e) => {
  //     setValue(e.target.value);
  //     console.log(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     handleChange(e.target.value);
  // };

  // return [value, handleChange, handleSubmit];

  //   const [value, setValue] = useState(defaultValue);

  //   const handleChange = (eValue) => {
  //     setValue(eValue);
  //   };
  //   return [value, handleChange];

  const [value, setValue] = useState(defaultValue);

  const handleChange = (eValue) => {
    setValue(eValue);
  };

  return { value, handleChange };
};
