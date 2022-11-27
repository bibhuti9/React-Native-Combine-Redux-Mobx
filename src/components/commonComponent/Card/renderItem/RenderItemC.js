import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import TextC from '../../Text/TextC';
import {push} from '../../../../utilities/navigation';

export default function RenderItemC({item}) {
  const onPress = () => {
    push('Profile');
  };
  return (
    <TouchableOpacity style={styles.cardDontainer} onPress={onPress}>
      {/*Top */}
      <View style={styles.topCardContainer}>
        <View>
          <Image source={{uri: item.mimages[0]}} style={styles.cardImage} />
        </View>
        <View style={styles.cardInfoContainer}>
          <TextC options={{text: item.mname}} />
          <View style={styles.priceAndReviewStyle}>
            <TextC options={{text: `⭐ ${item.rating}`}} />
            <TextC options={{text: `₹ ${item.mprice}`}} />
          </View>
        </View>
      </View>
      {/*Bottom */}
    </TouchableOpacity>
  );
}
