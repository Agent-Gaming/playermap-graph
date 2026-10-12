import React from "react";
import { NODE_COLORS } from "./nodeColors";

const GraphLegend = () => {
  return (
    <div
    style={{
      position: "absolute",
      right: "34%",
      bottom: "30px",
      color: "#808080",
      fontSize: "13px",
    }}>
        <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px"
        }}>
          <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#ff8c00",
          }}
          ></div>
          <span>Subject</span>
        </div>

        <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px"
        }}>
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: "#4dff00",
            }}
          ></div>
          <span>Object</span>
        </div>

        <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px"
        }}>
          <div
            style={{
              width: "10px",
              height: "2px",
              borderRadius: "50%",
              backgroundColor: "#00eaff",
            }}
          ></div>
          <span>Predicate</span>
        </div>
    </div>
  );
};

export default GraphLegend;
