import React,{useState} from 'react';
import {
   Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
     Platform,
     Modal, 
     ActivityIndicator
    } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import StatusBarPage from '../../Components/StatusBarPage';
import {Feather} from '@expo/vector-icons';
import Menu from '../../Components/Menu';
import api from '../../services/api';
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
import {saveLink} from '../../utils/storeLinks';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [input,SetInput] = useState('');
  const [modalVisible,SetModalVisible] = useState(false);
  const [data,setData] = useState({});

  async function handleShortLink(){
    setLoading(true);
    try {
      const response = await api.post('/shorten',
      {
        long_url:input,
      });
      setData(response.data);
      
      SetModalVisible(true);

      // OK
      saveLink('listalinks', response.data);
      Keyboard.dismiss();
      setLoading(false);
      SetInput('');
    } catch(e){
      console.log(e.message);
      alert("Ops...parece que algo deu errado");
      Keyboard.dismiss();
      SetInput('');
      setLoading(false);
    }

    
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
         {
           loading ? (
            <ActivityIndicator color="#121212" size={24} />
           ):(
              <ButtonLinkText>Gerar Link</ButtonLinkText>
           )
         }
       </ButtonLink>
     </ContainerContent>
     </KeyboardAvoidingView>
     <Modal
     visible={modalVisible}
     transparent 
     animationType="slide"
     >
     <ModalLink onClose={()=>SetModalVisible(false)} data={data}/>

       </Modal>
     </LinearGradient>
     </TouchableWithoutFeedback>
  );
}