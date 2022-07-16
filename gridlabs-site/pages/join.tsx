import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";

const Join: NextPage = () => {
  return (
    <>
      <Head>
        <title>Join the Team</title>
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
            processors and Graphics Processing Units (GPUs).{" "}
          </Typography>
        </Paper>
      </Box>
      <Box sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardMedia
                component="img"
                image="https://cdn.wccftech.com/wp-content/uploads/2018/10/DSC_0572-Custom-1030x687.jpg"
                alt="gpu"
                height={240}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Become a cruncher
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Let your unused CPU and GPU cycles help democratize science
                  and machine learning.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" sx={{ m: "auto" }}>
                  Sign up
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardMedia
                component="img"
                image="https://cdn.wccftech.com/wp-content/uploads/2018/10/DSC_0572-Custom-1030x687.jpg"
                alt="gpu"
                height={240}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Contribute to our open source code
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Let your unused CPU and GPU cycles help democratize science
                  and machine learning.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" sx={{ m: "auto" }}>
                  Sign up
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardMedia
                component="img"
                image="https://cdn.wccftech.com/wp-content/uploads/2018/10/DSC_0572-Custom-1030x687.jpg"
                alt="gpu"
                height={240}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Contribute to the Gridcoin and BOINC communities
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Let your unused CPU and GPU cycles help democratize science
                  and machine learning.
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" sx={{ m: "auto" }}>
                  Sign up
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Join;
