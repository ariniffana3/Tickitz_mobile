import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import styles from '../screen/Home/styles';

function CardDown(props) {
  const {id, name, category, image} = props.data;
  return (
    <View className={`${styles.main1__img} ${styles.addition__main1__img}`}>
      <Image
        source={
          require('../assets/img/Home/Rectangle119-1.png')
          //   image
          //     ? `${process.env.REACT_APP_CLOUDINARY}${image}`
          //     : 'https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg'
        }
        alt="movie"
      />
      <View className={styles.main1__img__desc}>
        <Text>{name}</Text>
        <Text>{category}</Text>
      </View>
      {props.isPageManageMovie ? (
        <View>
          <Button color="#5F2EEA" onPress={() => props.setUpdate(props.data)}>
            update
          </Button>
          <Button color="#5F2EEA" onPress={() => props.handleDelete(id)}>
            delete
          </Button>
        </View>
      ) : (
        <Button
          color="#5F2EEA"
          onPress={() => props.handleDetail(id)}
          title="Details"
        />
      )}
    </View>
  );
}

CardDown.defaultProps = {
  category: 'Default Category',
  data: {
    id: '',
    name: '',
    category: '',
  },
};

export default CardDown;
