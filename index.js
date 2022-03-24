const button = document.querySelector("#btn-new-advice");
const container = document.querySelector("#advice-container");

const fetchQuote = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      method: "GET",
      cache: "no-cache",
    })
      .then((response) => response.json())
      .then((data) => {
        return data.slip;
      });

    return response;
  } catch (error) {
    console.log(error);
  }
};

const render = async () => {
  const quote = await fetchQuote();
  const htmlTemplate = `
  <h1 id="main-title" class="card-title">
    Advice #<span id="advice-id">${quote.id}</span>
  </h1>
  <q id="quote-text" class="card-quote">${quote.advice}</q>`;

  container.innerHTML = htmlTemplate;
};

button.addEventListener("click", render);

render();
