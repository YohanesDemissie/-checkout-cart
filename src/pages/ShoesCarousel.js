import React from 'react';
// import '../styles/home.css';
import '../styles/homePage.css';

// class HomePage extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2 className="header">Home Page</h2>

//       </div>
//     )
//   }
// }
// export default HomePage;

// Check out my free youtube video on how to build a thumbnail gallery in react
// https://www.youtube.com/watch?v=GZ4d3HEn9zg

class ShoeCarousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        "http://www.clipartroo.com/images/63/slides-shoes-clipart-63697.png",
        "https://ui-ex.com/images/sneaker-vector-vans-3.png",
        "https://www.top5reviewed.com/wp-content/uploads/2016/04/Walking-Shoe-Guide.png",
        "http://hbs.nsp.biz/wp-content/uploads/shoes.png",
        "https://www.top5reviewed.com/wp-content/uploads/2018/12/high-heels.png",
        "https://images.vexels.com/media/users/3/160446/isolated/lists/557e398af227d50e98fe33b6f74255ab-plimsoll-gymshoes-jogging-shoe-trainers-lace-sneaker-flat.png",
        "https://img.icons8.com/cotton/2x/women-shoes.png",
        "http://www.cliparthut.com/clip-arts/344/clothing-winter-boots-icon-android-iconset-icons8-clipart-sRvtHZ.png"
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
          <h1 className="title">ShoeCarousel</h1>

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

export default ShoeCarousel;

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