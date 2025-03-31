import { UserRepo } from '../myrepositories';

export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class UserService {
  private userRepo = new UserRepo();
  async getUserBaseAll() {
    return this.userRepo.getUserBaseAll();
  }

  async getUserBaseAllView() {
    return this.userRepo.getUserBaseAllView();
  }

  async getUserBaseById(Id: string) {
    return this.userRepo.getUserBaseById(Id);
  }
}
