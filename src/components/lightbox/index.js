import React, { Component } from "react";
import * as Mui from "@material-ui/core";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

class LightBoxUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images,
      imgIndex: this.props.imgIndex,
    };
  }

  onPrev = () => {
    this.setState({
      imgIndex:
        (this.state.imgIndex + this.state.images.length - 1) %
        this.state.images.length,
    });
  };

  onNext = () => {
    this.setState({
      imgIndex: (this.state.imgIndex + 1) % this.state.images.length,
    });
  };
  componentDidMount() {
    document.querySelector("html").classList.add("overflow-hidden");
  }

  componentWillUnmount() {
    this.setState({ images: [], imgIndex: 0 });
    document.querySelector("html").classList.remove("overflow-hidden");
  }

  render() {
    return (
      <Lightbox
        mainSrc={this.state.images[this.state.imgIndex].url}
        nextSrc={
          this.state.images[
            (this.state.imgIndex + 1) % this.state.images.length
          ].url
        }
        prevSrc={
          this.state.images[
            (this.state.imgIndex + this.state.images.length - 1) %
              this.state.images.length
          ].url
        }
        onCloseRequest={() => this.props.onClose()}
        onMovePrevRequest={() => this.onPrev()}
        onMoveNextRequest={() => this.onNext()}
        imageTitle={
          <span className="d-flex align-items-center">
            <Mui.Typography
              className="mr-2 font-weight-normal"
              component="span"
              variant="h5"
            >
              {this.state.imgIndex + 1}/{this.state.images.length}
            </Mui.Typography>
            {this.state.images[this.state.imgIndex].name
              ? this.state.images[this.state.imgIndex].name
              : this.state.images[this.state.imgIndex].fileName}
          </span>
        }
        closeLabel={"Close"}
        enableZoom={true}
      />
    );
  }
}

export default Mui.withWidth()(LightBoxUI);
