import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { JoinCard } from "../components/joinCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Grid Labs</title>
      </Head>
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
              imageSrc="/undraw/undraw_book_lover_re_rwjy.svg"
              headingText="Key Citations"
              bodyText="Let your unused CPU and GPU cycles help democratize science
                  and machine learning."
              actionText="Learn more"
              actionHref="/acknowledgements"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <JoinCard
              imageSrc="/undraw/undraw_team_collaboration_re_ow29.svg"
              headingText="Join the Team"
              bodyText="If you like what we're doing and want to help, here's how you can get involved."
              actionText="Get Involved"
              actionHref="/join"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <JoinCard
              imageSrc="/undraw/undraw_my_answer_re_k4dv.svg"
              headingText="FAQ"
              bodyText='"Frequently Anticipated Questions," further explaining some of the details.'
              actionText="Learn more"
              actionHref="/faq"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <JoinCard
              imageSrc="/undraw/undraw_charts_re_5qe9.svg"
              headingText="The Grid Labs Dashboard"
              bodyText="A collection of useful metrics we track, made publicly available for the convenience of the Gridcoin community."
              actionText="View metrics"
              actionHref="https://metrics.gridlabs.science"
              target="_blank"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <JoinCard
              imageSrc="/undraw/undraw_online_articles_re_yrkj.svg"
              headingText="The Grid Log"
              bodyText="Because if you're doing science without a spiffy notebook, what are you even doing?"
              actionText="Read the blog"
              actionHref="https://gridlabs.substack.com/"
              target="_blank"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
