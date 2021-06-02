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
      data={[{id:1,link:'test.com'},{id:2,link:'test2.com'}]}
      keyExtractor={(item)=>String(item.id)}
      renderItem={({item})=><ListItem data={item}/>}
      contentContainerStyle={{paddingBottom:20}}
      showsVerticalScrollIndicator={false}
      />
     </Container>
  );
}