import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleToggle = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOptionPrice = (name, value) => {
    const optionPrice = {
      fixed: false,
      timed: false,
    };
    setForm({
      ...form,
      optionPrice: {
        ...optionPrice,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return {
    handleInputChange,
    handleToggle,
    handleOptionPrice,
    handleSubmit,
    form,
  };
};
