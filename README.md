# UUJ ( ROADSIDE ASSISTANCE BACK END - API )

[DEMO](https://www.uuj.pl).

# Description

It is project my protfolio. This project use :

- AWS
- Strapi.js
- REST API: Node.js + PostgreSQL ( [repositorie API ](https://github.com/pawel-niedzwiecki/uuj-backend). )

# How to run this project?

1. Download this project on your computer
2. Make sure you have node.js installed [Link to Node.js ](https://nodejs.org) and database MongoDB
3. After making sure that you have installed node.js, run the terminal and in the directory of this project run the command `yarn install`
4. Create `.env` in main and add parametr:

### SERVER

- `PORT="1337"`
- `HOST="0.0.0.0"`
- `JWT_SECRET`
- `API_TOKEN_SALT`
- `ADMIN_JWT_SECRET`
- `APP_KEYS`

### DataBase

- `DATABASE_URL`

### AWS S3

- `AWS_BUCKET`
- `AWS_REGION`
- `AWS_ACCESS_KEY_ID`
- `AWS_ACCESS_SECRET`

### SENDGRID

- `SENDGRID_API_KEY`
- `SENDGRID_EMAIL_FROM`
- `SENDGRID_EMAIL_TO`

5. Then select one of the options:

### `yarn develop`

Runs the app in the development mode.\
Open [http://localhost:1337/admin](http://localhost:1337/admin) to view it in the browser.

### `yarn start`

Builds the app for production.
It correctly bundles Strapi in production mode and optimizes the build for the best performance.

## Learn More

Thanks for your interest and I invite you to cooperation :)
