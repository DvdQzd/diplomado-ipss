import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({
        description: 'El correo electrónico del usuario',
        example: 'test@example.com',
        required: true
    })
    @IsEmail({}, { message: 'El correo electrónico no es válido' })
    @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
    email: string;

    @ApiProperty({
        description: 'La contraseña del usuario',
        example: '123456',
        required: true
    })
    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    @IsString({ message: 'La contraseña debe ser una cadena de texto' })
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    @MaxLength(20, { message: 'La contraseña debe tener menos de 20 caracteres' })
    password: string;
}
