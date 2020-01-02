import React, { useContext } from "react";
import {
  makeStyles,
  Typography,
  Card,
  CardContent,
  CardActions,
  Link
} from "@material-ui/core";
import NavContext from "../../context/nav-context";

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
  },
  action: {
    cursor: "pointer"
  }
}));

const InfoCard = ({ title, text, action }) => {
  const { state } = useContext(NavContext);
  const classes = useStyles();

  const handleAnchorLinkClick = () => {
    window.scrollTo({
      top: state.sections[action.href].top - 75,
      behavior: "smooth"
    });
  };

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
              <Link
                className={classes.action}
                onClick={handleAnchorLinkClick}
                underline="always"
              >
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
