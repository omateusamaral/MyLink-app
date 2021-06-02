import React from 'react';
import { Text } from 'react-native';
import ListItem from '../../Components/ListItem';
import Menu from '../../Components/Menu';
import StatusBarPage from '../../Components/StatusBarPage';
import {Container,Title,ListLinks} from './styles';
export default function MyLinks() {
 return (
   <Container>
     <StatusBarPage 
     barStyle="light-content"
     backgroundColor="#132742"
     />
     <Menu/>

     <Title>Meus Links</Title>
      <ListLinks
      data={[1,2,3,4,5,6,7,8,9]}
      keyExtractor={(item)=>String(item.id)}
      renderItem={({item})=><ListItem data={item}/>}
      contentContainerStyle={{paddingBottom:22}}
      showsVerticalScrollIndicator={false}
      />
     </Container>
  );
}