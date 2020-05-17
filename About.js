import React from 'react'
import { Text } from 'react-native'
import { Container, Thumbnail, Content, Card, CardItem,  Button, Icon, Left, Body } from 'native-base';

const About = () => {
  return (
    <Container>
       
        <Content>
          <Card style={{flex: 0}}>
            
            <CardItem>
              <Body>
              <Thumbnail large source={{uri:"https://instagram.fbom33-1.fna.fbcdn.net/v/t51.2885-19/s320x320/96151447_2799715916748431_3418750816079577088_n.jpg?_nc_ht=instagram.fbom33-1.fna.fbcdn.net&_nc_ohc=4mt3pTLTqeUAX95ueF4&oh=9c5dac6472433c7721691e53e9d6ebe2&oe=5EEB6291"}} />
              <Text style={{fontSize:30,padding:10}}>
               Vivek Chauhan
                </Text>
                <Text style={{fontSize:25,padding:15}}>
                I am a full stack JavaScript developer having experience in MERN stack and React Native. Mostly my projects are open sourced but also accepting some freelance work.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
              <Text style={{fontSize:20,padding:10}}>Contact us</Text>
                
                  <Text>vivekchauhan12000@gmail.com</Text>
                
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            
            <CardItem>
              <Body>
              <Thumbnail large source={{uri:"https://adijha.com/profile.jpg"}} />
              <Text style={{fontSize:30,padding:10}}>
                Aditya KUMAR JHA
                </Text>
                <Text style={{fontSize:20,padding:10}}>
                I am a UI/UX designer and full stack JavaScript developer having experience in MERN stack and React Native. Mostly I use agile for my projects. I am doing some of my personal projects and also accepting some freelance work. I with my team are currently solving kind of accounting problem. I also do competitive programming and attend design challanges on topcoder.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                  <Text style={{fontSize:20,padding:10}}>Contact us</Text>
                  <Text> MAIL@ADIJHA.COM</Text>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
  )
}

export default About
