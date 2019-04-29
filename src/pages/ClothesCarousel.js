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

class ClothesCarousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        "https://images.vexels.com/media/users/3/142858/isolated/lists/96ccb4d1a2a1817547a6d4e56a960ddc-blue-shirt-clothes.png",
        "http://www.myiconfinder.com/uploads/iconsets/256-256-b910484213ee753c725545d86998d296-business.png",
        "https://images.vexels.com/media/users/3/142984/isolated/lists/90bb441cc95b23918342b0fdb368c3e1-vest-clothes.png",
        "http://www.myiconfinder.com/uploads/iconsets/256-256-b1a94e089facc31e9b6f13e877f77e87.png",
        "https://vignette.wikia.nocookie.net/shop-heroes/images/4/45/Mantle.png/revision/latest?cb=20151209172307",
        "http://icons.iconarchive.com/icons/google/noto-emoji-people-clothing-objects/256/12178-jeans-icon.png",
        "https://shopfaithandgrace.com/files/2014/04/female-dress.png",
        "https://iconfree.net/256x256/2018/8/6/baby-clothing-baby-clothes-kid-and-baby-icon-4988-512x512.png"
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
          <h1 className="title">Clothes</h1>

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

export default ClothesCarousel;

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