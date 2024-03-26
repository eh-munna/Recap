const userContainer = document.getElementById('userContainer');

const url = `https://jsonplaceholder.typicode.com/users`;

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => displayUser(data));

(async () => {
  const response = await fetch(url);
  const data = await response.json();
  displayUser(data);
})();

const displayUser = (users) => {
  console.log(users);
  users.forEach((user) => {
    const { email, id, name } = user;
    const div = document.createElement('div');
    div.classList.add('border1');
    div.innerHTML = `

    <ol>
      <li>name: ${name}</li>
      <li>email: ${email}</li>
    </ol>

`;

    userContainer.appendChild(div);
  });
};

displayUser();
