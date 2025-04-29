import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 100,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        gap: 10,
        marginRight: 16,
        marginLeft: 16,
        borderWidth: 1,
    },
    icon: {
        color: '#888888',
        marginRight: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#59695C',

    },
    clearWrapper: {
        padding: 4,
    },
    clearIcon: {
        color: '#888888',
        width: 15,
    },
});
