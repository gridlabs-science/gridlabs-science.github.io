import { Box, Container, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { FaqDivider } from "../components/faqDivider";
import { FaqPaper } from "../components/faqPaper";

const Faq: NextPage = () => {
  return (
    <>
      <Head>
        <title>Grid Labs | FAQ</title>
      </Head>
      <Box sx={{ p: 4 }}>
        <Container>
          <Typography variant="h2" sx={{ mt: 4, mb: 4 }}>
            FAQs
          </Typography>
          <Typography variant="h5" sx={{ mb: 8 }}>
            A collection of frequently asked (or anticipated) questions
          </Typography>
          <FaqPaper>
            <Typography variant="h4">What is BOINC?</Typography>
            <FaqDivider />
            <Typography variant="body1">
              BOINC lets you help cutting-edge science research using your
              computer. The BOINC app, running on your computer, downloads
              scientific computing jobs and runs them invisibly in the
              background. It&apos;s easy and safe. About 30 science projects use
              BOINC. They investigate diseases, study climate change, discover
              pulsars, and do many other types of scientific research. The BOINC
              and Science United projects are located at the University of
              California, Berkeley and are supported by the National Science
              Foundation.
            </Typography>
          </FaqPaper>
          <FaqPaper>
            <Typography variant="h4">Why use Gridcoin?</Typography>
            <FaqDivider />
            <Typography variant="body1">
              There are several other currencies that we could have chosen for
              cruncher payments. US Dollars or Euros or even Bitcoin on the
              Lightning Network could be used as efficient transaction mediums,
              but confer no specific advantages other than broad familiarity.
              The Gollem Project (using an ERC-20 based token on the Ethereum
              blockchain) bares many similarities to Gridcoin, but is still in
              very early stages of development, thus the Gollem software for
              coordinating compute grids is incomplete for our needs. In
              comparison, BOINC is a stable software project with over 20 years
              of active development and proven performance. Grid Labs has chosen
              to build our business around the Gridcoin currency and Open
              Economic Network for several reasons.{" "}
              <strong>
                First and most importantly, using the GRC currency supports the
                Gridcoin blockchain which supports the brilliant scientists on
                whom businesses like Grid Labs depend for continued exploration
                of our universe.
              </strong>{" "}
              Second, renting computing power on the Gridcoin network is
              currently several orders of magnitude more cost-effective than an
              equivalent amount of power through standard cloud providers. We
              believe this presents a not insignificant market opportunity for
              certain specific applications. Third, the Gridcoin network already
              boasts thousands of crunchers and roughly 8 Peta FLOPS of
              computing power. The OEN, blockchain software, and network
              computing power is in an early but maturing stage.
            </Typography>
          </FaqPaper>
          <FaqPaper>
            <Typography variant="h4">Why use BOINC?</Typography>
            <FaqDivider />
            <Typography variant="body1">
              We chose BOINC primarily to simplify setup for prospective
              crunchers and our initial implementation. It is important to us
              that cruncher&apos;s computational power can flow easily between
              our projects and other Whitlisted BOINC projects (see &ldquo;How
              will you protect the science?&rdquo; below). Importantly however,
              Gridcoin as a network is not inseperable from BOINC and we do
              anticipate moving to a more modern infrastructure in the future
              such as Kubernetes.
            </Typography>
          </FaqPaper>
          <FaqPaper>
            <Typography variant="h4">
              I like your pitch. Can I invest?
            </Typography>
            <FaqDivider />
            <Typography variant="body1">
              The short answer is no, Grid Labs is not seeking any outside
              investment at this time. Grid Labs is an extraordinarily
              experimental project aimed at testing two things. First, whether a
              profitable business can be run using the Gridcoin network. Second,
              whether the addition of for-profit projects to the Gridcoin
              network proves to be a net benefit to the scientific projects that
              already depend on it. Grid Labs will only continue if both those
              conditions are met. We require an agile, capital efficient
              structure free of fiduciary responsibilities to outside investors
              in order to carefully evaluate the second condition.
            </Typography>
            <Typography variant="body1">
              This being said, if you have significant capital and want to
              invest in this ecosystem you might consider integrating Gridcoin
              into your existing business (or start a new business using our
              code), or buy and stake GRC.
            </Typography>
          </FaqPaper>
          <FaqPaper>
            <Typography variant="h4">Can I donate to Grid Labs?</Typography>
            <FaqDivider />
            <Typography variant="body1">
              Certainly, if you really love the project and want it to take off
              you may donate GRC to the following Gridcoin address:
            </Typography>
            <h4>SMBKzkNysrYxwdxMkzEy3ScJ65qfTrCCKC</h4>
            <Typography variant="body1">
              All donated GRC will be used to directly pay crunchers. We
              don&apos;t sell GRC. Notably, you cannot get a tax deduction for
              donating to Grid Labs as we are structured as a for-profit LLC.
              While our stated purpose is to support science research efforts,
              our experimental setup requires us to test whether a for-profit
              business can be run on the Gridcoin network. If you would like to
              donate GRC for a tax deduction we encourage you to consider the
              newly formed Gridcoin 501c3.
            </Typography>
          </FaqPaper>
          <FaqPaper>
            <Typography variant="h4">
              Is your technology open source?
            </Typography>
            <FaqDivider />
            <Typography variant="body1">
              Not just our software, but our entire strategy and business model
              is open source. We welcome other innovative businesses and
              entrepreneurs to copy what we&apos;ve done here and improve on it.
            </Typography>
          </FaqPaper>
          <FaqPaper>
            <Typography variant="h4">
              How can you afford to open source your business strategy?
            </Typography>
            <FaqDivider />
            <Typography variant="body1">
              We have identified a business strategy that is mutually beneficial
              to Grid Labs, Gridcoin, and other &ldquo;competing&rdquo;
              businesses. Because a significant percentage of our (albeit small)
              cash reserves are held in GRC, the success of Grid Labs is closely
              tied to the adoption and sustainable success of Gridcoin. Game
              theoretically, this creates a positive-sum network effect between
              all participants. We hope to be the first of many similar
              businesses that will push the envelope of what can be achieved
              with the Gridcoin Open Economic Network.
            </Typography>
          </FaqPaper>
          <FaqPaper>
            <Typography variant="h4">
              What if Grid Labs pulls too many crunchers away from Whitelisted
              BOINC projects? How will you protect the science?
            </Typography>
            <FaqDivider />
            <Typography variant="body1">
              This is an important concern which deserves a thorough answer. At
              the outset, it is important to note that we are maintaining a
              small, privately owned business structure. The partners of Grid
              Labs have complete control over the company and do not have any
              feduciary responsibility to outside parties. Should Grid Labs ever
              succeed and grow beyond this structure, we will pursue registering
              as a B-Corporation, so that the protection of Whitelist
              Project&apos;s computational power takes precedence over any short
              term profit seeking interests. Additionally, we have setup a
              public dashboard which (roughly) tracks the computational power on
              Whitelisted projects. Grid Labs and members of the Gridcoin
              community can use this to audit our efforts in this matter.
            </Typography>
            <Typography variant="body1">
              There are several other reasons why we do not think this will
              ultimately be a significant problem. First, as a for-profit entity
              we have a vested interest in paying as little of our GRC as
              possible to meet our computational needs. Second, approximately
              two-thirds of BOINC&apos;s total power comes from participants who
              have no interest in Gridcoin, and the vast majority of Gridcoin
              participants would continue to support BOINC science whether or
              not GRC existed. Consequently, we anticipate most of Grid
              Lab&apos;s computation to come from new Gridcoin participants
              (possibly as an alternative to pool-crunching for those with low
              GRC wallet balances) or from current participants who spin up new
              hardware to supplement their Whitelist work. Finally, it is worth
              noting that work units from Whitelisted scientific research are
              themselves a limited resource. Several BOINC projects have been
              Greylisted or removed from Gridcoin altogether after failing to
              supply enough work units feed the demand from crunchers. Grid Labs
              exists as an economically parallel entity, distinct from
              Gridcoin&apos;s Whitelist system. This should allow us to
              responsively throttle our utilization and act as a buffer for the
              ecosystem&apos;s work unit distribution, ultimately benefitting
              researchers.
            </Typography>
          </FaqPaper>
        </Container>
      </Box>
    </>
  );
};

export default Faq;
