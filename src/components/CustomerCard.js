import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Modal from "./Modal";

import CardActions from "@mui/material/CardActions";
import classNames from "classnames";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

const CustomerCard = ({ name, lastName, email, avatar, className,onRemoveCustomers, id }) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };
  const handleConfirmModal = (id) =>{
    onRemoveCustomers(id)
    handleToggleModal()
  }
  const handleRemoveCustomers = () =>{
    handleToggleModal()
  }
  return (
    <>
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
          <IconButton aria-label="Editar cliente">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="Deletar cliente" onClick={handleRemoveCustomers}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Modal
        open={openModal}
        onClose={handleToggleModal}
        onConfirm={()=>handleConfirmModal(id)}
        title="Deseja realmente excluir este cadastro?"
        messege="Ao confirmar não será possível reverter esta operação"
      />
    </>
  );
};
export default CustomerCard;
