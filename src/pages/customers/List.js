import axios from "axios";
import { useEffect, useState } from "react";
import CustomerCard from "../../components/CustomerCard";
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

const List = () => {
  const classes = useStyles();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      const { data } = res.data;
      setCustomers(data);
    });
  }, []);
  const handleRemoveCustomers = (id) => {
    axios.delete(`https://reqres.in/api/users/${id}`).then(() => {
      const newCustomersState = customers.filter(
        (customer) => customer.id !== id
      );
      setCustomers(newCustomersState);
    });
  };
  return (
    <Grid container spacing={6}>
      {customers.map((item) => (
        <Grid item xs={12} md={4}>
          <CustomerCard
            id={item.id}
            name={item.first_name}
            lastName={item.last_name}
            email={item.email}
            avatar={item.avatar}
            className={classes.card}
            onRemoveCustomers={handleRemoveCustomers}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
