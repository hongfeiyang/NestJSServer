import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    // const request = context.switchToHttp().getRequest();

    const ctx = GqlExecutionContext.create(context).getContext();
    if (!ctx.headers.authorization) {
      return false;
    }
    const jwt = ctx.headers.authorization.split(' ')[1]
    if (!jwt) {
      return false;
    }

    const user = this.jwtService.decode(jwt) as { [key: string]: any };

    if (!user) {
      return false;
    }

    console.log(`roles allowed {${roles}}, ${user.username} is ${user.role}`);

    return this.matchRoles(roles, user.role);
  }

  matchRoles(roles: String[], userRole: any): boolean {
    return roles.includes(userRole);
  }
}
