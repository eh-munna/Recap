import { useValue } from './hooks/useValue';

export default function HookForm() {
  // ? no hook function
  // const [value, setValue] = useState('');

  // const handleChange = (value) => {
  //   setValue(value);
  //   console.log(value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleChange(e.target.value);
  // };

  // ? hook but using array
  //   const [value, handleChange] = useValue('');

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     handleChange(e.target.value);
  //   };

  // ? hook but using object and no destructuring
  //   const formState = useValue('');
  //   console.log(formState);
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     formState.handleChange(e.target.value);
  //   };

  const { value, handleChange } = useValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange(e.target.value);
    // console.log(value);
  };

  return (
    <form className="flex flex-col w-1/4" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        // value={value}
        // onChange={handleSubmit}
        // value={formState.value}
        value={value}
        onChange={handleSubmit}
        type="text"
        name="name"
        id="name"
      />
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message"></textarea>
      <input type="submit" value="Submit" />
    </form>
  );
}
