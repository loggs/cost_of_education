import React, { Component } from "react";
import { ResponsiveLine } from "@nivo/line";

const compound_interest = years => {
  return [...Array(years).keys()].map(year => {
    return {
      x: year,
      y: Math.round(100 * Math.pow(1.06, year) * 100) / 100
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
    console.log(compound_interest(this.state.years));
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
                id: "Compounding Interest",
                data: compound_interest(this.state.years)
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
        </div>
      </div>
    );
  }
}

export default App;
