import { AuthFieldsNames, TRegisterFormValues } from '../helpers/types';

import { IRegistrationDTO } from '@/models/auth.model';

class RegistrationDTO implements IRegistrationDTO {
  email: string;
  name: string;
  password: string;

  constructor(values: TRegisterFormValues) {
    this.email = values[AuthFieldsNames.EMAIL];
    this.name = values[AuthFieldsNames.NAME];
    this.password = values[AuthFieldsNames.PASSWORD];
  }
}

export default RegistrationDTO;
