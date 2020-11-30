import { fetch } from "./csrf";

const ADD_NEW_PERK = "perks/addNewPerk";
const LOAD_CAMPAIGN_PERKS = "perks/loadCampaignPerks";

// Action creators
/* **********************************************************/

export const addPerk = (
  visibility,
  title,
  description,
  perkImage,
  price,
  quantity,
  campaignId
) => {
  return {
    type: ADD_NEW_PERK,
    payload: {
      visibility,
      title,
      description,
      perkImage,
      price,
      quantity,
      campaignId,
    },
  };
};

export const loadCampaignPerks = (perks) => {
  return {
    type: LOAD_CAMPAIGN_PERKS,
    payload: perks,
  };
};

// Thunks
/* ****************************************************************/

export const createNewPerk = (
  visibility,
  title,
  description,
  perkImage,
  price,
  quantity,
  campaignId
) => async (dispatch) => {
  const response = await fetch("/api/perks", {
    method: "POST",
    body: JSON.stringify({
      visibility,
      title,
      description,
      perkImage,
      price,
      quantity,
      campaignId,
    }),
  });
  dispatch(addPerk(response.data.campaign));
};

// Reducer
/* ***************************************************************/

const initialState = { perks: [] };
export const perkReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_NEW_PERK:
      newState = Object.assign({}, state);
      newState.perks = [...state.perks, action.payload];
      return newState;
    case LOAD_CAMPAIGN_PERKS:
      newState = Object.assign({}, state);
      newState.perks = action.payload;
      return newState;
    default:
      return state;
  }
};
