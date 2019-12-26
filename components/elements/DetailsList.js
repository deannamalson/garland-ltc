import React from "react";
import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Icon
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  listItem: {
    paddingTop: 0
  },
  listIcon: {
    minWidth: 0,
    marginRight: theme.spacing(1),
    padding: 0
  }
}));

const DetailsList = ({ list }) => {
  const classes = useStyles();
  return (
    <List>
      {list.map(item => (
        <ListItem className={classes.listItem} key={item}>
          <ListItemIcon className={classes.listIcon}>
            <Icon>check</Icon>
          </ListItemIcon>
          <ListItemText>
            <Typography>{item}</Typography>
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default DetailsList;
