import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Cartao = () => (
  <Card>
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>

    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Text variant="bodyMedium">Tópicos me Novas Tecnologias</Text>
    <Card.Actions>
    </Card.Actions>
  </Card>
);

export default Cartao;