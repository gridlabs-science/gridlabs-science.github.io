import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { HTMLAttributeAnchorTarget } from "react";

interface Props {
  imageSrc: string;
  headingText: string;
  bodyText: string;
  actionText: string;
  actionHref: string;
  target?: HTMLAttributeAnchorTarget;
}

export const JoinCard = (props: Props) => {
  const { imageSrc, headingText, bodyText, actionText, actionHref, target } = props;

  return (
    <Card variant="outlined">
      <CardMedia
        image={imageSrc}
        component="img"
        sx={{ width: "90%", m:"5%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {headingText}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {bodyText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={actionHref} target={target} variant="outlined" sx={{ m: "auto" }}>
          {actionText}
        </Button>
      </CardActions>
    </Card>
  );
};
