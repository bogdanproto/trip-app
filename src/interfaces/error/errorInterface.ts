export interface IErrorsList {
  user_unauthorized_by: string;
  user_unauthorized_token: string;
  user_not_token: string;
  user_already_exist: string;
  common_auth_error: string;
  common_error: string;
  bad_id: string;
  not_found_id: string;
}

export interface IErorr {
  status: number;
  message: string;
  code: keyof IErrorsList;
}
