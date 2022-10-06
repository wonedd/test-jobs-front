import { GetServerSideProps } from 'next';
import { Container } from '../../shared/pages/home.styles';
import { Card } from '../components/Card';
import { Header } from '../components/Header';
import { api } from '../services/api';

type Job = {
    jobId: string;
    jobTitle: string;
    companyName: string;
    jobDescription: string;
    snippets: string;
    postingDate: Date;
};

interface HomeProps {
    data: [
        {
            jobs: Job[];
        },
    ];
}

export default function Home({ data }: HomeProps) {
    const { jobs } = data[0];

    return (
        <Container>
            <Header jobs={jobs} />
            {jobs?.map(job => (
                <Card key={job?.jobId} job={job} />
            ))}
        </Container>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    const { data } = await api.get('/');

    return {
        props: {
            data,
        },
    };
};
