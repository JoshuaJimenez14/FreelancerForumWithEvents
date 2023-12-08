const names = [
    "Dr. Slice",
    "Dr. Pressure",
    "Prof. Possibility",
    "Prof. Prism",
    "Dr. Impulse",
    "Prof. Spark",
    "Dr. Wire",
    "Prof. Goose",
    "Mr. Cleaner",
    "Mr. Style"
  ];
  
  const occupations = [
    "gardener",
    "programmer",
    "teacher",
    "gardner"
  ];
  
  const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Mr. Cleaner", price: 38, occupation: "gardener" },
    { name: "Mr. Style", price: 63, occupation: "teacher" }
  ];

  function LoadFreelancers() {
    const freelancersList = document.querySelector('#freelancersList');
    freelancersList.innerHTML = freelancers.map(freelancer => {
        return `<li>${freelancer.name} - <span class="price-highlight">$${freelancer.price}</span> - ${freelancer.occupation}</li>`;
    }).join('');
}

LoadFreelancers();
function getRandomOption(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateRandomFreelancer() {
    const name = getRandomOption(names);
    const occupation = getRandomOption(occupations);
    const price = Math.floor(Math.random() * 100) + 1; 

    return { name, occupation, price };
}

setInterval(() => {
    const newFreelancer = generateRandomFreelancer();
    freelancers.push(newFreelancer);
    LoadFreelancers();

    const averagePrice = calculateAveragePrice();
    document.getElementById('averagePrice').innerHTML = `Average starting price: $${averagePrice}`;
}, 3000);

function calculateAveragePrice() {
    const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const numOfFreelancers = freelancers.length === 0 && 1 || freelancers.length;
    return (totalPrices / numOfFreelancers).toFixed(2);
}
const addNewFreelancer = function() {
    const newFreelancer = generateRandomFreelancer();
    freelancers.push(newFreelancer);
    LoadFreelancers();

    const averagePrice = calculateAveragePrice();
    document.getElementById('averagePrice').innerHTML = `Average starting price: $${averagePrice}`;
};

document.getElementById('addFreelancerBtn').onclick = addNewFreelancer;

function LoadFreelancers() {
    const freelancersList = document.getElementById('freelancersList');
    freelancersList.innerHTML = freelancers
      .map((freelancer, index) => {
        return `<li onclick="removeFreelancer(${index})">${freelancer.name} - <span class="price-highlight">$${freelancer.price}</span> - ${freelancer.occupation}</li>`;
      })
      .join('');
  }
  
  function removeFreelancer(arr) {
    freelancers.splice(arr, 1);
    LoadFreelancers();
  }