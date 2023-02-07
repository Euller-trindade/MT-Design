import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardActions from "@mui/material/CardActions";
import classNames from "classnames";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

const CustomerCard = ({ name, lastName, email, avatar, className }) => {
  const classes = useStyles();
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className={classNames(className, classes.root)}
    >
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={avatar}>
            r
          </Avatar>
        }
        title={`${name} ${lastName}`}
        subheader={email}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default CustomerCard;
