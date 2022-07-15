import { Box, Paper, Typography } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Box sx={{ p: 4, mt: 10, mb: 10 }}>
        <Typography variant="h1">Let&apos;s do some science.</Typography>
      </Box>
      <Box sx={{ p: 4 }}>
        <Paper sx={{ p: 4, width: "60%" }}>
          <Typography variant="h4">
            <strong>Our Mission</strong> is to increase the amount of computing
            power available to scientific research, small businesses, startups,
            and other under-served but important economic enterprises. We aim to
            do this by leveraging bleeding edge computation coordination
            algorithms on a maximally distributed network of underutilized
            processors and Graphics Processing Units (GPUs).{" "}
          </Typography>
        </Paper>
      </Box>
      <Box sx={{ p: 4 }}></Box>
    </>
  );
};

export default Home;
