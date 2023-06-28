import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/user.dto'

@Controller('v1/user')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Get()
    getAllUsers() {
        return this.userService.getAllUser()
    }
    
    @Post()
    createUser(@Body() newUser: CreateUserDto) {
        this.userService.createUser(
            newUser.userName, 
            newUser.languagePreference, 
            newUser.showLanguagesPreference, 
            newUser.showProfilePreference, 
            newUser.termsAccepted)
    } 
}
