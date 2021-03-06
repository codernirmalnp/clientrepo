import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { RenameDialog } from "./RenameDialog";
import { useStyles } from "./ContentStyles";

const initialState = {
  mouseX: null,
  mouseY: null,
};

export const Content = (props) => {
  const {
    contents,
    file,
    handleTileClick,
    handleDeleteItem,
    handleRenameItem,
  } = props;
  const [state, setState] = useState(initialState);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [viewDialog, setViewDialog] = useState(false);

  const classes = useStyles();

  const handleClick = (event) => {
    handleTileClick(event.target.id);
    setSelectedItemId(event.target.id);
  };

  const handleRightClick = (event) => {
    event.preventDefault();
    setSelectedItemId(event.target.id);
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    });
  };

  const handleClose = () => {
    setState(initialState);
  };

  const handleDelete = () => {
    handleDeleteItem(selectedItemId);
  };

  return (
    <div>
      <main className={classes.content}>
        <Grid container spacing={1}>
          {contents.map((curr) => {
            return (
              <div key={curr._id}>
                <Grid
                  item
                  xs={3}
                  onDoubleClick={handleClick}
                  id={curr._id}
                  onContextMenu={handleRightClick} style={{ cursor: "context-menu" }}
                >
                  <Paper
                    variant="outlined"
                    className={classes.griditem}
                    id={curr._id}
                  >
                    <Typography className={classes.text} id={curr.id}>
                        <FolderIcon className={classes.icon} />
                      {curr.name}
                    </Typography>
                  </Paper>
                </Grid>
                <Menu
                  keepMounted
                  open={state.mouseY !== null}
                  onClose={handleClose}
                  anchorReference="anchorPosition"
                  anchorPosition={
                    state.mouseY !== null && state.mouseX !== null
                      ? { top: state.mouseY, left: state.mouseX }
                      : undefined
                  }
                >
                  <MenuItem onClick={handleClose}>
                    <Button onClick={() => setViewDialog(true)}>Rename</Button>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Button onClick={handleDelete}>Delete</Button>
                    {viewDialog && (
                      <RenameDialog
                        setViewDialog={setViewDialog}
                        id={selectedItemId}
                        handleRenameItem={handleRenameItem}
                      />
                    )}
                  </MenuItem>
                </Menu>
              </div>
            );
          })}
        </Grid>
        <Grid container spacing={1}>
          {file &&  file.map((curr) => {
            return (
              <>
                <Grid
                  item
                  xs={3}
                  key={curr.id}
                  onDoubleClick={handleClick}
                  id={curr.id}
                  onContextMenu={handleRightClick} style={{ cursor: "context-menu" }}
                >
                  <Paper
                    variant="outlined"
                    className={classes.griditem}
                    id={curr.id}
                  >
                    <Typography className={classes.text} id={curr.id}>
                     
                        <InsertDriveFileIcon className={classes.icon} />
                      {curr.name}
                    </Typography>
                  </Paper>
                </Grid>
                <Menu
                  keepMounted
                  open={state.mouseY !== null}
                  onClose={handleClose}
                  anchorReference="anchorPosition"
                  anchorPosition={
                    state.mouseY !== null && state.mouseX !== null
                      ? { top: state.mouseY, left: state.mouseX }
                      : undefined
                  }
                >
                  <MenuItem onClick={handleClose}>
                    <Button onClick={() => setViewDialog(true)}>Rename</Button>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Button onClick={handleDelete}>Delete</Button>
                    {viewDialog && (
                      <RenameDialog
                        setViewDialog={setViewDialog}
                        id={selectedItemId}
                        handleRenameItem={handleRenameItem}
                      />
                    )}
                  </MenuItem>
                </Menu>
              </>
            );
          })}
        </Grid>
      </main>
    </div>
  );
};
