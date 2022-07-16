import { Box, Button, Paper, Typography } from "@mui/material";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Box sx={{ p: 4, mt: 10, mb: 10 }}>
        <Typography variant="h1">Let&apos;s do some science.</Typography>
        <Typography variant="h5" sx={{ pt: 4, pb: 4 }}>
          Unlock your data&apos;s potential without spending an arm and a leg.
        </Typography>
        <Link href="/sign-up">
          <Button
            variant="contained"
            size="large"
            color="primary"
            component="a"
          >
            <Typography variant="h5">
              <strong>Start Experimenting</strong>
            </Typography>
          </Button>
        </Link>
      </Box>
      <Box sx={{ p: 4 }}></Box>
    </>
  );
};

export default Home;
