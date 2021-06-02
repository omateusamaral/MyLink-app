import React from 'react';
import { View,Text } from 'react-native';
import {Feather} from '@expo/vector-icons';
import {ContainerButton,Link} from './styles';
export default function ListItem() {
 return (
   <View>
     <ContainerButton activeOpacity={0.9} onPress={()=>{}}>
  <Feather
    name="link"
    color="#FFF"
    size={24}
  />
  <Link numberOfLines={1}>
  https://github.com/omateusamaral
  </Link>
     </ContainerButton>
          </View>
  );
}