import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import EnterApp from '../screens/EnterApp'
import Friends from '../screens/Friends';
import TabNavigator from '../navigation/TabNavigator';
import CrecheDetails from '../screens/CrecheDetails';
import GPDetails from '../screens/GPDetails'
import Register from '../screens/Register'
import edit from '../screens/edit'
import { Settings } from 'react-native';
import setting from '../screens/setting';
import help from '../screens/edit';
/*import { setting } from 'react-native';*/
const AppNavigator = createStackNavigator({
  Enter: { screen: EnterApp,
  navigationOptions:({navigation}) =>({
    title:'Smart Parenting',
    headerTitleStyle:{
      fontWeight:'bold',
      textAlign:'center',
      flexGrow:1,
      color:'white'
    },
    headerLeft:null,
    headerStyle:{
      backgroundColor:'#3f51B5',
      height:70
    }
  }) },
  Friends: {screen: Friends,
  navigationOptions:({})=>({
    headerLeft:null
  })},
  TabNav:{screen:TabNavigator,
    navigationOptions:({})=>({
    //   title:'Smart Parenting',
    //   headerTitleStyle:{
    //     fontWeight:'bold',
    //     textAlign:'center',
    //     flexGrow:1,
    //     color:'white'
    //   },
    //   headerStyle:{
    //     backgroundColor:'#3f51B5',
    //     height:50
    //   },
      // headerLeft:null,
      header:null
    })
  },
  CrecheDetails:{screen:CrecheDetails,
    navigationOptions:({navigation})=>({
      title:'Smart Parenting',
      headerTitleStyle:{
        fontWeight:'bold',
        textAlign:'center',
        flexGrow:1,
        color:'white'
      },
      headerStyle:{
        backgroundColor:'#3f51B5',
        height:50
      },
      header:null
    })},
    GPDetails:{screen:GPDetails,
    navigationOptions:({navigation})=>({
      header:null
    })},
    Register:{screen:Register,
      navigationOptions:({navigation})=>({
        header:null
      })},
    EditPro:{screen:edit,
      navigationOptions:({navigation})=>({
        header:null
    })},
    SettingPro:{screen:setting,
      navigationOptions:({navigation})=>({
        header:null
    })},
    HelpPro:{screen:help,
      navigationOptions:({navigation})=>({
        header:null
    })},
  },
{
  initialRouteName:"Enter"
});

export default AppContainer=createAppContainer(AppNavigator);