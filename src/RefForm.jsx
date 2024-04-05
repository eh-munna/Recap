import { useEffect, useRef } from 'react';

export default function RefForm() {
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const nameRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-1/4">
      <label htmlFor="name">Name</label>
      <input ref={nameRef} type="text" name="name" id="name" />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message"></textarea>
      <input type="submit" value="Submit" />
    </form>
  );
}
