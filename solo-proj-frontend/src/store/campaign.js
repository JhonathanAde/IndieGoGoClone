// const SET_CAMPAIGN_TITLE = "campaign/setCampaignTitle";
// const SET_CAMPAIGN_DESCRIPTION = "campaign/setCampaignDescription";
// const SET_CAMPAIGN_DURATION = "campaign/setCampaignDuration";
import { fetch } from "./csrf";

const ADD_NEW_CAMPAIGN = "campaign/addNewCampaign";
const LOAD_NEW_CAMPAIGNS = "campaign/loadNewCampaigns";
const LOAD_ALL_CAMPAIGNS = "campaign/loadAllCampaigns";

export const addNewCampaign = (title, description, duration) => {
  return {
    type: ADD_NEW_CAMPAIGN,
    payload: { title, description, duration },
  };
};

// export const loadNewCampaign = (campaigns) => {
//   return {
//     type: LOAD_NEW_CAMPAIGNS,
//     payload: campaigns,
//   };
// };

export const loadAllCampaigns = (campaigns) => {
  return {
    type: LOAD_ALL_CAMPAIGNS,
    payload: campaigns,
  };
};

export const getAllCampaigns = () => async (dispatch) => {
  const response = await fetch("/api/campaigns");
  console.log(response);
  dispatch(loadAllCampaigns(response.data.campaigns));
};
export const postNewCampaign = (
  title,
  description,
  cardImage,
  duration
) => async (dispatch) => {
  // Update fetch to go to 'POST'
  const response = await fetch("/api/campaigns", {
    method: "POST",
    body: JSON.stringify({ title, description, cardImage, duration }),
  });
  dispatch(addNewCampaign(response.data.campaign));
};

const initialState = { campaigns: [] };
export const campaignReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_NEW_CAMPAIGN:
      newState = Object.assign({}, state);
      newState.campaigns = [...state.campaigns, action.payload];
      return newState;
    // case LOAD_NEW_CAMPAIGNS:
    //   newState = Object.assign({}, state);
    //   newState.campaigns = action.payload;
    //   return newState;
    case LOAD_ALL_CAMPAIGNS:
      newState = Object.assign({}, state);
      newState.campaigns = action.payload;
      return newState;
    default:
      return state;
  }
};

// const setCampaignTitle = (campaignTitle) => {
//   return {
//     type: SET_CAMPAIGN_TITLE,
//     payload: campaignTitle,
//   };
// };

// const setCampaignDescription = (campaignDescription) => {
//   return {
//     type: SET_CAMPAIGN_DESCRIPTION,
//     payload: campaignDescription,
//   };
// };
// const setCampaignDuration = (campaignDuration) => {
//   return {
//     type: SET_CAMPAIGN_DURATION,
//     payload: campaignDuration,
//   };
// };

// let initialState = {
//   campaignTitle: "",
//   campaignDescription: "",
//   campaignDuration: "",
// };

// const basicInfoReducer = (state = initialState, action) => {
//   let newState;
//   switch (action.type) {
//     case SET_CAMPAIGN_TITLE :
//       newState = Oject.assign({}, state);
//       newState.campaignTitle = action.payload;
//       return newState;
//     case SET_CAMPAIGN_DESCRIPTION
//   }
// }
