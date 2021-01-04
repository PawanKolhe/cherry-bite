<p><img src="https://i.ibb.co/6FMfswC/Cherry-Bite-Logo.png" alt="logo" width="400" /></p>

# Cherry Bite
Find some delicious holiday Recipes and get cooking! Search recipes, save the recipes you like, search for recipe videos, and view a random recipe if you feel lucky.

![Banner](https://i.ibb.co/4KQy0r1/Cherry-Bite-Holiday-Recipes.png)

## ⭐ Inspiration
During the Holidays, having good food is essential. So I decided to create a web app where one can discover new recipes.

## 🚀 What it does
- On the 'Home' page, the web app displays recipes from different categories, including 'Holiday Special' recipes.
- On the 'Search' page, one can search for recipes using keywords.
- On the 'Videos' page, user can search for recipe related videos and start watching.
- On the 'Random' page, user can discover a random recipe from the web. Similar to Google's 'I'm Feeling Lucky' button.
- The 'Saved' page contains recipes the user has saved while browsing through recipes.

If a user likes a particular recipe, they can click the save button which stores the recipe in the database. They can view their saved recipes on the 'Saved' page. User can open up the recipe and look at the recipe details which contains details like health score, time to prepare, summary, ingredients, steps to prepare the recipe, as well as other related recipes.

At the footer of the page, a random food joke is generated each time you refresh the web app.

## ⛏ How I built it
- I've use React to build the frontend.
- I've used [Strapi](https://strapi.io/) to build the backend quickly for storing recipes that the user saves.
- I used the [Spoonacular API](https://spoonacular.com/food-api) to retrieve data about recipes.
- The web app was deployed on Google App Engine (GCP).

## 🤨 Challenges I ran into
- Implementing a horizontal scroll for recipe categories was something I was initially struggling with.
- I ran into challenges with deploying to Google Cloud Platform.

## 😃 Accomplishments that I'm proud of
I'm proud that I got a working app with a backend and good Holiday theme user interface created within 2 days.

## 📚 What I learned
I used React after a long time, so it was fun to recall what I had forgotten and learn new concepts in React such as Hooks. 

## 💡 What's next for Cherry Bite
User SignUp and Login was a feature I didn't have enough time to build. I could integrate many other features that the API provides such as a chat bot for having a conversation about recipes, its ingredients and how to cook it.

## ⚙️ Environment Setup

Install dependencies
```bash
yarn
```

Launch dev server
```bash
yarn start
```

## 🛠 Backend Repo
https://github.com/PawanKolhe/cherry-bite-backend
