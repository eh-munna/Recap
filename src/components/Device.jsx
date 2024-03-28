import List from './List';
import Todo from './Todo';

export default function Device() {
  return (
    <div className="mx-auto border border-indigo-300 rounded-lg w-96 max-h-screen">
      <div className="border-b border-indigo-300 rounded-b-xl p-2 w-1/3 mx-auto flex justify-center items-center"></div>
      <div className="flex flex-col p-4">
        <h1 className="text-3xl font-bold text-center px-4 py-3">Todo List</h1>
        <Todo task={`Clean the room`} isDone={true} />
        <Todo task={`Shopping`} isDone={false} />
        <Todo task={`Cook 2 items`} isDone={false} />
        <Todo task={`Call the chef`} isDone={true} />
      </div>
      <div className="mt-6 p-4">
        <List />
      </div>
    </div>
  );
}
