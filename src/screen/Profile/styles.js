import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  profile__container: {
    paddingHorizontal: 30,
  },
  profile__title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profile__photo: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10,
    display: 'flex',
    padding: 20,
  },
  profile__photo__name: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: 10,
    fontSize: 19,
  },
  profile__photo__button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  profile__account: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10,
    display: 'flex',
    padding: 20,
  },
  profile__password: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10,
    display: 'flex',
    padding: 20,
  },
  profile__password__h3: {
    fontSize: 20,
    marginBottom: 10,
  },
  input__group: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile__password__input: {
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 0.5,
    marginVertical: 10,
  },
});
