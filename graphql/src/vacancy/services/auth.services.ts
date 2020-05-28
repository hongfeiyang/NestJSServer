import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
// import { compareSync } from 'bcrypt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor( @Inject('AUTH_CLIENT') private readonly client: ClientProxy ) {}

  async login(username: string, password: string) {
    const token = this.client.send({role: 'auth', cmd: 'login'}, {"username": username, "password": password}).toPromise()
    // if (!token) {throw new HttpException("user not found", HttpStatus.FORBIDDEN)}
    return token
  }


}
