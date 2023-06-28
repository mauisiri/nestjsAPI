import { Body, Param, Controller, Get, Post, Delete } from '@nestjs/common';
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/user.dto'

@Controller('v1/user/preferences')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    getAllUsers() {
        return this.usersService.getAllUser()
    }
    
    @Post()
    createUser(@Body() newUser: CreateUserDto) {
        return this.usersService.createUser(
            newUser.userName, 
            newUser.languagePreference, 
            newUser.showLanguagesPreference, 
            newUser.showProfilePreference, 
            newUser.termsAccepted)
    }

    @Delete(':userId')
    deleteUser(@Param('userId') userID: string){
        this.usersService.deleteUser(userID)
    }    
}
