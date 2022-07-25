import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";
import { JoinCard } from "../components/joinCard";

const Home: NextPage = () => {
  return (
    <>
      <Box sx={{ p: 4, mt: 10, mb: 10 }}>
        <Typography variant="h2">Let&apos;s do some science.</Typography>
        <Typography variant="h5" sx={{ pt: 4, pb: 4 }}>
          Affordable large model training.
        </Typography>
        <Link href="/sign-up">
          <Button
            variant="contained"
            size="large"
            color="primary"
            component="a"
          >
            <Typography variant="h5">
              <strong>Get Started</strong>
            </Typography>
          </Button>
        </Link>
      </Box>
      <Box sx={{ p: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5">
            <strong>Our Mission</strong> is to increase the amount of computing
            power available to scientific research, small businesses, startups,
            and other under-served but important economic enterprises. We aim to
            do this by leveraging bleeding edge computation coordination
            algorithms on a maximally distributed network of underutilized
            processors and Graphics Processing Units (GPUs).
          </Typography>
        </Paper>
      </Box>
      <Box sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <JoinCard
              imageSrc="/undraw/undraw_server_cluster_jwwq.svg"
              headingText="Key Citations"
              bodyText="Let your unused CPU and GPU cycles help democratize science
                  and machine learning."
              actionText="Sign up"
              actionHref="#"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
