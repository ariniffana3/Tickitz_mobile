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
  // * {
  //   margin: 0;
  //   padding: 0;
  //   font-family: "mulish", sans-serif;
  // }
  order__main: {
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    // justify-content: space-between;
    paddingHorizontal: 30,
    backgroundColor: '#eff0f7',
  },
  // .main__container1,
  // .main__order {
  //   margin: 0 auto;
  // }
  order__main__h3: {
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 30,
    letterSpacing: 0.25,
    color: '#14142b',
    marginVertical: 15,
  },
  // .main__order,
  // .main__seat,
  // .main__title {
  //   margin-bottom: 40px;
  // }
  main__title__container: {
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    // box-sizing: border-box;
    // boxShadow: '0 8 16 rgba(186, 186, 186, 0.24)'
  },
  // .main__title__container button {
  //   background: #eff0f7;
  //   border: 8px solid #eff0f7;
  //   border-radius: 6,
  //   font-weight: 700;
  //   font-size: 12px;
  //   line-height: 24px;
  //   letter-spacing: 0.75px;
  //   color: #5f2eea;
  //   height: 32px;
  //   width: 139px;
  //   left: 11px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // }
  order__main__h4: {
    fontWeight: '300',
    fontSize: 18,
    color: '#000000',
  },
  // .main__seat__container {
  //   width: 820px;
  //   height: 661px;
  //   background: #ffffff;
  //   border-radius: 10px;
  //   overflow: hidden;
  //   box-shadow: 0px 8px 16px rgba(186, 186, 186, 0.24);
  //   padding: 50px 70px;
  //   box-sizing: border-box;
  // }
  // .card {
  //   border: none;
  // }
  // button {
  //   cursor: pointer;
  // }
  // .main__seat__button button:first-child {
  //   height: 56px;
  //   width: 300px;
  //   border: 2px solid #5f2eea;
  //   background: #eff0f7;
  //   border-radius: 7px;
  //   font-weight: 700;
  //   font-size: 16px;
  //   line-height: 28px;
  //   letter-spacing: 0.75px;
  //   color: #5f2eea;
  // }
  // .main__seat__button button:nth-child(2) {
  //   height: 56px;
  //   width: 300px;
  //   border-radius: 7px;
  //   background: #5f2eea;
  //   font-weight: 700;
  //   font-size: 16px;
  //   line-height: 28px;
  //   letter-spacing: 0.75px;
  //   color: #f7f7fc;
  //   border: none;
  // }
  // .main__seat__button button:hover {
  //   box-shadow: 0px 8px 30px rgba(95, 46, 234, 0.3);
  // }
  // .main__seat__button {
  //   width: 820px;
  //   padding: 30px 5px 40px;
  //   display: flex;
  //   justify-content: space-between;
  // }
  main__order__container: {
    // height: 413,
    // width: 305,
    backgroundColor: '#ffffff',
    // box-shadow: 0px 8px 16px rgba(186, 186, 186, 0.24);
    borderRadius: 10,
  },
  main__order__title: {
    //   display: flex;
    //   flex-direction: column;
    // textAlign: 'center',
    //   flex-wrap: wrap;
    //   padding: 30px 0 30px;
    //   font-weight: 600;
    //   font-size: 24px;
    //   line-height: 34px;
    //   letter-spacing: 0.75px;
    //   color: #14142b;
    // marginLeft: 'auto',
    // marginRight: 'auto',
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
  // .main__order__title__img img {
  //   max-width: 120px;
  //   max-height: 40px;
  // }
  // .main__order__info {
  //   display: flex;
  //   flex-direction: column;
  //   box-sizing: border-box;
  //   justify-content: center;
  //   padding: 0 10% 0px;
  // }
  main__order__info__1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 25,
  },
  // .main__order__info__1 h3 {
  //   font-weight: 400;
  //   font-size: 14px;
  //   line-height: 24px;
  //   letter-spacing: 0.75px;
  //   color: #6b6b6b;
  //   margin: 0;
  // }
  main__order__info__1__h4: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.75,
    color: '#14142b',
  },
  // hr {
  //   margin: 0 !important;
  //   border: 0.5px solid rgba(222, 222, 222, 1);
  // }
  main__order__payment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingBottom: 20,
  },
  main__order__payment__h3: {
    // display: flex;
    fontWeight: '600',
    fontSize: 17,
    // line-height: 34px;
    // letter-spacing: 0.75px;
    color: '#000000',
    // margin: 0;
  },
  main__order__payment__h4: {
    // display: flex;
    fontWeight: '700',
    fontSize: 20,
    // line-height: 30px;
    // letter-spacing: 0.25px;
    color: '#5f2eea',
  },
  //   main {
  //     padding-top: 70px;
  //   }
  //   .main__seat__container {
  //     width: 305px;
  //     height: 244px;
  //   }
  //   .main__seat__container img {
  //     height: 100%;
  //   }
  //   .main__title__container {
  //     width: 305px;
  //     height: 150px;
  //     flex-direction: column;
  //     justify-content: center;
  //   }
  //   .main__title__container h4 {
  //     padding-bottom: 25px;
  //     font-size: 20px;
  //   }
  //   .main__title__container button {
  //     width: 70%;
  //   }
  //   .main__seat__button button:first-child {
  //     display: none;
  //   }
  main__seat__button: {
    marginVertical: 20,
    borderRadius: 5,
  },
  //   .main__seat__button {
  //     justify-content: center;
  //   }
  //   .main__order__container {
  //     width: 305px;
  //   }
  //   /* .main__order__info__1 h3, */
  //   .main__order__info__1 h4 {
  //     text-align: right;
  //   }
  //   .main__order__info {
  //     padding-bottom: 10px;
  //   }
});
