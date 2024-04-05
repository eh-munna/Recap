import { useState } from 'react';

export default function ControlledForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };
  console.log(form);

  return (
    <form className="flex flex-col w-1/4">
      <label htmlFor="name">Name</label>
      <input
        onChange={handleSubmit}
        value={form.name}
        type="text"
        name="name"
        id="name"
      />
      <label htmlFor="email">Email</label>
      <input
        onChange={handleSubmit}
        value={form.email}
        type="text"
        name="email"
        id="email"
      />
      <label htmlFor="message">Message</label>
      <textarea
        onChange={handleSubmit}
        value={form.message}
        name="message"
        id="message"
      ></textarea>
      <input type="submit" value="Submit" />
    </form>
  );
}
