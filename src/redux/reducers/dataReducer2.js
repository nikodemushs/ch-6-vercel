import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lores: {},
  name: "",
  abilities: {},
  ability_ids: {},
  imgname: "",
  heroAbilities: [],
  indexError: null,
  validAbilities: [],
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
    setImgName: (state, action) => {
      state.imgname = action.payload;
    },
    setHeroAbilities: (state, action) => {
      state.heroAbilities = action.payload;
    },
    setIndexError: (state, action) => {
      console.log("Action Payload:", action.payload); // Log action payload
      state.indexError = action.payload;
    },
    setValidAbilities: (state, action) => {
      state.validAbilities = action.payload;
    },
    resetIndexError: (state) => {
      state.indexError = null;
    },
  },
});

export const {
  setLores,
  setName,
  setAbilities,
  setAbilityId,
  setImgName,
  setHeroAbilities,
  setIndexError,
  setValidAbilities,
  resetIndexError,
} = dataSlicer2.actions;

export default dataSlicer2.reducer;
