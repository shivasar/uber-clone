# Backend API Documentation

## `/users/register` Endpoint

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

- `fullname` (object):
  - `firstname` (string, required): User's first name (minimum 3 characters).
  - `lastname` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token

## `/users/login` Endpoint

### Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Endpoint

`/users/login`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token

## `/users/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated user.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

### Example Response

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).
  - `email` (string): User's email address (must be a valid email).

## `/users/logout` Endpoint

### Description

Logout the current user and blacklist the token provided in cookie or headers

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header or cookie:

- `user` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name (minimum 3 characters).
    - `lastname` (string): User's last name (minimum 3 characters).
  - `email` (string): User's email address (must be a valid email).
  - `password` (string): User's password (minimum 6 characters).
- `token` (String): JWT Token

## Captain Routes

### Endpoint: `/captains/register`

#### Description

This endpoint is used to register a new captain. It validates the input data, hashes the password, and stores the captain in the database along with their vehicle details.

#### Method

`POST`

#### Request Body

The request body should be in JSON format and include the following fields:

| Field                 | Type   | Required | Description                                                          |
| --------------------- | ------ | -------- | -------------------------------------------------------------------- |
| `fullname.firstname`  | String | Yes      | First name of the captain (minimum 3 characters).                    |
| `fullname.lastname`   | String | No       | Last name of the captain (minimum 3 characters).                     |
| `email`               | String | Yes      | Email address of the captain (must be valid).                        |
| `password`            | String | Yes      | Password for the captain (minimum 6 characters).                     |
| `vehicle.color`       | String | Yes      | Color of the vehicle (minimum 3 characters).                         |
| `vehicle.plate`       | String | Yes      | License plate of the vehicle (minimum 3 characters).                 |
| `vehicle.capacity`    | Number | Yes      | Capacity of the vehicle (minimum 1).                                 |
| `vehicle.vehicleType` | String | Yes      | Type of the vehicle (must be one of `car`, `motorcycle`, or `auto`). |

#### Validation Rules

- `fullname.firstname`: Must be at least 3 characters long.
- `fullname.lastname`: Must be at least 3 characters long (if provided).
- `email`: Must be a valid email address.
- `password`: Must be at least 6 characters long.
- `vehicle.color`: Must be at least 3 characters long.
- `vehicle.plate`: Must be at least 3 characters long.
- `vehicle.capacity`: Must be an integer greater than or equal to 1.
- `vehicle.vehicleType`: Must be one of `car`, `motorcycle`, or `auto`.

#### Response

##### Success Response

- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "token": "jwt_token_here",
    "captain": {
      "_id": "captain_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

##### Error Response

- **Status Code**: `409 Conflict`
- **Body**:
  ```json
  {
    "message": "Captain already exist"
  }
  ```

##### Validation Error Response

- **Status Code**: `400 Bad Request`
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

---

### Endpoint: `/captains/login`

#### Description

Authenticates a captain using their email and password, returning a JWT token upon successful login.

#### Method

`POST`

#### Request Body

The request body should be in JSON format and include the following fields:

| Field      | Type   | Required | Description                                      |
| ---------- | ------ | -------- | ------------------------------------------------ |
| `email`    | String | Yes      | Email address of the captain (must be valid).    |
| `password` | String | Yes      | Password for the captain (minimum 6 characters). |

#### Response

##### Success Response

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "token": "jwt_token_here",
    "captain": {
      "_id": "captain_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

##### Error Response

- **Status Code**: `401 Unauthorized`
- **Body**:
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

---

### Endpoint: `/captains/profile`

#### Description

Retrieves the profile information of the currently authenticated captain.

#### Method

`GET`

#### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

#### Response

##### Success Response

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "captain": {
      "_id": "captain_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```

---

### Endpoint: `/captains/logout`

#### Description

Logs out the current captain and blacklists the token provided in the cookie or headers.

#### Method

`GET`

#### Authentication

Requires a valid JWT token in the Authorization header or cookie.

#### Response

##### Success Response

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "message": "Logout successfully"
  }
  ```
