import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { Select } from '../Select';
import { Container } from './styles';

type Job = {
    jobId: string;
    jobTitle: string;
    companyName: string;
    jobDescription: string;
    snippets: string;
    postingDate: Date;
};

interface HeaderProps {
    jobs: Job[];
}

export function Header({ jobs }: HeaderProps) {
    const { register } = useForm();

    return (
        <Container>
            <Input register={register} name="search" />
            <Select register={register} name="name">
                <option>Company name</option>
                {jobs?.map(job => (
                    <option key={job?.jobId} value={job?.companyName}>
                        {job?.companyName}
                    </option>
                ))}
            </Select>
            <Select register={register} name="datePosted">
                <option>Date posted</option>
                <option value="7">Past week</option>
            </Select>
        </Container>
    );
}
