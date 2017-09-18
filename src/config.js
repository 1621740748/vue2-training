export const { APP_KEY, API_URL } = process.env;

export const userRoles = {
  ADMIN: 'admin',
  USER: 'user',
};

export const errorMessages = {
  unknownServerError: 'Server is unavailable for current moment',
  'validation.required': 'This field is required',
  'validation.email': 'This field should be correct email',
  'validation.unique': 'This field should be unique',
  'authenticate.credentials_invalid': 'Email or password are invalid',
};
