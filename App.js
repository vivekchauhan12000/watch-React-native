import React from 'react'
import { View,StyleSheet } from 'react-native'
import { Container, Header, Icon, Text,Tab, Tabs,Body,Title,Left,Right } from 'native-base';
import Stopwatch from "./Stopwatch";
import About from "./About";



const App = () => {
  return (
    
       <Container style={styles.header} >
        <Header style={styles.header}>
        <Left />
        <Body style={{flexDirection:'row'}} >
        <Icon name='clock' />
            <Title style={{paddingLeft:10}} >Stopii</Title>
          </Body>
        <Right/>
          </Header>
        <Tabs  >
          <Tab heading="Stopwatch"  tabStyle={styles.header} textStyle={{color: '#fff'}} activeTabStyle={styles.header} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Stopwatch/>
          </Tab>
          <Tab heading="Developed By"  tabStyle={styles.header} textStyle={{color: '#fff'}} activeTabStyle={styles.header} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <About/>
          </Tab>
          
        </Tabs>
      </Container>
    
     
     
  )
}

export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 130,
    paddingHorizontal: 20,
  },
  header:{
    backgroundColor:"#6FBC2D",
  },
})