import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  containerSeat: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
  order__main: {
    paddingHorizontal: 30,
    backgroundColor: '#eff0f7',
  },
  order__main__h3: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 30,
    letterSpacing: 0.25,
    color: '#14142b',
    marginVertical: 15,
  },
  main__title__container: {
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  order__main__h4: {
    fontWeight: '300',
    fontSize: 18,
    color: '#000000',
  },
  main__order__container: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  main__order__title_text: {
    fontWeight: '600',
    fontSize: 24,
    color: '#14142b',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
  },
  main__order__title__img: {
    paddingTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  main__order__info__1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 25,
  },
  main__order__info__1__h4: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.75,
    color: '#14142b',
  },
  main__order__payment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
  main__order__payment__h3: {
    fontWeight: '600',
    fontSize: 17,
    color: '#000000',
  },
  main__order__payment__h4: {
    fontWeight: '700',
    fontSize: 20,
    color: '#5f2eea',
  },
  main__seat__button: {
    marginVertical: 20,
    borderRadius: 5,
  },
});
