import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Image, KeyboardAvoidingView} from 'react-native';
import { SimpleLineIcons, Fontisto, EvilIcons, Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const emailRender = ({ item }) => (
  <Item sender={item.sender} email={item.email} title={item.title} />
);

function HomeScreen({ navigation }) {
  return (
    <>
     <KeyboardAvoidingView
    keyboardVerticalOffset={0}
    behavior='padding'
    style={{ flex: 1 }}
    enabled= { Platform.OS == 'ios'}
    >
    <View style={styles.container}>
      <View style={styles.form}>
      <TextInput style={styles.textinput}
        placeholderTextColor='#999'
        autoCorrect={true}
        placeholder='Pesquisar no e-mail'
        maxLength={25}
        />
      <Ionicons style={{marginLeft:5}} name="person-circle" size={47} color="black" />
      </View>
      
      <View style={styles.body}>
      <Text style={styles.text}>Principal</Text>

      <FlatList
        data={emails}
        renderItem={emailRender}
 
      />
  
      </View>

      <View style={{alignItems:'flex-end', marginBottom: 20}}>
        <TouchableOpacity style={styles.buttonWrite}>
          <EvilIcons name="pencil" size={30} color="black"/> 
          <Text style={{marginLeft:10, fontSize:15, fontWeight:'500'}}>Novo</Text>
        </TouchableOpacity>
      </View>
      

      <View style={styles.footer}>
        <View style={styles.viewButtons}>
          <View>
            <TouchableOpacity><Fontisto name="email" size={24} color="black" /></TouchableOpacity>
            <Text>E-mail</Text>
          </View>
          <View>
            <TouchableOpacity><SimpleLineIcons name="camrecorder" size={24} color="black" /></TouchableOpacity>
            <Text>Reunião</Text>
          </View>
        </View>
      </View>

    </View>
    </KeyboardAvoidingView>
    </>
  )
}

const Drawer = createDrawerNavigator();

const emails = [{
  sender: 'Remetente 1',
  title: 'Titulo primeiro e-mail',
  email: 'Primeiro email'
},
{
  sender: 'Remetente 2',
  title: 'Titulo segundo e-mail',
  email: 'Segundo email'
},
{
  sender: 'Remetente 3',
  title: 'Titulo terceiro e-mail',
  email: 'Terceiro email'
},
{
  sender: 'Remetente 4',
  title: 'Titulo quarto e-mail',
  email: 'Quarto email'
}
]
const Item = ({ title, email, sender }) => (
   
  <View style={styles.emailRow}> 
    <Image
          style={{
            resizeMode: "cover",
            height: 50,
            width: 50
          }}
          source={{
            uri: 'https://thumbs.dreamstime.com/b/%C3%ADcone-no-estilo-liso-do-usu%C3%A1rio-da-pessoa-para-site-ilustra%C3%A7%C3%A3o-vetor-129831161.jpg',
          }}
        />
  
  <View style={styles.emailVert}> 
  <Text style={{fontWeight:'bold', fontSize:16}}>{sender}</Text>
  <Text style={{fontWeight:'bold', fontSize:14}}>{title}</Text>
  <Text style={{ fontSize:14}}>{email}</Text>
  </View>
  </View>

)

export default function App() {
  return (
  
  <NavigationContainer style={{backgroundColor:'#FFFFFF'}}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="E-mail" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },

  body: {
    flex: 1
  },

  form: {
    padding: 0,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingTop: 13,
    borderColor: '#eee',
    marginHorizontal: 20,
    alignItems: 'center'
  },

  textinput: {
    flex: 1,
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 17,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#eee'
  },

  text: {
    textAlign: 'left',
    marginTop:6,
    marginBottom:6,
    marginHorizontal: 20
  },

  footer: {
    padding: 0,
    height: 60,
    justifyContent: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingTop: 13,
    borderTopWidth: 2,
    borderColor: '#eee',
    backgroundColor: '#eee'
  },

  viewButtons: {
    flex: 1,
    marginBottom: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    borderColor: '#eee',
    textAlign: 'center'
  },

  emailRow: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20
  },

  emailVert: {
    flexDirection: 'column',
    marginLeft: 5
  },
  
  buttonWrite: {
    height: 50,
    width: 110,
    flexDirection: 'row',
    alignItems: 'center',
    marginEnd:20,
    backgroundColor: '#ADFF2F',
    borderRadius: 10,
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
  	height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  }
})


