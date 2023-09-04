# Movie Browser Web App

## Instructions

To run this web app locally, follow these steps:

1. Clone this GitHub repository to your local machine.
2. Install the required dependencies using `npm install` or `yarn install`.
3. Create a `.env` file at the root of the project with your TMDb API key:
    REACT_APP_TMDB_API_KEY=YOUR_TMDB_API_KEY_HERE
    Replace `YOUR_TMDB_API_KEY_HERE` with your actual TMDb API key.
4. Start the development server with `npm start` or `yarn start`.
5. Open your web browser and navigate to `http://localhost:3000` to access the app.

To test the code, you can run unit tests using `npm test` or `yarn test`.


## Proficiency Elements

### React Components
I've structured the app using React components, separating different parts of the UI into reusable components, Each component serves a specific purpose, making the codebase easier to understand and maintain. building modular and maintainable code.


### Redux State Management
I've integrated Redux for state management, which helps in efficiently managing the application's data flow and ensures a consistent user experience also ensuring a predictable and centralized way of managing data.

### Routing with React Router
The app uses React Router for navigation between pages, allowing users to browse movie details seamlessly.

### Unit Testing**
The codebase is accompanied by unit tests to ensure code quality and maintainability. These tests cover critical functionalities and showcase my proficiency in writing testable code and ensuring the reliability of the application.


## Improvements

If I had an additional 4 hours for this task, I would focus on the following improvements:

1. **Enhanced Error Handling**: I would enhance error handling in the code to provide more informative error messages to users in case of network issues or API errors. This would improve the overall user experience.

2. **Pagination for Movie List**: Implement pagination for the movie list instead of infinite scrolling. This would provide better control over loading large amounts of data.

3. **Unit Test Coverage**: Expand the unit test coverage to ensure robust code quality and maintainability.

4. **Accessibility**: Improve accessibility by adding appropriate ARIA roles and labels to ensure the app is usable by individuals with disabilities.

## Feedback

Overall, this challenge is a great way to assess a candidate's proficiency in React and related technologies. To further improve this challenge, you might consider providing more specific requirements for certain aspects of the app, such as accessibility or performance, to allow candidates to demonstrate expertise in those areas.

Maybe Include a section in the challenge that encourages candidates to discuss how they would scale the app for larger datasets or user bases, demonstrating their understanding of scalability and performance optimization.

## Deployment

The app has been deployed to [Varcel](https://vercel.com/) and is accessible at [Movie Browser Web App](https://gsynergy-themovie-db.vercel.app/). 