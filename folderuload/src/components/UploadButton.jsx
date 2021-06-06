import React, { useState } from "react";
import {
  Fab,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import { UploadDialog } from "./UploadDialog.jsx";
import { useStyles } from "./UploadButtonStyles";

const UploadButton = (props) => {
  const classes = useStyles();
  const [openFolder, setOpenFolder] = useState(false);
 const handleUploadFile=(value)=>{
    props.handleAddFolder(value)
 }
  return (
  
      <div className={classes.root}>
        <Fab
          variant="extended"
          aria-label="add"
          className={classes.fab}
          onClick={()=>setOpenFolder(true)}
        >
          <AddIcon className={classes.extendedIcon} />
           Folder
        </Fab>
        <UploadDialog
                open={openFolder}
                onClose={() => setOpenFolder(false)}
                handleAddFolder={handleUploadFile}
                title="New Folder"
              />
      </div>
  );
};

export default (UploadButton)
