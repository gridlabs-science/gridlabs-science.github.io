import React, { PropsWithChildren } from "react";

import { GitHub, Twitter } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  createTheme,
  CssBaseline,
  IconButton,
  PaletteMode,
  PaletteOptions,
  Stack,
  styled,
  ThemeOptions,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import Image from "next/image";
import { HideOnScroll } from "../components/hideOnScroll";
import Link from "next/link";

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#6d2aad" },
        }
      : {
          // palette values for dark mode
          primary: { main: "#a25ada", dark: "#6d2aad", light:"#c386f3" },
          secondary: {main: "#00e5ff"},
          background: {
            default: "#131517",
            paper: "#131517",
          },
        }),
  },
});

const darkTheme = createTheme(getDesignTokens("dark"));

const Background = styled("div")({
  backgroundColor: "#131517",
  backgroundImage: "url(/background.min.svg)",
  backgroundSize: "cover",
  backgroundPosition: "center top 150px",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  margin: 0,
});

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Background>
        <HideOnScroll>
          <AppBar color="transparent" elevation={0}>
            <Toolbar>
              <Link href="/">
                <a>
                  <Image
                    src="/gridlabs-black-bg.png"
                    alt="Grid Labs Logo"
                    width={150}
                    height={150}
                  />
                </a>
              </Link>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Stack spacing={2} direction="row">
                  <Link href="/join">
                    <Button variant="contained" component="a">
                      Join the team
                    </Button>
                  </Link>
                  <Button
                    variant="outlined"
                    href="https://metrics.gridlabs.science"
                    target="_blank"
                  >
                    Metrics
                  </Button>
                  <Button
                    variant="outlined"
                    href="https://gridlabs.substack.com/"
                    target="_blank"
                  >
                    Blog
                  </Button>
                  <Link href="/faq">
                    <Button variant="outlined" component="a">
                      FAQ
                    </Button>
                  </Link>

                  <IconButton
                    size="large"
                    aria-label="github"
                    color="inherit"
                    href="https://github.com/gridlabs-science"
                    target="_blank"
                  >
                    <GitHub />
                  </IconButton>
                  <IconButton
                    size="large"
                    aria-label="twitter"
                    color="inherit"
                    href="https://twitter.com/GridLabsScience"
                    target="_blank"
                  >
                    <Twitter />
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
