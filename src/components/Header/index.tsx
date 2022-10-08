import { useForm } from 'react-hook-form';
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
    handleFilter: (filter: string) => void;
    handlePastWeek: () => void;
}

export function Header({ jobs, handleFilter, handlePastWeek }: HeaderProps) {
    const { register } = useForm();

    return (
        <Container>
            <Select
                register={register}
                name="name"
                onChange={e => handleFilter(e.target.value)}
            >
                <option selected disabled>
                    Company name
                </option>
                {jobs?.map(job => (
                    <option key={job?.jobId} value={job?.companyName}>
                        {job?.companyName}
                    </option>
                ))}
            </Select>
            <Select
                register={register}
                name="datePosted"
                onChange={handlePastWeek}
            >
                <option selected disabled>
                    Date posted
                </option>
                <option>Past week</option>
            </Select>
        </Container>
    );
}
