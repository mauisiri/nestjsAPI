import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {

    private users: User[] = [
        {
            userId: '1',
            userName: 'Charles_500',
            languagePreference: 'English',
            showLanguagesPreference: true,
            showProfilePreference: true,
            termsAccepted: true,
        }
    ];

    getAllUser() {
        return this.users;
    }

    createUser(
        userName: string,
        languagePreference: string,
        showLanguagesPreference: boolean,
        showProfilePreference: boolean,
        termsAccepted: boolean,
        ) { 
            const user = {
                userName,
                languagePreference
            }
            this.users.push()
        }
    updateUser() { }
    deletaUser() { }

}
