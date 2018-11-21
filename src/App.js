import React, { Component } from "react";
import { ResponsiveLine } from "@nivo/line";

const compound_interest = (years, start, interest) => {
  return [...Array(years + 1).keys()].map(year => {
    return {
      x: year,
      y: Math.round(start * Math.pow(interest, year) * 100) / 100
    };
  });
};

class App extends Component {
  state = {
    years: 10
  };

  handleYearInput = event => {
    this.setState({ years: parseInt(event.target.value) });
  };

  render() {
    console.log(compound_interest(this.state.years, 100, 1.06));
    console.log(compound_interest(this.state.years, 50, 1.1));
    return (
      <div>
        <input
          type="number"
          onChange={this.handleYearInput}
          value={this.state.years}
        />
        <div style={{ height: 500, width: 600 }}>
          <ResponsiveLine
            data={[
              {
                id: "School",
                color: "hsl(187, 70%, 50%)",
                data: compound_interest(this.state.years, 100, 1.06)
              },
              {
                id: "No School",
                color: "hsl(277, 70%, 50%)",
                data: compound_interest(this.state.years, 50, 1.1)
              }
            ]}
            margin={{
              top: 50,
              right: 110,
              bottom: 50,
              left: 60
            }}
            xScale={{
              type: "linear",
              min: "auto",
              max: "auto"
            }}
            yScale={{
              type: "linear",
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
              legend: "Years",
              legendOffset: 36,
              legendPosition: "center"
            }}
            axisLeft={{
              orient: "left",
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Dollars",
              legendOffset: -40,
              legendPosition: "center"
            }}
            dotSize={10}
            dotColor="inherit:darker(0.3)"
            dotBorderWidth={2}
            dotBorderColor="#ffffff"
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
        </div>
      </div>
    );
  }
}

export default App;
