import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  container: {
    padding: "15px 0",
  },
}));
const Default = ({ title, Component }) => {
  const classes = useStyles();
  return (
    <>
    <Typography variant="h3">
        {title}
    </Typography>
     <Component/>
    </>
  );
};
export default Default;
