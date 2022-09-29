import { Paper, styled } from "@mui/material";

export const FaqPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  "& a:link, a:visited": {
    color: theme.palette.primary.light,
  },
}));
