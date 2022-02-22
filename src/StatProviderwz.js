import axios from "axios";
import React, { createContext } from "react";

const StatContextwz = createContext();
const StatConsumerwz = StatContextwz.Consumer;
class StatProviderwz extends React.Component {
  state = {
    loading: true,
    error: false,
    profileData: null,
    errorRes: null,
  };
  getStats = async (platform, gamertag) => {
    try {
      const response = await axios.get(
        `/api/v3/profile/${platform}/${gamertag}`
      );
      this.setState({ loading: false, profileData: response.data.data });
    } catch (err) {
      this.setState({
        loading: false,
        errorRes: err.response.data.message,
        error: true,
      });
    }
  };

  resetState = () => {
    this.setState({
      loading: true,
      error: false,
      profileData: null,
      errorRes: null,
    });
  };

  render() {
    return (
      <StatContextwz.Provider
        value={{
          state: this.state,
          getStats: this.getStats,
          resetState: this.resetState,
        }}
      >
        {this.props.children}
      </StatContextwz.Provider>
    );
  }
}

export { StatContextwz, StatProviderwz, StatConsumerwz };
