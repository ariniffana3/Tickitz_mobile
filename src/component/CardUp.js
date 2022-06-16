import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import styles from '../screen/Home/styles';

function CardUp(props) {
  const {id, name, category, image} = props.data;
  return (
    <View style={styles.main1__img__hover}>
      <Image
        source={
          require('../assets/img/Home/Rectangle119-1.png')
          //   image
          //     ? `${process.env.REACT_APP_CLOUDINARY}${image}`
          //     : 'https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg'
        }
        alt="movie"
      />
      <View>
        <Text style={styles.main1__img__desc}>
          {name ? name : 'Spiderman Home-Coming'}
        </Text>
        <Text style={styles.main1__img__desc__2}>
          {category ? category : 'Action'}
        </Text>
      </View>
      <Button
        style={styles.hover}
        onClick={() => props.handleDetail(id)}
        title="Details"
        color="#5F2EEA">
        Details
      </Button>
    </View>
  );
}

CardUp.defaultProps = {
  category: 'Default Category',
  data: {
    id: '',
    name: '',
    category: '',
  },
};

export default CardUp;
