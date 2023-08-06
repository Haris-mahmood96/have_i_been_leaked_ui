import { Button, TextField, Container, AppBar, Toolbar, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from 'next/router'
import BasicEmailReputationCard from "./components/BasicEmailReputationCard";
import CollapsibleTable from "./components/LeaksTable2";
import LeaksTable from "./components/LeaksTable";
import SocailMediaRegistrationsCollapsibleTable from "./components/SocialMediaRegistrations";

const HomePage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState('');
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    try {
      const response = await fetch('http://localhost:8000/api/osint/email/search/', {
        method: 'POST',
        headers: {

        },
        body: formData,
      });
  
     

      if (response.status >= 200 && response.status < 300) {
        const data: ApiResponse = await response.json();
        setApiResponse(data);
        console.log(apiResponse.basic_email_reputation.email);
        console.log(typeof(apiResponse.leaks));
      } else {
        setResponseMessage('Failed to submit email');
      }
    } catch (error) {
      console.error('Failed to submit email:', error);
      setResponseMessage('Failed to submit email');
    }
    
    // use Next.js's router to navigate to results page with query parameter
    // router.push({
    //   pathname: '/results',
    //   query: { message: data.message },
    // });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
            Have I been Leaked?
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 3 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 1 }}
          />
          <Button variant="contained" color="primary" type="submit">
            Search
          </Button>
        </form>
      </Container>
      {apiResponse &&  (
        <Container maxWidth="sm" sx={{ mt: 3 }}>
        <BasicEmailReputationCard reputation={apiResponse.basic_email_reputation} />        
        <LeaksTable leaks={apiResponse.leaks}></LeaksTable>
        <SocailMediaRegistrationsCollapsibleTable data={apiResponse.social_media_registrations}></SocailMediaRegistrationsCollapsibleTable>
        </Container>
    )}
    </Box>
  );
};

export default HomePage;
