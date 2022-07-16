import { Box, Card, Typography } from "@mui/material";
import { NextPage } from "next";

const SignUp: NextPage = () => {
  return (
    <>
      <Box sx={{ p: 4 }}>
        <Typography variant="h3">Welcome to Grid Labs!</Typography>
        <Typography variant="h1">Let&apos;s do some science.</Typography>
      </Box>
    </>
  );
};

export default SignUp;
