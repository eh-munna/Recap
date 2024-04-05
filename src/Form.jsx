export default function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = {
      name,
      email,
    };
    console.log(user);
  };

  return (
    <form className="flex flex-col w-1/4" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message"></textarea>
      <input type="submit" value="Submit" />
    </form>
  );
}
