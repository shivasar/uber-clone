# API Documentation

## Endpoint: `/users/register`

### Description

This endpoint is used to register a new user. It validates the input data, hashes the password, and stores the user in the database.

### Method

`POST`

### Request Body

The request body should be in JSON format and include the following fields:

| Field                | Type   | Required | Description                                    |
| -------------------- | ------ | -------- | ---------------------------------------------- |
| `fullname.firstname` | String | Yes      | First name of the user (minimum 3 characters). |
| `fullname.lastname`  | String | No       | Last name of the user (minimum 3 characters).  |
| `email`              | String | Yes      | Email address of the user (must be valid).     |
| `password`           | String | Yes      | Password for the user (minimum 6 characters).  |

### Validation Rules

- `fullname.firstname`: Must be at least 3 characters long.
- `fullname.lastname`: Must be at least 3 characters long (if provided).
- `email`: Must be a valid email address.
- `password`: Must be at least 6 characters long.

### Response

#### Success Response

- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "token": "jwt_token_here",
    "user": {
      "_id": "user_id_here",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

#### Error Response

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
