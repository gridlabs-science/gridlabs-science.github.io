import {
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { JoinCard } from "../components/joinCard";

const Join: NextPage = () => {
  return (
    <>
      <Head>
        <title>Grid Labs | Join the Team</title>
      </Head>

      <Box sx={{ mt: 15, textAlign: "center" }}>
        <Typography variant="h3">Get Involved</Typography>
      </Box>
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4">
            <strong>Our Mission</strong> is to increase the amount of computing
            power available to scientific research, small businesses, startups,
            and other under-served but important economic enterprises. We aim to
            do this by leveraging bleeding edge computation coordination
            algorithms on a maximally distributed network of underutilized
            processors and Graphics Processing Units (GPUs).
            If you like what we&apos;re doing here and want to jump in, here are some ways you can help
          </Typography>
        </Paper>
      </Box>
      <Box sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <JoinCard
              imageSrc="/undraw/undraw_server_cluster_jwwq.svg"
              headingText="Become a cruncher"
              bodyText="Let your unused CPU and GPU cycles help democratize science
                  and machine learning."
              actionText="Sign up"
              actionHref="#"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <JoinCard
              imageSrc="/undraw/undraw_developer_activity_re_39tg.svg"
              headingText="Contribute to our open source code"
              bodyText="Not just our software, but our entire strategy and 
                business model is open source. We welcome other innovative 
                businesses and entrepreneurs to copy what we've done here and improve on it."
              actionText="GitHub"
              actionHref="https://github.com/gridlabs-science"
              target="_blank"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <JoinCard
              imageSrc="/undraw/undraw_medical_research_qg4d.svg"
              headingText="Contribute to the Gridcoin and BOINC communities"
              bodyText="Because they need help too."
              actionText="Contribute"
              actionHref="https://github.com/gridcoin-community"
              target="_blank"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Join;
