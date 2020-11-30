import { fetch } from "./csrf";

const ADD_CAMPAIGN_DATA = "campaign/addCampaignData";
const ADD_CONTENT_DATA = "campaign/addContentData";
const ADD_PERKS_DATA = "campaign/addPerksData";

export const addCampaignData = (title, description, cardImage, duration) => {
  return {
    type: ADD_CAMPAIGN_DATA,
    payload: { title, description, cardImage, duration },
  };
};

export const addContentData = (content, campaignId, overlay, story) => {
  return {
    type: ADD_CONTENT_DATA,
    payload: { content, campaignId, overlay, story}
  }
}