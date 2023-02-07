import axios from "axios";
import { useEffect, useState } from "react";
import CustomerCard from "../components/CustomerCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: theme.spacing(2),
  },
}));

const Customers = () => {
  const classes = useStyles();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      const { data } = res.data;
      setCustomers(data);
    });
  }, []);
  return (
    <Grid container spacing={6}>
      {customers.map((item) => (
        <Grid item xs={12} md={4}>
          <CustomerCard
            name={item.first_name}
            lastName={item.last_name}
            email={item.email}
            avatar={item.avatar}
            className={classes.card}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Customers;
