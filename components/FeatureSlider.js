import { SliderBox, autoPlayWithInterval } from "react-native-image-slider-box";
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';


export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        images: [
          "https://www.indiafilings.com/learn/wp-content/uploads/2019/07/National-Creche-Scheme.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR85AUUtJNOFhJ3Qc8ILPje5QuOvMqebGhyKoAKj5bD5NPg7B7m",
          "http://santansun.com/wp-content/uploads/2016/12/636044865926304818-280441533_daycare-1050x700.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAZKU8soTSe9EW2gPl6GvJjq5W3AXf4D8fwek0h33mP8TmmKRX", // Network image
        //   require('./assets/images/girl.jpg'),          // Local image
        ],
      };
    }

    render(){
        return(
          <View style={styles.container}>
            <SliderBox images={this.state.images}
            autoplay={true}
            autoPlayWithInterval={1000}
            sliderBoxHeight={200}

            // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
            
            dotColor="red"
            inactiveDotColor="white"
            paginationBoxVerticalPadding={20}
            circleLoop
            dotStyle={{
                width: 15,
                height: 15,
                borderRadius: 15,
                marginHorizontal: 10,
                padding: 0,
                margin: 0
              }}

            />
          </View>
        )
    }


    // other component code ...
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });