import React, { Component } from "react";
import { ResponsiveLine } from "@nivo/line";

class App extends Component {
  state = {
    data: [
      {
        id: "School",
        data: [{ x: 1, y: 2 }, { x: 2, y: 4 }, { x: 3, y: 9 }, { x: 4, y: 16 }]
      },
      {
        id: "Work",
        data: [{ x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 4 }, { x: 4, y: 5 }]
      }
    ]
  };
  render() {
    console.log(this.state.data);
    return (
      <ResponsiveLine
        data={this.state.data}
        margin={{
          top: 50,
          right: 110,
          bottom: 50,
          left: 60
        }}
        xScale={{
          type: "linear",
          stacked: true,
          min: "auto",
          max: "auto"
        }}
        yScale={{
          type: "linear",
          stacked: true,
          min: "auto",
          max: "auto"
        }}
        minY="auto"
        maxY="auto"
        stacked={true}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Time",
          legendOffset: 36,
          legendPosition: "center"
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "center"
        }}
        dotSize={10}
        dotColor="inherit:darker(0.3)"
        dotBorderWidth={2}
        dotBorderColor="#ffffff"
        enableDotLabel={true}
        dotLabel="y"
        dotLabelYOffset={-12}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    );
  }
}

export default App;
