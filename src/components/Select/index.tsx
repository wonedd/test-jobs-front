import { SelectHTMLAttributes } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Container, InputBase } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    register: UseFormRegister<FieldValues>;
    inputWidth?: string;
}
export function Select({ name, register, required, ...rest }: SelectProps) {
    return (
        <Container>
            <InputBase {...register(name, { required })} {...rest} />
        </Container>
    );
}
