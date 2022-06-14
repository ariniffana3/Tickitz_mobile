import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import styles from './styles';

export default function Home() {
  return (
    <View>
      <Text>home</Text>

      {/* <View styles={styles.header__first}>
        <View styles={styles.header} id="header">
          <View styles={styles.header__left}>
            <ul styles={styles.ul}>
              <li styles={styles.header__li}>
                <a href="" styles={styles.header__li__link}>
                  <Image
                    src="img/Home/vector tickitz 2.png"
                    alt="tickitz"
                    styles={styles.header__img}
                  />
                </a>
              </li>
              <li styles={styles.header__li}>
                <a
                  href=""
                  styles={`${styles.header__li__link} ${styles.mobile__header__li}`}>
                  Home
                </a>
              </li>
              <li styles={styles.header__li}>
                <a
                  href=""
                  styles={`${styles.header__li__link} ${styles.mobile__header__li}`}>
                  List Movie
                </a>
              </li>
            </ul>
          </View>
          <View styles={styles.header__hamburger} onclick="showMenu">
            <View styles={styles.header__hamburger__line} />
            <View styles={styles.header__hamburger__line} />
            <View styles={styles.header__hamburger__line} />
          </View>
          <Button styles={styles.header__button} onClick={signIn}>
            Sign In
          </Button>
        </View>
        <View
          styles={styles.header__menu}
          id="header__menu"
          style={{display: 'none'}}>
          <View styles={styles.header__menu__home}>Home</View>
          <View styles={styles.header__menu__listMovie}>List Movie</View>
          <View styles={styles.header__menu__signIn}>Sign In</View>
          <View styles={styles.header__menu__copyright}>
            © 2020 Tickitz. All Rights Reserved
          </View>
        </View>
      </View>
      <View styles={styles.home__section}>
        <View styles={styles.section__title}>
          <View styles={styles.section__title__container}>
            <p styles={styles.sectioin__title__desc}>
              Nearest cimena, Newest movie
            </p>
            <h1 styles={styles.sectioin__title__desc}>Find out now!</h1>
          </View>
        </View>
        <View styles={styles.section__img}>
          <View
            styles={`${styles.section__img__container} ${styles.section__img__1}`}>
            <Image src="img/Home/Rectangle 31.png" alt="images" />
            <View styles={styles.section__img__overlay} />
          </View>
          <View
            styles={`${styles.section__img__container} ${styles.section__img__2}`}>
            <Image src="img/Home/Rectangle 32.png" alt="images" />
            <View styles={styles.section__img__overlay} />
          </View>
          <View
            styles={`${styles.section__img__container} ${styles.section__img__3}`}>
            <Image src="img/Home/Rectangle 33.png" alt="images" />
            <View styles={styles.section__img__overlay} />
          </View>
        </View>
      </View>
      <View styles={styles.main1}>
        <View styles={styles.main1__title}>
          <View styles={styles.main__title__p1}>
            <p>
              <a href=""> Now Showing</a>
            </p>
            <View styles={styles.main__title__p1__line} />
          </View>

          <p>
            <a href="" onClick={handleViewAll}>
              {' '}
              view all
            </a>
          </p>
        </View>
        <View styles={styles.main1__img__container__hover}>
          <ul>
            {data.map(item => (
              <li key={item.id}>

                <CardUp
                  data={item}
                  handleDetail={handleDetailMovie}
                  // dataUser={dataUser}
                  // month={newData}
                />
              </li>
            ))}
          </ul>
        </View>
      </View>
      <View styles={`${styles.main1} ${styles.addition__main1}`}>
        <View styles={styles.main1__title}>
          <View styles={styles.main__title__p1}>
            <p>
              <a href=""> Upcoming Movie</a>
            </p>
            <View styles={styles.main1__title__p1__line} />
          </View>
          <p>
            <a href="" onClick={handleViewAll}>
              {' '}
              view all
            </a>
          </p>
        </View>
        <View styles={styles.main1__month__container}>
          <ul>
            {month.map(item => (
              <li key={item.number}>
                <View
                  styles={`${styles.main1__month} ${
                    item.number == releaseDate.date
                      ? styles.main1__month__active
                      : styles.main1__month
                  }`}
                  onClick={() => {
                    setReleaseDate({date: item.number});
                  }}>
                  {item.title}
                </View>
              </li>
            ))}
          </ul>
        </View>
        <View styles={styles.main1__img__container}>
          <ul>
            {dataRelease.map(item => (
              <li key={item.id}>
                <CardDown
                  data={item}
                  handleDetail={handleDetailMovie}
                  // dataUser={dataUser}
                  // month={newData}
                />
              </li>
            ))}
          </ul>
        </View>
      </View>
      <View>
        <View styles={styles.footer__subscription}>
          <View styles={styles.footer__subscription__text__up}>
            <p>Be the vanguard of the</p>
            <p>Moviegoers</p>
          </View>
          <View styles={styles.footer__subscription__submit}>
            <input
              type="email"
              placeholder="Type your email"
              styles={'form-control'}
            />
            <button>Join now</button>
          </View>
          <p styles={styles.footer__subscription__text__down}>
            By joining you as a Tickitz member, <br />
            will always send you the latest updates via email.
          </p>
        </View>
        <View styles={styles.footer__ending}>
          <View styles={styles.footer__ending__tickitz}>
            <Image src="img/Home/vector tickitz 2.png" alt="" />
            <p>
              Stop waiting in line. Buy tickets <br />
              conveniently, watch movies quietly.
            </p>
          </View>
          <View styles={styles.footer__ending__explore}>
            <h3>Explore</h3>
            <View styles={styles.footer__ending__explore__list}>
              <a href="" styles={styles.footer__ending__explore__list__1}>
                <p>Home</p>
              </a>
              <a href="" styles={styles.footer__ending__explore__list__2}>
                <p>List Movie</p>
              </a>
            </View>
          </View>
          <View styles={styles.footer__ending__sponsor}>
            <h3>Our Sponsor</h3>
            <View styles={styles.footer__ending__sponsor__list}>
              <View>
                <Image src="img/Home/Vector.png" alt="" />
              </View>
              <View>
                <Image src="img/Home/Vector-1.png" alt="" />
              </View>
              <View>
                <Image src="img/Home/Vector-2.png" alt="" />
              </View>
            </View>
          </View>
          <View styles={styles.footer__ending__socialMedia}>
            <h3>Follow us</h3>
            <View styles={styles.footer__ending__socialMedia__list}>
              <View>
                <Image src="img/Home/Vector-3.png" alt="" />
                <a href=""> Tickitz Cinema id</a>
              </View>
              <View>
                <Image src="img/Home/bx_bxl-instagram.png" alt="" />
                <a href="">tickitz.id</a>
              </View>
              <View>
                <Image src="img/Home/Vector-6.png" alt="" />
                <a href=""> tickitz.id</a>
              </View>
              <View>
                <Image src="img/Home/Group.png" alt="" />
                <a href="">Tickitz Cinema id</a>
              </View>
            </View>
          </View>
        </View>
        <View styles={styles.footer__copyright}>
          © 2020 Tickitz. All Rights Reserved
        </View>
      </View> */}
    </View>
  );
}
