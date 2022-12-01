import {View, StyleSheet, ImageBackground, Image, Text} from 'react-native';
import {COLORS, SIZES, textVarient} from '../../../theme/color';
import {background, user} from '../../../theme/icon';
import {userInfo} from '../../../data/dummyData';
export default function HeaderDrawer() {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.userInfoContainer}>
          <Image source={user} style={styles.logoStyle} />
          <Text
            style={[
              styles.textStyle,
              {fontSize: textVarient.M, letterSpacing: 3},
            ]}>
            {userInfo.mname}
          </Text>
          <Text style={styles.textStyle}>{userInfo.tags}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: COLORS.grey0,
  },
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  logoStyle: {
    height: 80,
    width: 80,
    borderRadius: 50,
  },
  textStyle: {
    color: COLORS.white,
  },
  userInfoContainer: {
    padding: SIZES.padding,
  },
});
