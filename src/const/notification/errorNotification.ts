import { IErrorsList } from '../../interfaces/error/errorInterface';

export const errorMessage: IErrorsList = {
  user_already_exist: 'User already exists',
  user_unauthorized_by: 'Login or password is wrong. Or create a new user',
  user_unauthorized_token: 'Please reload the page for login again',
  user_not_token: 'user_not_token',
  common_auth_error: 'Sometnihg went wrong, try again',
  common_error: 'Sometnihg went wrong, try to reload the app',

  //===============COmmon==============================

  bad_id: 'Id is not valid',
  not_found_id: 'Not Found Id',
};
