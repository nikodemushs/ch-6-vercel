import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lores: {},
  name: "",
  abilities: {},
  ability_ids: {},
  dname: "",
  heroAbilities: [],
};

const dataSlicer2 = createSlice({
  name: "data",
  initialState,
  reducers: {
    setLores: (state, action) => {
      state.lores = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAbilities: (state, action) => {
      state.abilities = action.payload;
    },
    setAbilityId: (state, action) => {
      state.ability_ids = action.payload;
    },
    setDName: (state, action) => {
      state.dname = action.payload;
    },
    setHeroAbilities: (state, action) => {
      state.heroAbilities = action.payload;
    },
  },
});

export const {
  setLores,
  setName,
  setAbilities,
  setAbilityId,
  setDName,
  setHeroAbilities,
} = dataSlicer2.actions;

export default dataSlicer2.reducer;
