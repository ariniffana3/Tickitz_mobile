import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
  },
  detail__main: {
    // padding: 150px 10% 0;
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
  // .main__img__img img {
  //   height: 373px;
  //   max-height: 373px;
  //   max-width: 247px;
  // }
  main__desc: {
    paddingLeft: 30,
    paddingRight: 30,
    // flex: 4,
    // padding-left: 50
  },
  main__desc__title__h1: {
    fontWeight: '700',
    fontSize: 25,
    // line-height: 34px,
    // letter-spacing: 1px,
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
    // justifyContent: 'flex-start',
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
    // line-height: 24px;
    // letter-spacing: 0.75px;
    color: '#8692a6',
  },
  main__desc__info__h4: {
    // font-weight: 400;
    fontSize: 15,
    // line-height: 32px;
    // letter-spacing: 0.75px;
    // color: '#121212',
    paddingBottom: 30,
  },
  // .main__desc__synopsis {
  //   padding: 30px 0;
  // }
  // .main__desc__synopsis h3 {
  //   font-weight: 600;
  //   font-size: 20px;
  //   line-height: 34px;
  //   letter-spacing: 0.5px;
  //   color: #000000;
  //   padding-bottom: 10px;
  // }
  // .main__desc__synopsis h4 {
  //   font-weight: 400;
  //   font-size: 16px;
  //   line-height: 32px;
  //   letter-spacing: 0.75px;
  //   color: #4e4b66;
  // }
  detail__section: {
    backgroundColor: 'rgba(245, 246, 248, 1)',
    display: 'flex',
    justifyContent: 'center',
    /* align-items: center; */
    flexDirection: 'column',
    paddingHorizontal: 30,
  },
  section__title: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: 0.25,
    color: '#14142b',
    // padding: 80px 0 50px 0;
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: 10,
  },
  section__option: {
    // padding: 0 0 7%;
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  // .section__option input,
  // .section__option select {
  //   background: #eff0f6;
  //   border-radius: 6px;
  //   font-weight: 600;
  //   font-size: 16px;
  //   line-height: 28px;
  //   letter-spacing: 0.25px;
  //   color: #4e4b66;
  //   width: 284px;
  //   height: 56px;
  //   border: none;
  //   padding: 0 20px;
  //   box-sizing: border-box;
  //   border-radius: 10px;
  // }
  // .section__option input {
  //   margin-right: 20px;
  // }
  section__cinemaBox: {
    display: 'flex',
    // flexWrap: wrap;
    // flex-direction: row;
    // justify-content: space-around,
    // align-items: stretch;
  },
  section__cinemaBox__item: {
    background: '#ffffff',
    borderRadius: 8,
    // width: 381,
    // height: 350,
    paddingVertical: 20,
    // box-sizing: border-box;
    // box-shadow: 0px 8px 16px 0px rgba(186, 186, 186, 0.24);
    // margin-bottom: 50px;
  },
  section__cinemaBox__cinema: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 20,
  },
  section__cinemaBox__img: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  section__img1: {
    maxWidth: 150,
    maxHeight: 22,
    // width: 90,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  section__img2: {
    maxWidth: 120,
    maxHeight: 30,
    // width: 90,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  section__img3: {
    maxWidth: 80,
    maxHeight: 30,
    // width: 90,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  section__cinemaBox__title: {
    flex: 1,
  },
  section__cinemaBox__title__h3: {
    fontWeight: '600',
    fontSize: 24,
    // line-height: 32px;
    // letter-spacing: 0.75px;
    color: '#000000',
    paddingBottom: 5,
  },
  section__cinemaBox__title__h4: {
    fontWeight: '300',
    fontSize: 12,
    // line-height: 18px;
    // letter-spacing: 0.75px;
    color: '#6e7191',
  },
  // hr {
  //   border: 0.5px solid rgba(222, 222, 222, 1);
  //   margin: 0 14px;
  // }
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
  // .section__cinemaBox__time div {
  //   padding: 8px 16px;
  // }
  dark__grey: {
    color: '#4e4b66',
    paddingHorizontal: 5,
    paddingVertical: 16,
  },
  // .young__grey {
  //   color: #a0a3bd;
  // }
  purple: {
    color: '#5f2eea',
    paddingHorizontal: 5,
    paddingVertical: 16,
  },
  section__cinemaBox__price: {
    // padding: 25px 15px 0px;
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
  // .section__cinemaBox__item button {
  //   margin: 0 14px;
  //   background: #5f2eea;
  //   border-radius: 4px;
  //   width: 300px;
  //   height: 40px;
  //   font-weight: 700;
  //   font-size: 14px;
  //   color: #f7f7fc;
  // }
  // .section__cinemaBox__item button:hover {
  //   box-shadow: 0px 8px 24px rgba(95, 46, 234, 0.24);
  // }
  // button {
  //   cursor: pointer;
  // }
  // .disabled {
  //   opacity: 0.6;
  //   cursor: not-allowed;
  // }
  // .footer__ending {
  //   height: 330px;
  //   display: flex;
  //   width: 80%;
  //   margin: 0 auto;
  //   padding-top: 50px;
  // }
  // .footer__ending__tickitz {
  //   flex: 1.25;
  //   font-weight: 400;
  //   font-size: 16px;
  //   line-height: 32px;
  //   letter-spacing: 0.75px;
  //   color: #6e7191;
  // }
  // .footer__ending__tickitz img {
  //   width: 170px;
  //   margin-bottom: 20px;
  // }
  // .footer__ending__explore h3,
  // .footer__ending__socialMedia h3,
  // .footer__ending__sponsor h3 {
  //   font-weight: 700;
  //   font-size: 16px;
  //   line-height: 20px;
  //   letter-spacing: 0.5px;
  //   color: #000000;
  //   margin-bottom: 40px;
  // }
  // .footer__ending__explore {
  //   flex: 0.75;
  // }
  // .footer__ending__explore__list__1 p {
  //   margin-bottom: 1rem;
  // }
  // .footer__ending__explore__list a {
  //   font-size: 14px;
  //   line-height: 18px;
  //   color: #6e7191;
  //   text-decoration: none;
  // }
  // .footer__ending__sponsor {
  //   flex: 1;
  // }
  // .footer__ending__sponsor img {
  //   margin-bottom: 30px;
  // }
  // .footer__ending__sponsor__list {
  //   display: flex;
  //   flex-direction: column;
  // }
  // .footer__ending__sponsor__list img {
  //   height: 30px;
  // }
  // .footer__ending__socialMedia a {
  //   flex: 1;
  //   font-size: 14px;
  //   line-height: 18px;
  //   color: #6e7191;
  //   text-decoration: none;
  // }
  // .footer__ending__socialMedia img {
  //   padding-right: 10px;
  // }
  // .footer__ending__socialMedia__list div {
  //   margin-bottom: 30px;
  // }
  // .footer__copyright {
  //   text-align: center;
  //   font-weight: 400;
  //   font-size: 14px;
  //   line-height: 18px;
  //   letter-spacing: 0.5px;
  //   color: #4e4b66;
  //   padding: 40px;
  // }
  // ::-webkit-scrollbar {
  //   width: 15px;
  // }
  // /* Track */
  // ::-webkit-scrollbar-track {
  //   background: #f1f1f1;
  // }
  // /* Handle */
  // ::-webkit-scrollbar-thumb {
  //   background: rgb(223, 222, 222);
  // }
  // /* Handle on hover */
  // ::-webkit-scrollbar-thumb:hover {
  //   background: rgb(204, 204, 204);
  // }
  // /* mobile  */
  // .viewMore {
  //   display: none;
  //   font-weight: 600;
  //   font-size: 13px;
  //   letter-spacing: 0.75px;
  //   color: #5f2eea;
  // }
  // .viewMore p {
  //   padding-top: 2px;
  // }
  // .viewMore__line {
  //   width: 100px;
  //   height: 1px;
  //   margin: 11px 10px 35px;
  //   background-color: #5f2eea;
  //   border-radius: 5px;
  //   flex: 2;
  // }
  // @media (max-width: 575.98px) {
  //   header {
  //     position: static;
  //   }
  //   .header {
  //     width: 100%;
  //     padding-left: 2rem;
  //   }
  //   .header__img {
  //     height: 40px;
  //   }
  //   .mobile__header__li {
  //     pointer-events: none;
  //     opacity: 0;
  //   }
  //   header button {
  //     display: none;
  //   }
  //   .header__hamburger {
  //     display: block;
  //     margin-right: 7%;
  //     margin-top: 15px;
  //     cursor: pointer;
  //   }
  //   .header__hamburger__line {
  //     height: 2.5px;
  //     width: 20px;
  //     border-radius: 5px;
  //     background-color: #5f2eae;
  //   }
  //   .header__hamburger:hover {
  //     box-shadow: 0px 8px 30px rgba(95, 46, 234, 0.3);
  //   }
  //   .header__hamburger__line:first-child,
  //   .header__hamburger__line:nth-child(2) {
  //     margin-bottom: 5px;
  //   }
  //   .header__menu {
  //     position: absolute;
  //     top: 100px;
  //     margin: 0 auto;
  //     z-index: 1;
  //   }
  //   .header__menu div {
  //     background-color: white;
  //     border: 2px solid #d4d1d1;
  //     padding: 20px 0;
  //     font-size: 16px;
  //     text-align: center;
  //   }
  //   .header__menu div:last-child {
  //     font-size: 13px;
  //     color: #6e7191;
  //   }
  //   main {
  //     flex-direction: column;
  //     padding: 30px 10%;
  //   }
  //   .main__img__img {
  //     height: 366px;
  //     width: 263px;
  //     margin-right: 0;
  //   }
  //   .main__img__img img {
  //     width: 75%;
  //     height: 80%;
  //   }
  //   .main__desc {
  //     padding: 40px 0 0;
  //   }
  //   .main__desc__title {
  //     text-align: center;
  //   }
  //   .main__desc__title h1 {
  //     font-size: 20px;
  //     padding-bottom: 0px;
  //   }
  //   .main__desc__info__1 {
  //     flex: 1;
  //   }
  //   .main__desc__info__2 {
  //     flex: 1;
  //   }
  //   .section__title {
  //     padding: 80px 0 40px 0;
  //   }
  //   .section__option input,
  //   .section__option select {
  //     margin: 0 10px 20px;
  //     width: 250px;
  //     height: 45px;
  //   }
  //   .section__cinemaBox__item:nth-child(3),
  //   .section__cinemaBox__item:nth-child(4),
  //   .section__cinemaBox__item:nth-child(5),
  //   .section__cinemaBox__item:nth-child(6) {
  //     display: none;
  //   }
  //   .section__cinemaBox__item {
  //     width: 305px;
  //   }
  //   .section__img {
  //     width: 80px;
  //   }
  //   hr {
  //     margin: 0;
  //   }
  //   .section__cinemaBox__cinema {
  //     margin-bottom: 15px;
  //   }
  //   .section__cinemaBox__title h4 {
  //     font-size: 10px;
  //   }
  //   .section__cinemaBox__time div {
  //     padding-top: 6px;
  //     padding-bottom: 6px;
  //   }
  //   .section__cinemaBox__price {
  //     padding: 20px 15px 20px;
  //   }
  //   .section__cinemaBox__item button {
  //     width: 90%;
  //     height: 35px;
  //   }
  //   .viewMore {
  //     display: flex;
  //   }
  //   .footer__ending {
  //     flex-direction: column;
  //     height: fit-content;
  //   }
  //   .footer__ending__tickitz,
  //   .footer__ending__explore,
  //   .footer__ending__socialMedia,
  //   .footer__ending__sponsor {
  //     margin-bottom: 60px;
  //   }
  //   .footer__ending__explore__list {
  //     display: flex;
  //     flex-direction: row;
  //   }
  //   .footer__ending__explore__list__1 {
  //     flex: 2;
  //   }
  //   .footer__ending__explore__list__2 {
  //     flex: 6;
  //   }
  //   .footer__ending__sponsor__list__1 p {
  //     margin-bottom: 1rem;
  //   }
  //   .footer__ending__sponsor__list div {
  //     margin-right: 20px;
  //   }
  //   .footer__ending__sponsor__list {
  //     flex-direction: row;
  //   }
  //   .footer__ending__sponsor__list img {
  //     height: 20px;
  //   }
  //   .footer__ending__socialMedia a {
  //     display: none;
  //   }
  //   .footer__ending__socialMedia__list {
  //     display: flex;
  //     flex-direction: row;
  //   }
  //   .footer__ending__socialMedia__list div {
  //     margin-right: 40px;
  //   }
  //   .footer__copyright {
  //     text-align: left;
  //     margin-top: 0;
  //   }
  // }
});
