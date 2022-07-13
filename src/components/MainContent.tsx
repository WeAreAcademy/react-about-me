import { capitalise } from "../utils/capitalise";

function MainContent(): JSX.Element {
  const location = {
    city: "London",
    country: "United Kingdom",
  };

  const numOne = 3;
  const numTwo = 6;

  const threeFavouriteFoods = ["Bubble Tea", "Ramen", "Thai Green Curry"];

  return (
    <main>
      <section>
        <h2>About Me</h2>
        <p>Hi! My name is Bhawick Jain.</p>
        <p>
          I currently live in {location.city}, {location.country}.
        </p>
      </section>
      <section>
        <h2>Musing of the month ({location.city}, June 1995)</h2>
        <p>Q: What do you call a dog that's hustling? wood?</p>
        <p>A: A husky (laugh for me, please)</p>
      </section>
      <section>
        <h2>Numbers</h2>
        <p>
          Currently, my two favourite numbers are <b>{numOne}</b> and{" "}
          <b>{numTwo}</b>.
        </p>
        <p>Here's how they interact:</p>
        <ol>
          <li>
            Sum, {numOne} + {numTwo} = {numOne + numTwo}
          </li>
          <li>
            Product, {numOne} x {numTwo} = {numOne * numTwo}
          </li>
          <li>
            Division (a), {numOne} / {numTwo} = {numOne / numTwo}
          </li>
          <li>
            Division (b), {numTwo} / {numOne} = {numTwo / numOne}
          </li>
        </ol>
      </section>
      <section>
        <h2>Food</h2>
        <p>My favourite foods are:</p>
        <ul>
          <li>{capitalise(threeFavouriteFoods[0])}</li>
          <li>{capitalise(threeFavouriteFoods[1])}</li>
          <li>{capitalise(threeFavouriteFoods[2])}</li>
        </ul>
        <p>
          Please get in touch if you know any good recipes that combine{" "}
          {threeFavouriteFoods[0]}, {threeFavouriteFoods[1]} and{" "}
          {threeFavouriteFoods[2]}!
        </p>
      </section>
    </main>
  );
}

export default MainContent;
