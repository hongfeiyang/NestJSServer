import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class VacancyGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
