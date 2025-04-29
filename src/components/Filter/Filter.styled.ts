import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalContainer: {
        position: 'absolute',
        top: 120,
        left: 16,
        width: 300,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#2C3E34',
        padding: 16,
        shadowColor: '#2C3E34',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.3,
        elevation: 4,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#4A5A52',
        marginTop: 12,
        marginBottom: 8,
        textTransform: 'uppercase'
    },
    optionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    optionSelected: {
        backgroundColor: 'rgba(44,62,52,0.1)',
    },
    checkboxIcon: {
        color: '#2C3E34',
        marginRight: 8,
    },
    optionText: {
        fontSize: 14,
        color: '#2E362F',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    actionButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 100,
        alignItems: 'center',
    },
    resetButton: {
        borderWidth: 1,
        borderColor: '#2C3E34',
        marginRight: 8,
    },
    applyButton: {
        backgroundColor: '#2C3E34',
        marginLeft: 8,
    },
    resetText: {
        fontSize: 14,
        color: '#2C3E34',
        fontWeight: '600',
    },
    applyText: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: '600',
    },
});