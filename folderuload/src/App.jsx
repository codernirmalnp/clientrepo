import React from "react";
import {connect} from 'react-redux'
import {getFolderFile,getFolderFilePending,createFolder,getFolderFileById,setParentFolder} from './redux/folder/folderSlice'

import { Content } from "./components/Content.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { Sidebar } from "./components/Sidebar.jsx";



 class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: '',
      breadcrumbs: [],
    };
  }
  componentDidMount(){
    this.props.getFolderFilePending()
    this.props.getFolderFile()
  }


  handleTileClick = (id) => {
     this.props.setParentFolder(id)
     this.props.getFolderFileById(id)
    
  };

 

  handleAddFile = (filename) => {
   if(this.props.parentId){
     
   }
  };

  handleAddFolder = (foldername) => {
    if(this.props.parentId){
      this.props.createFolder({parentId:this.props.parentId,name:foldername})
     
    }
    else{
      this.props.createFolder({name:foldername})
    }
    
  };

  handleRenameItem = (id, name) => {
    
  };

  handleDeleteItem = (id) => {
  
  };
  render() {
  
    return (
      <div>
        <Sidebar
          handleAddFile={this.handleAddFile}
          handleAddFolder={this.handleAddFolder}
        />
        <Navigation
          data={this.state.data}
          resetState={this.resetState}
          breadcrumbs={this.state.breadcrumbs}
        />
        {this.props && this.props.folder && (
          <Content
            contents={this.props.folder}
            file={this.props.file}
            handleTileClick={this.handleTileClick}
            handleDeleteItem={this.handleDeleteItem}
            handleRenameItem={this.handleRenameItem}
          />
        )}
      </div>
    );
  }
}
const mapStateToProps=(state)=>
{
  return state.folder
}
export default connect(mapStateToProps,{getFolderFile,getFolderFileById,setParentFolder,getFolderFilePending,createFolder})(App)
