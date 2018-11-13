# nodejsRESTfulAPI-HotelBooking

A simple Node.js application with MySQL sequelize ORM.

### Before Running this Project

1. Install all dependencies `npm install`
2. Configure MySQL DB Configuration as per yours.
3. Match yours configured MySQL DB in `./config/config.json` files.
4. Make sure your MySQL DB connected as well.

### How to run this Project

1. Run `npm start` to Start the Project
   (it will automatically run `sequelize db:migrate` and migrate all models to your local DB)

### Seed data

After run the project, you can use `Postman` to test CRUD proccess.

Test POST method in :
`localhost:3000/admin/1` to seed the Admin data.
`localhost:3000/user/1` to seed the User data.
`localhost:3000/room/1` to seed the Room data.
`localhost:3000/booking/1` to seed the Booking data.
