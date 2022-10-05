import React from "react";
import { makeStyles } from "@material-ui/core";
import { conn } from "../store/connect";
import EmailInput from "./emailinput.js";

const useStyles = makeStyles({
  root: {},
  defaultRateText: {
    cursor: "pointer",
    color: "blue",
  },
});

const EmailInputContainer = (props) => {
  const { isDefaultRates } = props;
  const classes = useStyles();

  const setDefaultRates = () => {
    if (isDefaultRates) {
      props.actions.setIsDefaultRates(false);
      props.actions.useNullRates();
    } else {
      props.actions.setIsDefaultRates(true);
      props.actions.useDefaultRates();
    }
  };

  const toggleDefaultRateInfo = () => {
    props.actions.setUtilityRateModalActive(true);
  };

  return (
    <>
      <div className="utility-input-main-container">
        <EmailInput
          title="Building Address"
          cons_title="kWh"
          utiltag="elec"
          cost_title="$/kWh"
        />
        
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    inputs: state.building.inputs,
    isDefaultRates: state.building.isDefaultRates,
  };
};

export default conn(mapStateToProps)(EmailInputContainer);
