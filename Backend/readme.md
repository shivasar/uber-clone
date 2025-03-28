/\*\*PI Documentation

- Routes ka logic controller me likhte hai
  \*/Endpoint: `/users/register`
  const userModel = require("../models/user.model");
  const userService = require("../services/user.service");
  const { validationResult } = require("express-validator");
  This endpoint is used to register a new user. It validates the input data, hashes the password, and stores the user in the database.
  module.exports.registerUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
  }

### Request Body

const { fullname, email, password } = req.body;
The request body should be in JSON format and include the following fields:
const hashedPassword = await userModel.hashPassword(password);
| Field | Type | Required | Description |
const user = await userService.createUser({---------------------------------------------- |
firstname: fullname.firstname,Yes | First name of the user (minimum 3 characters). |
lastname: fullname.lastname,| No | Last name of the user (minimum 3 characters). |
email, | String | Yes | Email address of the user (must be valid). |
password: hashedPassword,ng | Yes | Password for the user (minimum 6 characters). |
});

### Validation Rules

const token = user.generateAuthToken();

- `fullname.firstname`: Must be at least 3 characters long.
  res.status(201).json({ token, user });3 characters long (if provided).
  };`email`: Must be a valid email address.
- `password`: Must be at least 6 characters long.
  module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
- **Body**:
  const user = await userModel.findOne({ email }).select("+password");
  {
  if (!user) {jwt_token_here",
  return res.status(401).json({ message: "Invalid email or password" });
  } "\_id": "user_id_here",
  "fullname": {
  const isMatch = await user.comparePassword(password);
  "lastname": "Doe"
  if (!isMatch) {
  return res.status(401).json({ message: "Invalid email or password" });
  } }
  const token = user.generateAuthToken();

  ````
  res.status(200).json({ token, user });
  };## Error Response

















































  */ * ``` * } *   } *     "email": "john.doe@example.com" *     }, *       "lastname": "Doe" *       "firstname": "John", *     "fullname": { *     "_id": "user_id_here", *   "user": { *   "token": "jwt_token_here", * { * ```json * - Body: * - Status Code: `201 Created` * Success Response: * * Response: * * - `password`: Must be at least 6 characters long. * - `email`: Must be a valid email address. * - `fullname.lastname`: Must be at least 3 characters long (if provided). * - `fullname.firstname`: Must be at least 3 characters long. * Validation Rules: * * | `password`          | String | Yes      | Password for the user (minimum 6 characters). | * | `email`             | String | Yes      | Email address of the user (must be valid).    | * | `fullname.lastname` | String | No       | Last name of the user (minimum 3 characters). | * | `fullname.firstname`| String | Yes      | First name of the user (minimum 3 characters).| * |---------------------|--------|----------|-----------------------------------------------| * | Field               | Type   | Required | Description                                   | * * The request body should be in JSON format and include the following fields: * Request Body: * * Method: `POST` * * This endpoint is used to register a new user. It validates the input data, hashes the password, and stores the user in the database. * Description: * * Endpoint: `/users/register`/** */ * API Documentation/**- **Status Code**: `400 Bad Request`
  ````

- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```
