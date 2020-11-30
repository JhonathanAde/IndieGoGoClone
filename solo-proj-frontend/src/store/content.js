import { fetch } from "./csrf";

const ADD_NEW_CONTENT = "content/addNewContent";

export const addContent = (content, campaignId, overlay, story) => {
  return {
    type: ADD_NEW_CONTENT,
    payload: { content, campaignId, overlay, story },
  };
};

export const addNewContent = (content, campaignId, overlay, story) => async (
  dispatch
) => {
  const response = await fetch("/api/contents", {
    method: "POST",
    body: JSON.stringify({ content, campaignId, overlay, story }),
  });
  dispatch(addContent(response.data.content));
};

const initialState = { contents: [] };
export const contentReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_NEW_CONTENT:
      newState = Object.assign({}, state);
      newState.contents = [...state.contents, action.payload];
      return newState;
    default:
      return state;
  }
};
