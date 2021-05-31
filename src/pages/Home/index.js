import React from 'react';
import { View,Text} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import StatusBarPage from '../../Components/StatusBarPage';
import Menu from '../../Components/Menu';
import {Feather} from '@expo/vector-icons';
import {
  ContainerLogo, 
  Logo,
   Title,
   SubTitle,
   ContainerContent,
   ContainerInput,
   BoxIcon,
   Input,
   ButtonLink,
   ButtonLinkText
  
  } from './styles';
export default function Home() {
 return (
   <LinearGradient
   colors={['#1DDBB9','#132742']}
   style={{flex:1,justifyContent:'center'}}
   >
     <StatusBarPage 
     barStyle="light-content"
     backgroundColor="#1ddbb9"
     />
     <Menu/>
     <ContainerLogo>
       <Logo source={require('../../assets/Logo.png')} resizeMode="contain" />
     </ContainerLogo>
     <ContainerContent>
       <Title>MyLink</Title>
       <SubTitle>Cole seu link para encutar</SubTitle>

       <ContainerInput>
         <BoxIcon>
          <Feather name="link" size={22} color="#FFF"/>
         </BoxIcon>
         <Input
          placeholder="Cole seu link aqui..."
          placeholderTextColor="white"
          />
       </ContainerInput>
       <ButtonLink>
         <ButtonLinkText>Gerar Link</ButtonLinkText>
       </ButtonLink>
     </ContainerContent>

     </LinearGradient>
  );
}