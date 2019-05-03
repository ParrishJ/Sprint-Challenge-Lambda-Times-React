import React from "react";
import Cards from "./Cards";
import PropTypes from "prop-types";

const Tab = props => {
  let classNamer = "";
  if (props.tab == props.selectedTab) {
    classNamer = "tab active-tab";
  } else {
    classNamer = "tab";
  }

  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={`${classNamer}`}

      /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string
};

Tab.defaultProps = {
  tab: ""
};

// Make sure you include PropTypes on your props.

export default Tab;
