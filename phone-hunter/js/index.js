const phoneContainer = document.querySelector('#phoneContainer');
const searchField = document.querySelector('#searchField');

const loadPhones = async () => {
  const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
  const response = await fetch(url);
  const data = await response.json();
  displayPhones(data.data);
};

const displayPhones = (phones) => {
  phones.forEach((phone) => {
    // console.log(phone);
    const { image, phone_name } = phone;
    const div = document.createElement('div');
    // div.classList.add(
    //   'card',
    //   'w-96',
    //   'bg-base-100',
    //   'shadow-xl',
    //   'shadow-yl',
    //   'border',
    //   'border-indigo-300',
    //   'rounded-md',
    //   'p-4',
    //   'flex',
    //   'flex-col',
    //   'items-center',
    //   'justify-center'
    // );

    // div.className =
    //   'card w-96 bg-base-100 shadow-xl p-4 border-indigo-300 border flex flex-col items-center justify-center rounded-md';

    div.classList =
      'card w-96 bg-base-100 shadow-xl p-4 border-indigo-300 border flex flex-col items-center justify-center rounded-md';

    div.innerHTML = `
        <figure class="p-1 bg-white rounded-md">
            <img
              src=${image}
              alt="Shoes"
            />
        </figure>
        <div class="card-body">
                <h2 class="card-title">${phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    `;
    phoneContainer.appendChild(div);
  });
};

const handleSearch = () => {
  phoneContainer.innerHTML = '';
  const searchText = searchField.value;

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText.toLowerCase()}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.data.length > 0) {
        displayPhones(data.data);
      }
      else {
        phoneContainer.innerHTML = `<p>No results found for ${searchText}</p>`;
      }
    });
};

loadPhones();

/* 

<div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>



*/
