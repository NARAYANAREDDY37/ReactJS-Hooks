import React from "react";
import { UserContext, ChannelContext } from "../App";

function ComponentF() {
    //the value is passed by the provider is being consumed by the render props pattern in the required component
    return (
      <div>
        <UserContext.Consumer>
          {(user) => {
            return (
              <ChannelContext.Consumer>
                {(channel) => {
                  return (
                    <div>
                      User context value is: {user}, User context value is: {channel}
                    </div>
                  );
                }}
              </ChannelContext.Consumer>
            );
          }}
        </UserContext.Consumer>
      </div>
    );
  }

export default ComponentF;
