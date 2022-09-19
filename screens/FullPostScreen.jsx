import React, { useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import styled from 'styled-components';
import { Loading } from '../components/Loading';

const PostImage = styled.Image`
width: 100%;
height: 250px;
border-radius: 12px;
margin-bottom: 20px;
`;

const PostText = styled.Text`
font-size: 13px;
font-weight: 500;
`;

export const FullPostScreen = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const { id, title } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title,
    });
    setIsLoading(true);
    
    fetch(`https://632592484cd1a2834c40504d.mockapi.io/articles/` + id)
      .then(res => res.json())
      .then((data) => setData(data))
      .catch(err => {
        console.log(err);
        Alert.alert('Error', 'Error downloading article!')
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
     <Loading />
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage source={{ uri: data.avatar }} />
      <PostText>{data.text}</PostText>
    </View>
  )
}
