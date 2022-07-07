import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../screen/Home/styles';

export default function Footer() {
  return (
    <View>
      <View style={styles.footer__ending}>
        <View>
          <Image
            source={require('../assets/img/Home/vectortickitz2.png')}
            alt=""
            style={styles.footer__ending__tickitz__img}
          />
          <Text style={styles.footer__ending__tickitz}>
            Stop waiting in line. Buy tickets conveniently, watch movies
            quietly.
          </Text>
        </View>
        <View style={styles.footer__ending__explore}>
          <Text style={styles.footer__ending__explore__h3}>Explore</Text>
          <View style={styles.footer__ending__explore__list}>
            <Text href="" style={styles.footer__ending__explore__list__1}>
              <Text>Home</Text>
            </Text>
            <Text href="" style={styles.footer__ending__explore__list__2}>
              <Text>List Movie</Text>
            </Text>
          </View>
        </View>
        <View style={styles.footer__ending__sponsor}>
          <Text style={styles.footer__ending__explore__h3}>Our Sponsor</Text>
          <View style={styles.footer__ending__sponsor__list}>
            <Image
              source={require('../assets/img/Home/Vector.png')}
              alt=""
              style={styles.footer__ending__sponsor__list__img1}
            />

            <Image
              source={require('../assets/img/Home/Vector-1.png')}
              alt=""
              style={styles.footer__ending__sponsor__list__img2}
            />

            <Image
              source={require('../assets/img/Home/Vector-2.png')}
              alt=""
              style={styles.footer__ending__sponsor__list__img3}
            />
          </View>
        </View>
        <View style={styles.footer__ending__socialMedia}>
          <Text style={styles.footer__ending__explore__h3}>Follow us</Text>
          <View style={styles.footer__ending__socialMedia__list}>
            <View style={styles.footer__ending__socialMedia__list__div}>
              <Image
                source={require('../assets/img/Home/Vector-3.png')}
                alt=""
              />
              <Text href=""> Tickitz Cinema id</Text>
            </View>
            <View style={styles.footer__ending__socialMedia__list__div}>
              <Image
                source={require('../assets/img/Home/bx_bxl-instagram.png')}
                alt=""
              />
              <Text href="">tickitz.id</Text>
            </View>
            <View style={styles.footer__ending__socialMedia__list__div}>
              <Image
                source={require('../assets/img/Home/Vector-6.png')}
                alt=""
              />
              <Text href=""> tickitz.id</Text>
            </View>
            <View style={styles.footer__ending__socialMedia__list__div}>
              <Image source={require('../assets/img/Home/Group.png')} alt="" />
              <Text href="">Tickitz Cinema id</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer__copyright}>
        <Text>© 2020 Tickitz. All Rights Reserved</Text>
      </View>
    </View>
  );
}
