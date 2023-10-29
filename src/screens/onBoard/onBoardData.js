import {Dimensions, Image, StyleSheet} from 'react-native';

const onBoardData = [
  {
    title: 'SAVINGS',
    subtitle:
      'We can help you save and manage your money when you reduce expenditure such as recurring cost.',
    // tabImage: require("../../assets/images/Tab1.png"),
    image: <Image source={require('../../assets/images/TabPicture1.png')} />,
  },
  {
    title: 'BILLS PAYMENT',
    subtitle:
      'Our e-BillsPay is a convenient and efficient payment service that provides multiple billers and institutions, online monetary collections and payments.',
    image: <Image source={require('../../assets/images/TabPicture2.png')} />,
  },
  {
    title: 'LOANS',
    subtitle:
      'Our low interest personal, car and business loans provide you with the right financing for your needs while guaranteeing you all the security you are looking for.',
    image: <Image source={require('../../assets/images/TabPicture3.png')} />,
  },
  {
    title: 'WALLET',
    subtitle:
      'Our digital wallet (or electronic wallet) is a financial system that runs on any connected device. It securely stores your payment information and passwords for secure, quick and seamless transactions.',
    image: <Image source={require('../../assets/images/TabPicture1.png')} />,
  },
  {
    title: 'INSTANT BANK TRANSFER',
    subtitle:
      'We facilitate transferring money from your wallet to any bank account in the country. It is safer than withdrawing and paying in cash.',
    image: <Image source={require('../../assets/images/TabPicture1.png')} />,
  },
  {
    title: 'LOYALTY & REWARD',
    subtitle:
      'Our loyalty and reward system are freely given without restriction to encourage repeat business.',
    image: <Image source={require('../../assets/images/TabPicture1.png')} />,
  },
];

export const data = onBoardData.map(i => {
  return {
    ...i,
    backgroundColor: '#fff',

    titleStyles: {
      color: 'green',
    },
    subTitleStyles: {
      color: 'black',
    },
  };
});
const styles = StyleSheet.create({
  containerStyles: {
    borderColor: 'red',
    borderWidth: 3,
    backgroundColor: 'yellow',
  },
});
