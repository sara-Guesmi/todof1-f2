import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { editTask } from "../JS/actions/task";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditTask({ task }) {
  const [open, setOpen] = React.useState(false);
  const [newText, setText] = React.useState(task.text);
  //   ------------------------------------------
  // useselector
  // --------------------------------------------
  // usedispatch
  const dispatch = useDispatch();
  // ---------------------------------------------
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSave = () => {
    if (newText) {
      dispatch(editTask(task.id, newText));
      handleClose();
    } else {
      alert("you can not put an empty task");
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input type="text" onChange={handleText} value={newText} />
          <button>close</button>
          <button onClick={handleSave}>save</button>
        </Box>
      </Modal>
    </div>
  );
}
