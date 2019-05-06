import React from 'react';

class AccessoriesCarousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        "https://www.shareicon.net/data/256x256/2015/10/20/659333_accessories_512x512.png",
        
        "https://www.shareicon.net/data/256x256/2015/12/26/693261_accessories_512x512.png",
        "https://images.vexels.com/media/users/3/149796/isolated/lists/e11c305a2043d1a67ef198805211462b-firefighter-hat-illustration.png",
        "http://clipart-library.com/img1/1665620.png",
        "http://www.networkpouch.com/wp-content/uploads/2017/11/Fashion-Jewelry.png",
        "https://www.shareicon.net/data/256x256/2016/11/16/854357_clothing_512x512.png",
        "https://kcgolfcartco.com/wp-content/uploads/2018/05/PartsServices_Icon.png",
      ],
      currentIndex: 0,
      translateValue: 0
    }
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0)
      return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }



    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  goToNextShoe = () => {
    if (this.state.currentIndex === this.state.shoes.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  render() {
    return (
      <div>
        <div className="slider">
          <h1 className="title">Accessories</h1>

          <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
          </div>

          <LeftArrow
            goToPrevSlide={this.goToPrevSlide}
          />

          <RightArrow
            goToNextSlide={this.goToNextSlide}
          />
        </div>
      </div>
    );
  }
};

export default AccessoriesCarousel;

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles}></div>
}


const LeftArrow = (props) => {
  return (
    <div className="backArrow arrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}


const RightArrow = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}

const RightArrowShoe = (props) => {
  return (
    <div className="nextArrow arrow" onClick={props.goToNextShoe}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  )
}