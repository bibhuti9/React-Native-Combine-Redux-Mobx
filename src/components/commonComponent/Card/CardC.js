import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {FlatList} from 'react-native';
import RenderItemC from './renderItem/RenderItemC';

export default function CardC({data}) {
  const bottomPadding = useBottomTabBarHeight();
  return (
    <FlatList
      contentContainerStyle={{paddingBottom: bottomPadding}}
      bounces={false}
      data={data}
      keyExtractor={item => item._id}
      renderItem={({item}) => <RenderItemC item={item} />}
    />
  );
}
