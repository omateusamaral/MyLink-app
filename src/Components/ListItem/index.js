import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ContainerButton, Link,ActionContainer } from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
export default function ListItem({ data, selectedItem, deleteItem }) {
  function rightActions(){
    return(
      <ActionContainer onPress={()=>deleteItem(data.id)}>
      <Feather
      name="trash"
      color="#fff"
      size={24}
      
      />
      </ActionContainer>
    )
  }
  return (
    <View>
      <Swipeable renderRightActions={rightActions}>
        <ContainerButton activeOpacity={0.9} onPress={() => selectedItem(data)}>
          <Feather
            name="link"
            color="#FFF"
            size={24}
          />
          <Link numberOfLines={1}>
            {data.long_url}
          </Link>
        </ContainerButton>
      </Swipeable>
    </View>
  );
}