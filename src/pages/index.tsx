/* eslint-disable no-console */
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { Container, Loading } from '../../shared/pages/home.styles';
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
    jobs: Job[];
}

export default function Home({ jobs }: HomeProps) {
    const [filteredJobs, setFilteredJobs] = useState();
    const [isFetching, setIsFetching] = useState(false);
    const [pastWeek, setPastWeek] = useState();

    const handleFilter = async (companyName: string) => {
        try {
            setIsFetching(true);
            const response = await api.get(`/jobs/${companyName}`);
            const filteredData = await response.data;

            const result = filteredData.filter(
                (job: Job) => job.companyName === companyName,
            );
            setFilteredJobs(result);
        } catch (err) {
            console.log(err);
        } finally {
            setIsFetching(false);
        }
    }; // function to filter jobs by company name

    const handlePastWeek = async () => {
        try {
            setIsFetching(true);
            const response = await api.get('/jobs/pastWeek');

            const filteredData = await response.data;

            setPastWeek(filteredData);
        } catch (err) {
            console.log(err);
        } finally {
            setIsFetching(false);
        }
    }; // function to fetch past week jobs

    return (
        <Container>
            <Header
                jobs={jobs}
                handleFilter={handleFilter}
                handlePastWeek={handlePastWeek}
            />
            {isFetching ? ( // if isFetching is true, show loading
                <Loading />
            ) : (
                <>
                    {filteredJobs ? ( // if filteredJobs is true, show filtered jobs
                        <Card job={filteredJobs[0]} />
                    ) : (
                        jobs?.map(job => <Card key={job?.jobId} job={job} />)
                    )}
                    {pastWeek ? ( // if pastWeek is true, show past week jobs
                        <Card job={pastWeek[0]} />
                    ) : (
                        jobs?.map(job => <Card key={job?.jobId} job={job} />)
                    )}
                </>
            )}
        </Container>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    // fetch jobs from api
    const { data } = await api.get('/jobs');

    return {
        props: {
            jobs: data, // pass jobs to the page props
        },
    };
};
