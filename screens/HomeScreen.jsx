import { useEffect, useState } from 'react';
import { Alert, View, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import { Loading } from '../components/Loading';
import { Post } from '../components/Post';


export default function HomeScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  const fetchPosts = () => {
    setIsLoading(true);
    
    fetch(`https://632592484cd1a2834c40504d.mockapi.io/articles`)
      .then(res => res.json())
      .then((data) => setItems(data))
      .catch(err => {
        console.log(err);
        Alert.alert('Error', 'Error downloading articles!')
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(fetchPosts, []);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />}
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('FullPost', { id: item.id, title: item.name})}>
            <Post
              name={item.name} 
              avatar={item.avatar}
              text={item.text}
              createdAt={item.createdAt}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

