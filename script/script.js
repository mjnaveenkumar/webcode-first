let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("name-inp");
searchBtn.addEventListener("click", () => {
  let name = countryInp.value;
  let finalURL = `https://api.nationalize.io/?name=${name}`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.country);
        console.log(data.name);
         console.log(data.country_id);
     
      function webcode() {
        console.log
            ("data.country");
    }
      result.innerHTML = `
        
        <h2>${data.country}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>country:</h4>
                <span>${data.country.countr}</span>
            </div>
        </div>
       
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>country_id:</h4>
                <span>${
                  data[0].country[Object.keys(data[0].country)].name
                } - ${Object.keys(data[0].country)[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[2])
                  .toString()
                  .split(",")
                  .join(", ")}</span>
            </div>
        </div>
      `;
    })
    .catch(() => {
      if (name.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>go to console </h3>`;
      }
    });
});
