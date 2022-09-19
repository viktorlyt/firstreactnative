import styled from 'styled-components/native';

const PostView = styled.View`
display: flex;
flex-direction: row;
padding: 15px;
border-bottom-width: 1px;
border-bottom-color: rgba(0, 0, 0, 0.1);
border-bottom-style: solid;
`;

const PostImage = styled.Image`
width: 60px;
height: 60px;
border-radius: 12px;
margin-right: 12px;
`;

const PostTitle = styled.Text`
font-size: 18px;
font-weight: 700;
`;

const PostText = styled.Text`
font-size: 13px;
font-weight: 500;
`;

const PostDetails = styled.View`
flex: 1;
justify-content: center; 
`;

const PostData = styled.Text`
font-size: 12px;
color: rgba(0, 0, 0, 0.4);
margin-top: 2px;
`;

export const Post = ({ name, text, avatar, createdAt }) => {
  return (
    <PostView>
      <PostImage 
        source={{ uri: avatar }}
      />
      <PostDetails>
        <PostTitle>{name}</PostTitle>
        <PostText>{text}</PostText>
        <PostData>{createdAt}</PostData>
      </PostDetails>
    </PostView>
  );
}