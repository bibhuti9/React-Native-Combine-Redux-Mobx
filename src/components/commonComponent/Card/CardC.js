import {FlatList} from 'react-native';
import RenderItemC from './renderItem/RenderItemC';

export default function CardC({data}) {
  return (
    <FlatList
      contentContainerStyle={{paddingBottom: 20}}
      bounces={false}
      data={data}
      keyExtractor={item => item._id}
      renderItem={({item}) => <RenderItemC item={item} />}
    />
  );
}
