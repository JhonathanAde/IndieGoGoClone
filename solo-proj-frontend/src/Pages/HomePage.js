import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CampaignList from "../components/CampaignList/CampaignList";
import { getAllCampaigns } from "../store/campaign";

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const campaigns = useSelector((state) => state.campaign.campaigns);

  useEffect(() => {
    const loadCampaigns = async () => {
      dispatch(getAllCampaigns());
    };
    loadCampaigns();
  }, [dispatch]);

  return (
    <>
      <h1>HomePage</h1>
      {campaigns.map((campaign, index) => {
        return <CampaignList key={index} data={campaign} />;
      })}
      {!user && <h1>Welcome!</h1>}
    </>
  );
};

export default HomePage;
