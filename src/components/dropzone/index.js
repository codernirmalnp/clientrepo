import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import DropzoneComponent from "react-dropzone-component";
import { IconClose, IconCloudUpload, IconFile } from "../svg";
import { connect } from "react-redux";
import { deleteMedia } from "../../reduxs/actions";
import { withTranslation } from "react-i18next";
class Dropzone extends Component {
  constructor(props) {
    super(props);
    this.myDropzone = "";
    this.reactDOMServer = require("react-dom/server");
    this.dropzoneComponentConfig = {
      postUrl: process.env.REACT_APP_API_URL + "/api/medias",
    };
    this.dropzoneConfig = {
      url: process.env.REACT_APP_API_URL + "/api/medias",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        Accept: "application/json",
        "Cache-Control": null,
        "X-Requested-With": null,
      },
      paramName: "file",
      thumbnailHeight: 160,
      maxFiles: props.multiple ? 100 : 1,
      acceptedFiles: props.accept ? props.accept : null,
      // dictDefaultMessage: "",
      dictInvalidFileType: "Invalid File",
      accept: function (file, done) {
        done();
      },
      previewTemplate: this.reactDOMServer.renderToStaticMarkup(
        <Mui.Box width="100%" display="flex" alignItems="center">
          <div className="dz-details">
            <figure>
              <img
                data-dz-thumbnail
                className="img-thumbnail border-0 file-preview"
                alt=""
              />

              <IconFile />
            </figure>

            <Mui.Box
              width="100%"
              display="flex"
              flexWrap="wrap"
              justifyContent="space-beetween"
            >
              <h6 data-dz-name> </h6>
              <span className="file-size text-color-grey" data-dz-size />

              <div className="dz-progress">
                <span className="dz-upload" data-dz-uploadprogress />
              </div>

              <div className="dz-error-message">
              <span data-dz-errormessage />
            </div>
            </Mui.Box>

            <a href="#/" className="remove" data-dz-remove>
              <IconClose />
            </a>
          </div>
        </Mui.Box>
      ),
    };
  }

  /*clear = () => {
    this.myDropzone.removeAllFiles(true);
  };

  addAttachment = (file) => {};*/

  removeAttachment = (file) => {
    file.previewElement.remove();
    for (let index = 0; index < this.props.imgArr.length; index++) {
      const element = this.props.imgArr[index];
      if (element.name === file.name) {
        if (!element.id) {
          this.props.deleteMedia(element.value);
        }
        this.props.imgArr.splice(index, 1);
        this.props.upload(this.props.imgArr);
        break;
      }
    }
  };

  initAttachment = (dropzone) => {
    if (this.props.imgArr && this.props.imgArr.length > 0) {
      this.props.imgArr.forEach((element, index) => {
        let mockFile = {
          id: element.id,
          name: element.name,
          size: element.size,
          label: element.label,
          url: element.url,
        };
        dropzone.emit("addedfile", mockFile);
        dropzone.emit("thumbnail", mockFile, element.url);
        dropzone.emit("complete", mockFile);

        dropzone.files.push(mockFile);
      });
    }
  };

  render() {
    const { t } = this.props;
    return (
      <DropzoneComponent
        config={this.dropzoneComponentConfig}
        djsConfig={this.dropzoneConfig}
        eventHandlers={{
          init: (dropzone) => {
            if (this.props.init) {
              this.myDropzone = dropzone;
              setTimeout(() => {
                this.initAttachment(dropzone);
              }, 1000);
            }
          },
          success: (file, response) => {
            if (response.success) {
              if (this.props.multiple) {
                this.props.imgArr.push({
                  id: "",
                  name: file.name,
                  value: response.data.name,
                  url: file.dataURL,
                  mimeType: response.data.mimeType,
                });
              } else {
                this.props.imgArr.splice(0, 1, {
                  id: "",
                  name: file.name,
                  value: response.data.name,
                  url: file.dataURL,
                  mimeType: response.data.mimeType,
                });
              }
              this.props.upload(this.props.imgArr);
            }
          },
          addedfile: (file) => {
            // this.addAttachment(file);
          },
          removedfile: (file) => {
            this.removeAttachment(file);
          },
        }}
      >
        <div className="dz-message">
          <IconCloudUpload />
          {t("COMMON.DRAG_N_DROP")} <br />
          <br /> {t("COMMON.OR")} <br />
          <Mui.Button
            variant="contained"
            color="primary"
            className="btn-default"
          >
            {t("COMMON.BROWSE_FILE")}
          </Mui.Button>
        </div>
      </DropzoneComponent>
    );
  }
}
const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, {
  deleteMedia,
})(withTranslation()(Dropzone));
