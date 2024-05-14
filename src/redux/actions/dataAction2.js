import axios from "axios";
import {
  setLores,
  setAbilities,
  setHeroAbilities,
  setValidAbilities,
} from "../reducers/dataReducer2";

export const getLoreHero = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `https://api.opendota.com/api/constants/hero_lore`
    );

    dispatch(setLores(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.message);
      return;
    }
    alert(error.message);
  }
};

export const getHeroAbilities = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(
      `https://api.opendota.com/api/constants/abilities`
    );

    dispatch(setAbilities(response.data));
    const index = getState().data2.indexError;
    const name = getState().data.heroDetail?.name;
    const heroName = name?.split("_")?.slice(3)?.join("_");
    const heroAbilities = Object.keys(response.data)
      .filter((key) => key.startsWith(heroName))
      .map((key) => response.data[key]);
    dispatch(setHeroAbilities(heroAbilities));

    const validAbilities = heroAbilities.filter((_, i) => i !== index);
    dispatch(setValidAbilities(validAbilities));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error.message);
      return;
    }
    alert(error.message);
  }
};


