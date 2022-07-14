import React, { PropsWithChildren } from "react";

import { GitHub } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  createTheme,
  CssBaseline,
  IconButton,
  Link,
  Stack,
  styled,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import { HideOnScroll } from "../components/hideOnScroll";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#131517", paper: "#1b1c1e" },
    primary: {
      main: "#6d2aad",
    },
  },
});

const Background = styled("div")({
  backgroundColor: "#131517",
  backgroundImage: "url(/background.svg)",
  backgroundSize: "cover",
  backgroundPosition: "center top 150px",
  backgroundRepeat: "no-repeat",
  minHeight: "400vh",
  margin: 0,
});

export const Layout = ({children}: PropsWithChildren) => {

  return (<ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <Background>
      <HideOnScroll>
        <AppBar
          color="transparent"
          elevation={0}
          sx={{ backdropFilter: "blur(2px)" }}
        >
          <Toolbar>
            <Link href="/">
            <Image
              src="/gridlabs-black-bg.png"
              alt="Grid Labs Logo"
              width={150}
              height={150}
            />
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Stack spacing={2} direction="row">
                <Button variant="outlined" href="https://metrics.gridlabs.science">Metrics</Button>
                <Button variant="outlined" href="https://gridlabs.substack.com/">Blog</Button>
                <Button variant="outlined">FAQ</Button>
                <Button variant="outlined">Citations</Button>
                <IconButton
                  size="large"
                  aria-label="github"
                  color="inherit"
                  href="https://github.com/gridlabs-science"
                >
                  <GitHub />
                </IconButton>
              </Stack>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Toolbar sx={{ height: "150px" }} />
      {children}
    </Background>
  </ThemeProvider>
  );
};
