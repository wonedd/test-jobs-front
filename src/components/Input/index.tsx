import { InputHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { IoSearchOutline } from 'react-icons/io5';
import { Container, InputBase } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    register: UseFormRegister<FieldValues>;
}

export function Input({ name, register, required, ...rest }: InputProps) {
    return (
        <Container>
            <IoSearchOutline size={20} />
            <InputBase {...register(name, { required })} {...rest} />
        </Container>
    );
}
