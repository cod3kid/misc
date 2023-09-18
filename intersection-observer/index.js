const cards = document.querySelectorAll(".card");

const intersectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      // if (entry.isIntersecting) {
      //   intersectionObserver.unobserve(entry.target);
      // }
    });
  },
  {
    threshold: 1,
  }
);

cards.forEach((card) => {
  intersectionObserver.observe(card);
});

// #########

const lastCardObserver = new IntersectionObserver(
  (entries) => {
    const lastCardEntry = entries[0];
    if (!lastCardEntry.isIntersecting) return;

    addNewCards();

    lastCardObserver.unobserve(lastCardEntry.target);
    lastCardObserver.observe(document.querySelector(".card:last-child"));
  },
  {
    threshold: 1,
  }
);

const lastCard = document.querySelector(".card:last-child");
lastCardObserver.observe(lastCard);

const addNewCards = () => {
  const cardContainer = document.querySelector(".card-container");

  for (let i = 0; i <= 15; i++) {
    const newCard = document.createElement("div");
    newCard.textContent = "New Card";
    newCard.classList.add("card");
    cardContainer.append(newCard);
    intersectionObserver.observe(newCard);
  }
};
