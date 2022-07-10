import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
  },
  detail__main: {
    display: 'flex',
    justifyContent: 'center',
  },
  main__img: {
    display: 'flex',
    alignItems: 'center',
  },
  main__img__img: {
    height: 366,
    width: 263,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    border: '2 solid #dedede',
    borderRadius: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  main__desc: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  main__desc__title__h1: {
    fontWeight: '700',
    fontSize: 25,
    color: '#14142b',
    paddingBottom: 5,
    paddingTop: 20,
  },
  main__desc__title__h2: {
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 34,
    color: '#4e4b66',
    paddingBottom: 5,
  },
  main__desc__info: {
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  main__desc__info__1: {
    flex: 3,
  },
  main__desc__info__2: {
    flex: 3,
  },
  main__desc__info__h3: {
    fontWeight: '400',
    fontSize: 14,
    color: '#8692a6',
  },
  main__desc__info__h4: {
    fontSize: 15,
    paddingBottom: 30,
  },
  detail__section: {
    backgroundColor: 'rgba(245, 246, 248, 1)',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: 30,
  },
  section__title: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: 0.25,
    color: '#14142b',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: 10,
  },
  section__option: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  section__cinemaBox: {
    display: 'flex',
  },
  section__cinemaBox__item: {
    background: '#ffffff',
    borderRadius: 8,
    paddingVertical: 20,
  },
  section__cinemaBox__cinema: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section__cinemaBox__img: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  section__img1: {
    maxWidth: 150,
    maxHeight: 22,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  section__img2: {
    maxWidth: 120,
    maxHeight: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  section__img3: {
    maxWidth: 80,
    maxHeight: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  section__cinemaBox__title: {
    flex: 1,
  },
  section__cinemaBox__title__h3: {
    fontWeight: '600',
    fontSize: 24,
    color: '#000000',
    paddingBottom: 5,
  },
  section__cinemaBox__title__h4: {
    fontWeight: '300',
    fontSize: 12,
    color: '#6e7191',
  },
  section__cinemaBox__time: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 23,
    color: '#a0a3bd',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 15,
  },
  dark__grey: {
    color: '#4e4b66',
    paddingHorizontal: 5,
    paddingVertical: 16,
  },
  purple: {
    color: '#5f2eea',
    paddingHorizontal: 5,
    paddingVertical: 16,
  },
  section__cinemaBox__price: {
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  section__cinemaBox__price__1: {
    fontWeight: '400',
    fontSize: 16,
    color: '#6b6b6b',
  },
  section__cinemaBox__price__2: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000000',
  },
});
