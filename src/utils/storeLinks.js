import AsyncStorage from '@react-native-async-storage/async-storage';

//pega os links salvos
export async function getLinksSave(key){
const myLinks = await AsyncStorage.getItem(key);

let linkSaves = JSON.parse(myLinks) || [];
return linkSaves;
}

//salva o link
export async function saveLink(key,newLink){
  let linksStored = await getLinksSave(key);
  
  
  //verifica se tem um link salvo com o mesmo id do newLink
  const hasLink = linksStored.some(link =>link.id === newLink.id);

  if(hasLink){
    console.log('Esse Link já existe na lista');

    return;
  }

  linksStored.push(newLink);

  await AsyncStorage.setItem(key, JSON.stringify(linksStored));
}

//deleta link
export async function deleteLink(links,id){
  let myLinks = links.filter((item)=>{
    return (item.id !== id)
  });
  await AsyncStorage.setItem('listalinks',JSON.stringify(myLinks));

  console.log('link deletado');

  return myLinks;
}
