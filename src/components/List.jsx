const people = [
  {
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  },
  {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  },
  {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  },
  {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
  },
  {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  },
];

export default function List() {
  const listItem = people.map((person) => (
    <li key={person.id}>{person.name}</li>
  ));

  return (
    <>
      <h1 className="text-3xl font-bold text-center px-4 py-3">
        List of people
      </h1>
      <ul>{listItem}</ul>
    </>
  );
}
