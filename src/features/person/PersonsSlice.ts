import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Person {
  id: string;
  firstname: string;
  age: number;
  mobile: number;
  nationality: string;
  gender: string;
}

interface PersonsState {
  persons: Person[];
}

const initialState: PersonsState = {
  persons: JSON.parse(localStorage.getItem('persons') || '[]'),
};

const personsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {
    addPerson: (state, action: PayloadAction<Person>) => {
      state.persons.push(action.payload);
      localStorage.setItem('persons', JSON.stringify(state.persons));
    },
    editPerson: (state, action: PayloadAction<Person>) => {
      const index = state.persons.findIndex(person => person.id === action.payload.id);
      if (index !== -1) {
        state.persons[index] = action.payload;
        localStorage.setItem('persons', JSON.stringify(state.persons));
      }
    },
    deletePerson: (state, action: PayloadAction<string>) => {
      state.persons = state.persons.filter(person => person.id !== action.payload);
      localStorage.setItem('persons', JSON.stringify(state.persons));
    },
  },
});

export const { addPerson, editPerson, deletePerson } = personsSlice.actions;
export default personsSlice.reducer;
