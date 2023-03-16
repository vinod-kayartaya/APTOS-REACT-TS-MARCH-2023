import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContact } from '../datatypes';

interface IState {
    contacts: IContact[];
    selectedContact: IContact | {};
    isEditing: boolean;
}

const initialState: IState = {
    contacts: [
        { id: 1, firstname: 'Vinod', lastname: 'Kumar', email: 'vinod@vinod.co', city: 'Bangalore' },
        { id: 2, firstname: 'John', lastname: 'Doe', email: 'johndoe@xmpl.com', city: 'Dallas' },
        { id: 3, firstname: 'Jane', lastname: 'Doe', email: 'janedoe@xmpl.com', city: 'Washington' },
    ],
    selectedContact: {},
    isEditing: false
};

export const contactSlice = createSlice({
    name: 'contactSlice',
    initialState,
    reducers: {
        deleteContact: (state, action: PayloadAction<number>) => {
            const index = state.contacts.findIndex(c => c.id === action.payload);
            if (index !== -1) {
                state.contacts.splice(index, 1);
            }
        },
        selectContact: (state, action: PayloadAction<IContact>) => {
            state.selectedContact = { ...action.payload };
            state.isEditing = false;
        },
        addContact: (state, action: PayloadAction<Omit<IContact, 'id'>>) => {
            const { contacts } = state;
            const id = contacts.length === 0 ? 1 : 1 + Math.max(...contacts.map(c => c.id));
            const contact = { ...action.payload, id };
            state.contacts.push(contact);
        },
        setIsEditing: (state, action: PayloadAction<boolean>) => {
            state.isEditing = action.payload;
        },
        updateContact: (state, action: PayloadAction<IContact>) => {
            const contact = action.payload;
            const index = state.contacts.findIndex(c => c.id === contact.id);
            if (index !== -1) {
                state.contacts[index] = contact;
                state.isEditing = false;
                state.selectedContact = {};
            }
        }
    }
});

export const { deleteContact, selectContact, addContact, setIsEditing, updateContact } = contactSlice.actions;
export default contactSlice.reducer;
