import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service'

@Controller('v1/user')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Get()
    helloworld() {
        return this.userService.getAllUser()
    }
}
