import React from 'react';
import {Image, Text, View, Pressable} from 'react-native';
import {styles} from './CharacterCard.styled';
import {Character} from '../../api/character';
import {MaterialIcons} from '@expo/vector-icons';

interface CharacterCardProps {
  character: Character;
  onLikeToggle?: (id: number) => void;
  liked?: boolean;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onLikeToggle,
  liked = false,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cardContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.title}>{character.name}</Text>
          <Text style={styles.label}>Status</Text>
          <Text style={styles.value}>{character.status}</Text>
          <Text style={styles.label}>Species</Text>
          <Text style={styles.value}>{character.species}</Text>
        </View>

        <Image source={{uri: character.image}} style={styles.avatar} />
        <Pressable
          onPress={() => onLikeToggle?.(character.id)}
          style={({pressed}) => [
            styles.likeButton,
            liked && styles.likedButton,
            pressed && styles.buttonPressed,
          ]}>
          <MaterialIcons
            name={liked ? 'star' : 'star-outline'}
            size={18}
            style={[styles.likeIcon, liked && styles.likedIcon]}
          />
          <Text style={[styles.likeText, liked && styles.likedText]}>
            {liked ? 'LIKED' : 'LIKE'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CharacterCard;
