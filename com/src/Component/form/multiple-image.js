import {useEffect,useCallback,useState} from 'react'
import {useField} from 'formik'
import {useDropzone} from 'react-dropzone'
import * as MUI from '@material-ui/core'
import {withStyles} from '@material-ui/core'
const MultipleImage=(props)=>{
  const [files, setFiles] = useState([]);
  const [meta,field,helpers]=useField(props)
  const onDrop = useCallback((acceptedFiles) => {
    const [File]=acceptedFiles
    const url=URL.createObjectURL(File)
  
    setFiles((curr) => [...curr, ...acceptedFiles.concat({url:url})]);
   
  }, [helpers])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({accept:"image/*",onDrop});
 useEffect(()=>{
   helpers.setValue(files)
   return ()=>{ 
     field.value &&  URL.revokeObjectURL(field.value.preview)
   }
 
 },[files])


  return (
    <MUI.Paper elevation={3} className={props.classes.root}>
      
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <MUI.Typography variant="h5" >Drag 'n' drop some files here, or click to select files</MUI.Typography>
        )}
      </div>
      {
       
         meta.value &&  <img className={props.classes.imgStyle} src={ meta.value.preview}  alt={meta.value.name}/>
         
    
      }
    </MUI.Paper>
  )
        }

        const style=theme=>({
          root:{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column',
            padding:theme.spacing(1),
          
            minHeight:200,
            minWidth:'100%'
      
          },
          imgStyle:{
            height:200,
            width:200,
            borderRadius:'50%'
          }

        })

export default withStyles(style)(MultipleImage);