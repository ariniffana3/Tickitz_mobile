import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // * {
  //   margin: 0;
  //   padding: 0;
  //   font-family: "mulish", sans-serif;
  // }
  // .payment__header {
  //   height: 104px;
  //   width: 100%;
  //   background-color: #ffffff;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   flex-wrap: nowrap;
  //   position: fixed;
  //   z-index: 1;
  // }
  payment__main: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // padding: 150px 9% 40px,
    backgroundColor: '#eff0f7',
    paddingHorizontal: 30,
  },
  // .main__container1,
  // .main__personal {
  //   display: flex;
  //   flex-direction: column;
  // }
  // .payment__main h3 {
  //   font-weight: 700;
  //   font-size: 24px;
  //   line-height: 30px;
  //   letter-spacing: 0.25px;
  //   color: #14142b;
  //   margin: 0 0 20px 15px;
  // }
  // .main__personal,
  // .main__method,
  // .main__info {
  //   margin-bottom: 40px;
  // }
  // .main__info__container {
  //   width: 690px;
  //   height: 413px;
  //   background: #ffffff;
  //   box-shadow: 0px 8px 16px rgba(186, 186, 186, 0.24);
  //   border-radius: 10px;
  //   padding: 24px 40px;
  //   box-sizing: border-box;
  // }
  // .main__info {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   padding: 0 0 24px;
  // }
  // .main__info__1 {
  //   display: flex;
  //   justify-content: space-between;
  //   padding: 24px 0;
  // }
  // .main__info__1 h3 {
  //   font-weight: 400;
  //   font-size: 17px;
  //   line-height: 25px;
  //   letter-spacing: 0.25px;
  //   color: #6b6b6b;
  //   margin: 0 !important;
  // }
  // .main__info__1 h4 {
  //   font-weight: 400;
  //   font-size: 17px;
  //   line-height: 25px;
  //   letter-spacing: 0.25px;
  //   color: #000000;
  //   margin: 0 !important;
  // }
  main__info__price: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  main__info__price__h4: {
    fontWeight: '600',
    fontSize: 22,
    // line-height: 30,
    // letter-spacing: 0.25,
    color: '#000000',
  },
  // hr {
  //   /* border: 1px solid rgba(230, 230, 230, 1) !important; */
  //   margin: 0 !important;
  // }
  // .main__method__container {
  //   width: 690px;
  //   height: 368px;
  //   background: #ffffff;
  //   border-radius: 10px;
  //   box-shadow: 0px 8px 16px rgba(186, 186, 186, 0.24);
  //   padding: 56px 44px 0;
  //   box-sizing: border-box;
  // }
  // .main__method__containerimg {
  //   display: flex;
  //   flex-direction: row;
  //   flex-wrap: wrap;
  //   justify-content: space-between;
  // }
  // .main__method__img {
  //   width: 136px;
  //   height: 56px;
  //   border: 2px solid #dedede;
  //   box-sizing: border-box;
  //   border-radius: 8px;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   margin-bottom: 32px;
  // }
  // .main__method__or {
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: space-between;
  //   align-items: center;
  //   font-weight: 400;
  //   font-size: 16px;
  //   line-height: 28px;
  //   letter-spacing: 0.75px;
  //   color: #a0a3bd;
  //   flex-wrap: nowrap;
  // }
  // .main__method__or p {
  //   margin-bottom: 0 !important;
  // }
  // .main__method__or__line {
  //   width: 45%;
  //   height: 1px;
  //   background-color: #dedede;
  // }
  // .main__method__text {
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: center;
  //   margin-top: 24px;
  // }
  // .main__method__text p:first-child {
  //   font-weight: 400;
  //   font-size: 16px;
  //   line-height: 28px;
  //   letter-spacing: 0.75px;
  //   color: #6e7191;
  //   padding-right: 5px;
  // }
  // .main__method__text p:last-child a {
  //   font-weight: 700;
  //   font-size: 16px;
  //   line-height: 28px;
  //   letter-spacing: 0.75px;
  //   color: #5f2eea;
  //   text-decoration: none;
  // }
  main__personal__h3: {
    fontWeight: '400',
    fontSize: 16,
    // line-height: 20px;
    // letter-spacing: 0.25px;
    color: '#696f79',
    marginBottom: 10,
  },
  main__personal__container: {
    //   width: 469px;
    // height: 410,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   padding: 10px 5% 0;
    //   box-sizing: border-box;
    //   box-shadow: 0px 8px 16px rgba(186, 186, 186, 0.24);
    //   display: flex;
    //   justify-content: center;
    //   flex-direction: column;
    width: '100%',
    marginBottom: 20,
    //     flex-direction: column;
    //     justify-content: center;
    //     margin: auto;
  },
  input__group: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  alert__warning: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  // .main__personal__container h4 {
  //   font-weight: 600;
  //   font-size: 24px;
  //   line-height: 30px;
  //   letter-spacing: 0.25px;
  //   color: #000000;
  // }
  // .mb_3 input {
  //   height: 45px;
  //   width: 400px;
  //   border-radius: 8px;
  //   border: 1px solid rgba(222, 222, 222, 1);
  //   padding-left: 20px;
  //   font-weight: 400;
  //   font-size: 15px;
  //   line-height: 23px;
  //   letter-spacing: 0.75px;
  //   color: #4e4b66;
  //   background-color: #fff !important;
  // }
  // .mb_3 input::placeholder {
  //   font-weight: 400;
  //   font-size: 15px;
  //   line-height: 23px;
  //   letter-spacing: 0.75px;
  //   color: #4e4b66;
  // }
  // .input_group span {
  //   background: #fff;
  //   font-weight: 400;
  //   font-size: 15px;
  //   line-height: 23px;
  //   letter-spacing: 0.75px;
  //   color: #4e4b66;
  // }
  // .input_group {
  //   width: 400px !important;
  // }
  // .alert {
  //   margin-bottom: 0;
  //   margin-top: 30px !important;
  //   width: 400px !important;
  // }
  // .alert img {
  //   padding: 0 10px 0 5px;
  // }
  // button {
  //   cursor: pointer;
  // }
  // .main__button button:first-child {
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
  // .main__button button:nth-child(2) {
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
  // .main__button button:hover {
  //   box-shadow: 0px 8px 30px rgba(95, 46, 234, 0.3);
  // }
  // .main__button {
  //   width: 710px;
  //   padding: 30px 0 40px 0;
  //   display: flex;
  //   justify-content: space-between;
  //   box-sizing: border-box;
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
  //   height: 20px;
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
  //   ul {
  //     padding-left: 0;
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
  //   .header__right {
  //     padding-right: 32px;
  //   }
  //   .header__right__desktop {
  //     display: none;
  //   }
  //   main {
  //     padding-top: 0px;
  //     padding-left: 5%;
  //     padding-right: 5%;
  //   }
  //   .main__container1 {
  //     display: flex;
  //     flex-direction: column;
  //     width: 100%;
  //   }
  //   .main__info__h3,
  //   .main__info__11,
  //   .main__info__12,
  //   .main__info__13,
  //   .main__info__14,
  //   hr {
  //     display: none;
  //   }
  //   main h3 {
  //     font-size: 20px;
  //   }
  //   .main__info__container {
  //     position: relative;
  //     right: 5.5%;
  //     width: 111%;
  //     height: fit-content;
  //     padding-top: 0;
  //     padding-bottom: 0;
  //     border-radius: 0 0 35px 35px;
  //   }
  //   .main__info__price {
  //     padding: 20px 20px 25px;
  //   }
  //   .main__method__container {
  //     width: 100%;
  //     height: 240px;
  //     padding: 20px 30px 0;
  //   }
  //   .main__method__img {
  //     width: 80px;
  //     height: 32px;
  //     margin: 15px 0 10px;
  //   }
  //   .main__method__img img {
  //     height: 16px;
  //   }
  //   .main__method__img:nth-child(2),
  //   .main__method__img:nth-child(7) {
  //     display: none;
  //   }
  //   .main__method__text {
  //     margin: 15px 0 50px;
  //   }
  //   .mb_3 input,
  //   .alert {
  //     width: 260px;
  //   }
  //   .input_group {
  //     width: 260px !important;
  //   }
  //   .alert {
  //     width: 260px !important;
  //   }
  //   .main__personal {
  //     margin-left: auto;
  //     margin-right: auto;
  //   }
  //   .main__personal__container {
  //     width: 318px;
  //     flex-direction: column;
  //     justify-content: center;
  //     margin: auto;
  //   }
  //   .main__personal__container h4 {
  //     padding-bottom: 10px;
  //   }
  //   form {
  //     margin: 0 auto;
  //   }
  //   .main__personal__container {
  //     padding-top: 20px;
  //   }
  //   .main__button button:first-child {
  //     display: none;
  //   }
  //   .main__button button:last-child {
  //     width: 305px;
  //     padding-left: 0;
  //     margin-right: auto;
  //     margin-left: auto;
  //   }
  //   .main__button {
  //     padding: 0;
  //     margin: auto;
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
