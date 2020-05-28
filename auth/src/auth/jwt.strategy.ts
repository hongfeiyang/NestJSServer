import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Injectable } from "@nestjs/common";
import { jwtContants } from "./jwt.constants";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: jwtContants.secret
      });
    }
  
    async validate(payload: any) {
      return { id: payload.sub, user: payload.user};
    }
  }