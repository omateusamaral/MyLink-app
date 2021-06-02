import React,{useState} from 'react';
import { Keyboard, TouchableWithoutFeedback,KeyboardAvoidingView, Platform,Modal} from 'react-native';
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
import ModalLink from '../../Components/ModalLink';

export default function Home() {
  const [input,SetInput] = useState();
  const [modalVisible,SetModalVisible] = useState(false);

  function handleShortLink(){
    SetModalVisible(true);
  }

 return (
   <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
   <LinearGradient
   colors={['#1DDBB9','#132742']}
   style={{flex:1,justifyContent:'center'}}
   >
     <StatusBarPage 
     barStyle="light-content"
     backgroundColor="#1ddbb9"
     />
     <Menu/>
     <KeyboardAvoidingView
     behavior={Platform.OS==='android'?'padding':'position'}
     enabled={true}
     >
     <ContainerLogo>
       <Logo source={require('../../assets/Logo.png')} resizeMode="contain" />
     </ContainerLogo>
     <ContainerContent>
       <Title>MyLink</Title>
       <SubTitle>Cole seu link para encurtar</SubTitle>

       <ContainerInput>
         <BoxIcon>
          <Feather name="link" size={22} color="#FFF"/>
         </BoxIcon>
         <Input
          placeholder="Cole seu link aqui..."
          placeholderTextColor="white"
          autoCapitalize="none"
          autoCorrect={false}
          KeyboardType="url"
          value={input}
          onChangeText={(text)=>SetInput(text)}
          />
       </ContainerInput>
       <ButtonLink onPress={handleShortLink}>
         <ButtonLinkText>Gerar Link</ButtonLinkText>
       </ButtonLink>
     </ContainerContent>
     </KeyboardAvoidingView>
     <Modal
     visible={modalVisible}
     transparent 
     animationType="slide"
     >
     <ModalLink onClose={()=>SetModalVisible(false)}/>

       </Modal>
     </LinearGradient>
     </TouchableWithoutFeedback>
  );
}