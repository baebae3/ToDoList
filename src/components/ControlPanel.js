import { Button, Checkbox, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import { Input } from "@mui/material";
import { addTask, deleteTask, changeChecked } from "../store/tasks/action";
import "../App.css";

const ControlPanel = () => {
  const inputRef = useRef();
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const taskName = (e) => {
    setValue(e.target.value);
  };

  const addTaskBtn = (value) => {
    dispatch(addTask(value));
    setValue("");
    inputRef.current.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      value && dispatch(addTask(value));
      setValue("");
      inputRef.current.focus();
    }
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const checkChange = (index) => {
    dispatch(changeChecked(index));
  };

  return (
    <>
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          maxWidth: "500px",
        }}
      >
        <TextField
          autoFocus={true}
          inputRef={inputRef}
          value={value}
          onKeyPress={handleKeyPress}
          onChange={taskName}
        />
        <Button disabled={!value} onClick={() => addTaskBtn(value)}>
          Add Task
        </Button>
      </div>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          margin: "0 auto",
        }}
      >
        {tasks?.taskItems.length > 0 ? (
          tasks.taskItems.map((task, index) => {
            return (
              <ListItem
                // className={"completed"}
                style={
                  task.isChecked
                    ? {
                        textDecoration: "line-through",
                        margin: "10px",
                      }
                    : { margin: "10px" }
                }
                key={index}
                secondaryAction={
                  <IconButton
                    onClick={() => handleDelete(task.id)}
                    edge="end"
                    aria-label="comments"
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemIcon>
                    <Checkbox
                      onChange={() => checkChange(task.id)}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText primary={task.text} />
                </ListItemButton>
              </ListItem>
            );
          })
        ) : (
          <div>No tasks</div>
        )}
      </List>
    </>
  );
};

export default ControlPanel;
