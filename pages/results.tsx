import { Typography, Container } from "@mui/material";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  return {
    props: {
      message: query.message || "",
    },
  };
};

interface ResultsProps {
  message: string;
}

const ResultsPage: React.FC<ResultsProps> = ({ message }) => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3">{message}</Typography>
    </Container>
  );
};

export default ResultsPage;
