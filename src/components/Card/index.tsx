import { Container } from './styles';

interface CardProps {
    job: {
        jobId: string;
        jobTitle: string;
        companyName: string;
        jobDescription: string;
        snippets: string;
        postingDate: Date;
    };
}

export function Card({ job }: CardProps) {
    return (
        <Container>
            <h2>{job?.jobTitle}</h2>
            <p>{job?.companyName}</p>
            <p>{job?.snippets}</p>
        </Container>
    );
}
