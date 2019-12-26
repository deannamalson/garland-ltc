import React from "react";
import {
  makeStyles,
  Typography,
  Card,
  CardContent,
  CardActions,
  Link
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  cardWrapper: {
    display: "flex",
    flexDirection: "column"
  },
  cardBody: {
    flexGrow: 1
  },
  cardFooter: {
    padding: theme.spacing(2),
    justifyContent: "center"
  }
}));

const InfoCard = ({ title, text, action }) => {
  const classes = useStyles();
  return (
    <Card className={classes.cardWrapper}>
      <CardContent className={classes.cardBody}>
        <Typography variant="h3" color="secondary" gutterBottom={true}>
          {title}
        </Typography>
        {text}
      </CardContent>
      {action && (
        <CardActions className={classes.cardFooter}>
          <Typography variant="h6">
            {action.anchor ? (
              <Link href={action.href} underline="always">
                {action.linkText}
              </Link>
            ) : (
              <Link
                href={action.href}
                target="_blank"
                rel="noreferrer"
                underline="always"
              >
                {action.linkText}
              </Link>
            )}
          </Typography>
        </CardActions>
      )}
    </Card>
  );
};

export default InfoCard;
