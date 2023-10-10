/*
 *Update the User interface to all all the remaining properties you deem fit.
 * */
interface User {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirm: string;
  country_of_residence: string;
  state_of_residence: string;
  university: string;
  specialization: string;
  year_of_graduation: string;
  post_graduate_college: string;
  registration_number: string;
}


interface Usercontext {
  User: User;
}

export default Usercontext;
export type { User };
