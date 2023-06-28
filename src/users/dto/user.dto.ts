import { IsBoolean, IsNotEmpty, IsString, MinLength, IsIn } from 'class-validator';


export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    userName: string
    @IsString()
    @IsNotEmpty()
    @IsIn(['English', 'Spanish', 'Portuguese'])
    languagePreference: string
    @IsBoolean()
    @IsNotEmpty()
    showLanguagesPreference: boolean
    @IsBoolean()
    @IsNotEmpty()
    showProfilePreference: boolean
    @IsBoolean()
    @IsNotEmpty()
    termsAccepted: boolean
}