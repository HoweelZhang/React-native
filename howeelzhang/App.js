/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  SectionList,
  TouchableHighlight,
} from 'react-native';

// prop 使用
class Greeting extends Component {
  constructor(props){
    super();
  }
  // 定义一个小组件使用prop props是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变
  render() {
    return(
      <Text>Hello {this.props.name}</Text>
    )
  }
}

// state 使用
class Blink extends Component {
  // 在构造器中初始化父类方法 设置isShow
  constructor(props){
    super();
    // 注意禁止直接修改 this.state 因为setState会替换掉你状态；把this.setState 当做不可变，
    // 1.不保证同步
    // 2.可能会造成不必要的渲染 shouldComponentUpdate解决 （可能：state可能是和事件、timerID有关）
    // 3.setState并不能很有效的管理所有的组件状态 并不是所有的组件状态都应该用 setState 来进行保存和更新的。复杂的组件可能会有各种各样的状态需要管理。用 setState 来管理这些状态不但会造成很多不需要的重新渲染，也会造成相关的生命周期钩子一直被调用，从而造成很多奇怪的问题
    this.state = { showText: true };
    setInterval(() => {
      // 异步修改state,并且调用可能会喂了性能批量执行；setState会触发一次重绘
      this.setState(previousState => {
        return {showText: !previousState.showText};
      });
    },1000)
  }

  render(){
    let isDisplay = this.state.showText ? this.props.text : '';
    return(
      <Text>{isDisplay}</Text>
    )
  }
}

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // 将父组件传递来的所有props传递给TextInput;比如下面的multiline和numberOfLines
        editable = {true}
        maxLength = {6}
        height = {100}
      />
    );
  }
}

// 数据获取 渲染dom
class Fetch extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:null,
    }
  }
  componentDidMount() {
    fetch('http://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.movies);
        responseJson.movies[0].title = '我是标题我的名字很长很长我是标题我的名字很长很长我是标题我的名字很长很长我是标题我的名字很长很长'
        responseJson.movies[0].releaseYear = '我是副标题我的名字很长我是副标题我的名字很长我是副标题我的名字很长我是副标题我的名字很长我是副标题我的名字很长我是副标题我的名字很长我是副标题我的名字很长我是副标题我的名字很长'
        this.setState({
          data: responseJson.movies     //data是一个对象数组
        });
        // alert(JSON.stringify(this.state.data[0].title))
        return responseJson.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render() {
    return(
      <FlatList
        data = {this.state.data}
        renderItem = { ({item}) => { return (
          <View style={{paddingVertical: 5,flex:1,flexDirection:'row',alignItems:'flex-start',justifyContent:'space-around',backgroundColor:'f5f5f5'}}>
            <Image
              source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
              style = {{width:120,height:60,marginRight:10}}
              resizeMode = 'contain'
            />
            <View style={{flex:1}}>
              <Text style={{fontSize:20,height:20,lineHeight:20}} numberOfLines={1}>{item.title}</Text>
              <Text style={{fontSize:12,height:40,}} numberOfLines={3}>{item.releaseYear}</Text>
            </View>
          </View>
        )}}
      />
    )

  }
}

class HelloWorldApp extends Component {
  // 容器类的标签 <></>
  // 描述类标签 <>
  // 跟vue一样，最外层只有一个tag标签
  constructor(props){
    super(props);
    this.state = {text:''}
  }
  componentDidMount() {

  }
  render() {
    return (
      handleAction = () =>{

      },
      <View style = {Sheet.container}>
        {/* <View style={{alignItems:'flex-start'}}>
          <Text style={{fontSize:22,color:'red'}}>1.prop使用</Text>
          <Greeting name='张大怀'></Greeting>
          <Greeting name='howeelzhang'></Greeting>
          <Greeting name='haogege'></Greeting>
        </View> */}
        {/* <View>
          <Blink text='I love to blink' />
          <Blink text='Yes blinking is so great' />
          <Blink text='Why did they ever take this out of HTML' />
          <Blink text='Look at me look at me look at me' />
        </View> */}
        {/* 样式 颜色 高宽 */}
        {/* <View>
          <Text style={Sheet.red,{width: 50, height: 50, backgroundColor: 'powderblue'}}>just red</Text>
          <Text style={Sheet.bigblue,{width: 100, height: 100, backgroundColor: 'skyblue'}}>just bigblue</Text>
          <Text style={[Sheet.bigblue, Sheet.red],{width: 150, height: 150, backgroundColor: 'steelblue'}}>bigblue, then red</Text>
          <Text style={[Sheet.red, Sheet.bigblue],{width: 200, height: 200, backgroundColor: 'blue'}}>red, then bigblue</Text>
        </View> */}
        {/* flexBox
          flexDirection :column|row
          justifyContent :flex-start|center|flex-end|space-around(每个元素周围分配相同的空间)|space-between(首个元素放置于起点，末尾元素放置于终点)|space-evenly(每个元素之间的间隔相等)
          alignItems:auto baseline center flex-end flex-start space-around space-between stretch(拉伸)
          flexGrow :number
          flexShrink: number
          flexWarp: enum('warp','nowarp')
          */}
        {/* <View style={{
          flex:1,
          flexDirection:'row',
          justifyContent:'space-around',
          alignItems:'flex-start',
        }}>
          <View style={{width:50,height:50,backgroundColor:'powderblue'}}></View>
          <View style={{width:50,height:50,backgroundColor:'skyblue'}}></View>
          <View style={{width:50,height:50,backgroundColor:'steelblue'}}></View>
          <View style={{width:50,height:50,backgroundColor:'blue'}}></View>
        </View> */}
        {/* <Button
          style = {Sheet.btn}
          onPress = {handleAction}
          title = "i am title"
          accessibilityLabel = 'Text to display for blindness accessibility features'
        /> */}
        {/* <Image
          source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
          style = {{width: 193, height: 110}}
        /> */}
        {/* <View>
          <TextInput
            style={{height: 40}}
            placeholder='type here to translate!'
            onChangeText={(text) => {this.setState({text})}}
          />
          <Text style={{padding:10,fontSize:20}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join('')}
          </Text>
        </View> */}
        {/* <View style={{
          backgroundColor: this.state.text,
          borderBottomColor: '#000000',
          borderBottomWidth:1,
        }}>
          <UselessTextInput
            multiline = {true}
            numberOfLines = {4}
            onChangeText = {(text) => this.setState({text})}
            value = {this.state.text}
            autoCapitalize = {'none'}
            autoCorrect = {false}
            autoFoucus = {false}
            defaultValue = {'red'}
            editable = {true}
            keyboardType = {'default'}
            maxLength = {'2'}
            returnKeyType = {'done'}
            clearButtonMode = {'always'}
          />
        </View> */}
        {/* <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image
            source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
            style = {{width: 'auto', height: 110}}
          />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image
            source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
            style = {{width: 'auto', height: 110}}
          />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image
            source = {{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}}
            style = {{width: 'auto', height: 110}}
          />
          <Text style={{fontSize:96}}>Scrolling down</Text>
        </ScrollView> */}
        {/* <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={{padding: 10,fontSize: 18,height: 44,}}>{item.key}</Text>}
        /> */}
        {/* <SectionList
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={Sheet.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={Sheet.sectionHeader}>{section.title}</Text>}
        /> */}
        <Fetch></Fetch>

      </View>
    );
  }
}

const Sheet = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    // height:300,
    // width:300,
    color:'red',
    top:20
  },
  text1:{
    color:'#fff',
    fontSize:14,
    // height:80,
    width:80,
    textAlign:'center'
  },
  btn:{
    color:'#fff',
    backgroundColor: "red",
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
//   react 宽度基于pt为单位， 可以通过Dimensions 来获取宽高，PixelRatio 获取密度。
//
// 基于flex的布局
//
// view默认宽度为100%
//
// 水平居中用alignItems, 垂直居中用justifyContent
//
// 基于flex能够实现现有的网格系统需求，且网格能够各种嵌套无bug
//
// 图片布局
//
// 通过Image.resizeMode来适配图片布局，包括contain, cover, stretch
//
// 默认不设置模式等于cover模式
//
// contain模式自适应宽高，给出高度值即可
//
// cover铺满容器，但是会做截取
//
// stretch铺满容器，拉伸
//
// 定位
//
// 定位相对于父元素，父元素不用设置position也行
//
// padding 设置在Text元素上的时候会存在bug。所有padding变成了marginBottom
//
// 文本元素
//
// 文字必须放在Text元素里边
//
// Text元素可以相互嵌套，且存在样式继承关系
//
// numberOfLines 需要放在最外层的Text元素上，且虽然截取了文字但是还是会占用空间
  // flexDirection :column|row
  // justifyContent :flex-start|center|flex-end|space-around(每个元素周围分配相同的空间)|space-between(首个元素放置于起点，末尾元素放置于终点)|space-evenly(每个元素之间的间隔相等)
  // alignItems:auto baseline center flex-end flex-start space-around space-between stretch(拉伸)
  // flexGrow :number
  // flexShrink: number
  // flexWarp: enum('warp','nowarp')
  // top
  // bottom
  // left: number
  // right: number
  // zIndex
  // margin
  // marginXXX enum(Top Left Bottom Right)
  // marginHorizontal(right anm left margin)
  // marginVertical (top and bottom)
  // padding (the same as margin)
  // width
  // maxWidth
  // height
  // maxHeight
  // minHeight
  // minWidth
  // overflow enum('visble','hidden','scroll')
  // alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch') alignSelf决定了元素在父元素的次轴方向的排列方式（此样式设置在子元素上），其值会覆盖父元素的alignItems的值。其表现和CSS上的align-self一致（默认值为auto）
  // borderXXXWidth enum(Top Left Bottom Right)
})
/*==========TEXT================*/
 // Attributes.style = {
 //   color string
 //   containerBackgroundColor string
 //   fontFamily string
 //   fontSize number
 //   fontStyle enum('normal', 'italic')
 //   fontWeight enum("normal", 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900')
 //   lineHeight number
 //   textAlign enum("auto", 'left', 'right', 'center')
 //   writingDirection enum("auto", 'ltr', 'rtl')
 // }
AppRegistry.registerComponent('howeelzhang', () => HelloWorldApp);
