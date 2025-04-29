import React from 'react';
import { View, TextInput, Pressable, NativeSyntheticEvent, TextInputSubmitEditingEventData } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './SearchBar.styled';

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
    onSubmitEditing?: (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void;
    placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
                                                 value,
                                                 onChangeText,
                                                 onSubmitEditing,
                                                 placeholder = 'Search...'
                                             }) => {
    return (
        <View style={styles.container}>
            <MaterialIcons name="search" size={24} style={styles.icon} />
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={onSubmitEditing}
                placeholder={placeholder}
                placeholderTextColor={'#59695C'}
                returnKeyType="search"
                clearButtonMode="never"

            />
            {value.length > 0 && (
                <Pressable onPress={() => onChangeText('')} style={styles.clearWrapper}>
                    <MaterialIcons name="close" size={20} style={styles.clearIcon} />
                </Pressable>
            )}
        </View>
    );
};

export default SearchBar;