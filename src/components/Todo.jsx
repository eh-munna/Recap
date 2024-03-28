export default function Todo({ task, isDone }) {
  //   const item = (
  //     <li>
  //       {task} {isDone && '✅'}
  //     </li>
  //   );

  //   const item = !isDone ? <li>{task}</li> : '';

  const item = (
    <li>
      {task} {isDone ? '✅' : null}
    </li>
  );

  return (
    <>
      <ul>{item}</ul>
    </>
  );
}
