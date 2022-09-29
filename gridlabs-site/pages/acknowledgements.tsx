import { Box, Container, Paper, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { FaqDivider } from "../components/faqDivider";
import { FaqPaper } from "../components/faqPaper";
import Link from "../components/link";

const Faq: NextPage = () => {
  return (
    <>
      <Head>
        <title>Grid Labs | Acknowledgements</title>
      </Head>
      <Box sx={{ p: 4 }}>
        <Container>
          <Typography variant="h2" sx={{ mt: 4, mb: 4 }}>
            Acknowledgements
          </Typography>
          <Typography variant="h5" sx={{ mb: 8 }}>
            Here we have collected some of the key resources which enable our
            technology
          </Typography>
          <FaqPaper>
            <Typography variant="h4">Hivemind and DeDLOC - 2021</Typography>
            <FaqDivider />

            <Typography variant="body1">
              At the time the Gridcoin Greenpaper was originally drafted in
              early 2021, training deep learning networks on a widely
              distributed system architecture like BOINC remained an unsolved
              research problem. Since then, the Learning@Home team has published
              preliminary but highly promising results from their new algorithm:
              Distributed Deep Learning in Open Collaborations (DeDLOC). DeDLOC
              will form the basis of all of Grid Lab&apos;s initial applications
              and experiments. From their 2021 paper:
            </Typography>

            <Paper
              elevation={3}
              sx={(theme) => ({
                p: 1,
                mt: 1,
                mb: 1,
                borderLeft: "4px solid",
                borderLeftColor: theme.palette.secondary.main,
              })}
            >
              <blockquote>
                <Typography variant="body1">
                  DeDLOC is based on a novel algorithm that adapts to the
                  available hardware in order to maximize the training
                  throughput. Depending on the infrastructure, DeDLOC can
                  recover parameter servers [30], All-Reduce SGD [32],
                  decentralized SGD [33], BytePS [34], or an intermediate
                  strategy that combines all of them. Using this algorithm, we
                  propose a system for collaborative training designed to
                  accommodate a large number of heterogeneous devices with
                  uneven compute, bandwidth, reliability, and network
                  capabilities.
                </Typography>
                <br />
                <Link
                  href="https://arxiv.org/abs/2106.10207"
                  target="_blank"
                  rel="noopener"
                >
                  <Typography variant="caption">
                    arXiv:2106.10207 [cs.LG] (2)
                  </Typography>
                </Link>
              </blockquote>
            </Paper>
            <li>
              <Link
                href="https://arxiv.org/abs/2106.10207"
                target="_blank"
                rel="noopener"
              >
                NeurIPS 2021 Paper
              </Link>
            </li>
            <li>
              <Link
                href="https://learning-at-home.github.io/"
                target="_blank"
                rel="noopener"
              >
                Learning@Home Website
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/learning-at-home/hivemind"
                target="_blank"
                rel="noopener"
              >
                Learning@Home Github
              </Link>
            </li>
          </FaqPaper>
          <FaqPaper>
            <Typography variant="h4">Gridcoin Greenpaper - 2021</Typography>
            <FaqDivider />

            <Typography variant="body1">
              This paper takes a close look at the economics of Gridcoin
              &apos;Proof of Research&apos; compared to other Proof of Work
              blockchains and cloud computing in general. It identified a
              possible market opportunity that would be mutually beneficial to
              BOINC based scientific research, the Gridcoin network, and early
              business participants.
            </Typography>
            <Link
              href="https://github.com/gridcoin-community/Gridcoin-Tasks/issues/247"
              target="_blank"
              rel="noopener"
            >
              Gridcoin Greenpaper
            </Link>
          </FaqPaper>
          <FaqPaper>
            <Typography variant="h4">Gridcoin - 2013</Typography>
            <FaqDivider />
            <Typography variant="body1">
              Gridcoin is a cryptocurrency built on a Proof of Stake blockchain
              which rewards participation in BOINC and other scientific
              distributed computing projects. It is the reserve asset and
              currency of choice for Grid Labs.
            </Typography>
            <Link
              href="https://gridcoin.world/"
              target="_blank"
              rel="noopener"
            >
              Gridcoin.world Website and Whitepaper
            </Link>
          </FaqPaper>
          <FaqPaper>
            <Typography variant="h4">Bitcoin - 2008</Typography>
            <FaqDivider />
            <Typography variant="body1">
              Bitcoin needs no introduction. We include the original Bitcoin
              Whitepaper here because it laid the foundation for decentralized,
              open economic networks like Gridcoin. That open, trustless
              coordination technology is quite possibly the greatest invention
              of this century.
            </Typography>
            <Link
              href="https://bitcoin.org/en/"
              target="_blank"
              rel="noopener"
            >
              Bitcoin.org Website and Whitepaper
            </Link>
          </FaqPaper>
        </Container>
      </Box>
    </>
  );
};

export default Faq;
