import React, { Component } from "react";
import { ResponsiveLine } from "@nivo/line";
import "./App.css";

const compound_interest = (years, start, interest, delay = 0) => {
  return [...Array(years + 1 - delay).keys()].map(year => {
    return {
      x: year + delay,
      y: Math.round(start * Math.pow(interest, year) * 100) / 100
    };
  });
};

const to_number = (stringy, number_func) => {
  return stringy ? number_func(stringy) : 0;
};

class App extends Component {
  state = {
    years: 10,
    delay: 3,
    startingSalarySchool: 50000,
    incomeGrowthSchool: 1.06,
    savingsRateSchool: 0.5,
    startingSalaryNoSchool: 30000,
    incomeGrowthNoSchool: 1.06,
    savingsRateNoSchool: 0.5
  };

  handleYearInput = event => {
    this.setState({
      years: to_number(event.target.value, parseInt)
    });
  };

  // With college inputs
  handleDelayInput = event => {
    this.setState({
      delay: to_number(event.target.value, parseFloat)
    });
  };

  handleStartingSalarySchool = event => {
    this.setState({
      startingSalarySchool: to_number(event.target.value, parseFloat)
    });
  };

  handleIncomeGrowthSchool = event => {
    this.setState({
      incomeGrowthSchool: to_number(event.target.value, parseFloat)
    });
  };

  handleSavingsRateSchool = event => {
    this.setState({
      savingsRateSchool: to_number(event.target.value, parseFloat)
    });
  };

  // No college inputs
  handleStartingSalaryNoSchool = event => {
    this.setState({
      startingSalaryNoSchool: to_number(event.target.value, parseFloat)
    });
  };

  handleIncomeGrowthNoSchool = event => {
    this.setState({
      incomeGrowthNoSchool: to_number(event.target.value, parseFloat)
    });
  };

  handleSavingsRateNoSchool = event => {
    this.setState({
      savingsRateNoSchool: to_number(event.target.value, parseFloat)
    });
  };

  render() {
    const {
      years,
      delay,
      startingSalarySchool,
      startingSalaryNoSchool,
      incomeGrowthNoSchool,
      savingsRateNoSchool,
      incomeGrowthSchool,
      savingsRateSchool
    } = this.state;
    return (
      <div>
        <div className="inputs">
          <div id="inputs-school">
            <p> Number of Years </p>
            <input
              type="number"
              onChange={this.handleYearInput}
              value={years}
            />
            <h3> With College </h3>
            <p> Years of Schooling </p>
            <input
              type="number"
              onChange={this.handleDelayInput}
              value={delay}
            />
            <p> Starting Salary </p>
            <input
              type="number"
              onChange={this.handleStartingSalarySchool}
              value={startingSalarySchool}
            />
            <p> Salary Growth </p>
            <input
              type="number"
              onChange={this.handleIncomeGrowthSchool}
              value={incomeGrowthSchool}
            />
            <p> Savings Rate </p>
            <input
              type="number"
              onChange={this.handleSavingsRateSchool}
              value={savingsRateSchool}
            />
          </div>
          <div id="inputs-no-school">
            <h3> With No College </h3>
            <p> Starting Salary </p>
            <input
              type="number"
              onChange={this.handleStartingSalaryNoSchool}
              value={startingSalaryNoSchool}
            />
          </div>
          <p> Salary Growth </p>
          <input
            type="number"
            onChange={this.handleIncomeGrowthNoSchool}
            value={incomeGrowthNoSchool}
          />
          <p> Savings Rate </p>
          <input
            type="number"
            onChange={this.handleSavingsRateNoSchool}
            value={savingsRateNoSchool}
          />
        </div>
        <div style={{ height: 600, width: 650 }} id="graph">
          <ResponsiveLine
            data={[
              {
                id: "School",
                color: "hsl(187, 70%, 50%)",
                data: compound_interest(
                  years,
                  startingSalarySchool,
                  1.06,
                  delay
                )
              },
              {
                id: "No School",
                color: "hsl(277, 70%, 50%)",
                data: compound_interest(years, startingSalaryNoSchool, 1.1)
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
