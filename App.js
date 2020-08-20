import React from 'react'
import { View,Text,StyleSheet,Image} from 'react-native';

export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>
    Hello World
    </Text>
    <Image style={{width:300,height:300}}
            source={{uri:'https://lifestyle.campus-star.com/app/uploads/2018/08/cat-world.jpg'}}
    >
    </Image>
    <Image style={{width:300,height:300}}
            source={{uri:'https://www.gamemonday.com/wp-content/uploads/2019/11/Arknights-7112019-1.png'}}
    >
    </Image>
    <Image style={{width:300,height:300}}
            source={{uri:'https://f.ptcdn.info/641/062/000/pnep40hcnDKL4vu8r5f-o.jpg'}}
    >
    </Image>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#CD5C5C',		
  
  },
  text:{
    fontSize:20,
    Color:'red',
    backgroundColor:'blue',
    padding:20,
  },
  Image:{
    width:400,
    height:200,
  }
})
//export default App;