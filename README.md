## Dependencies

- `cors`: This package is a middleware that enables Cross-Origin Resource Sharing (CORS) in the application. It allows the server to accept requests from a different domain than the one it is hosted on.
- `dotenv`: This package allows you to load environment variables from a `.env` file into `process.env`. This is useful for setting up different configurations for different environments (e.g. development and production).
- `express`: This package is a web framework for Node.js. It provides a simple and flexible way to create web applications and APIs.
- `mongoose`: This package is an Object Document Mapper (ODM) for MongoDB. It provides a model-based approach for working with data in a MongoDB database, making it easier to write validation logic, query the database, and handle errors.
- `nodemon`: This package is a development tool that automatically restarts the server when code changes are made. It saves you from having to manually restart the server every time you make a change.

# ueq

![alt text](https://github.com/Yannik195/ueq-online-tool/blob/main/slides/slide1.pdf?raw=true)
![alt text](https://github.com/Yannik195/ueq-online-tool/blob/main/slides/slide1.svg?raw=true)
![alt text](https://github.com/Yannik195/ueq-online-tool/blob/main/slides/slide1.png?raw=true)

## Description

ueq is a tool for creating and managing questionnaires.

## Technologies

### Backend

- Node.js
- Express
- MongoDB
- Mongoose

## Frontend

The frontend is built using the following technologies:

- [React](https://reactjs.org/): A popular JavaScript library for building user interfaces.
- [Axios](https://github.com/axios/axios): A library used for making HTTP requests from the frontend.
- [chart.js](https://www.chartjs.org/) and [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2): Libraries for creating and displaying charts in the app.
- [moment](https://momentjs.com/): A library for working with dates and times.
- [node-sass](https://github.com/sass/node-sass): A library that allows you to use SASS (a CSS preprocessor) in your frontend code.
- [react-hook-form](https://react-hook-form.com/): A library for creating and validating forms in the app.
- [react-router-dom](https://reactrouter.com/): A library for implementing routing in the app.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Code

```
//Route Middleware
app.use("/api/q", questionnaireRoutes)
app.use("/api/result", resultRoutes)
app.use("/api/export", exportRoutes)
```
