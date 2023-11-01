import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import linregress

def draw_plot():
    # Read data from file
    df = pd.read_csv("epa-sea-level.csv")

    # Create scatter plot
    fig, ax = plt.subplots(figsize=(16,9))
    plt.scatter(df["Year"], df["CSIRO Adjusted Sea Level"])


    # Create first line of best fit
    first = linregress(df["Year"], df["CSIRO Adjusted Sea Level"])
    x_prediction = pd.Series([i for i in range(1880, 2051)])
    y_prediction = first.slope*x_prediction + first.intercept
    plt.plot(x_prediction, y_prediction, "b")

    # Create second line of best fit
    newDF = df.loc[df["Year"] >= 2000]
    newDF_X = newDF["Year"] 
    newDF_Y = newDF["CSIRO Adjusted Sea Level"] 
    second = linregress(newDF_X, newDF_Y)
    x_prediction2 = pd.Series([i for i in range(2000, 2051)])
    y_prediction2 = second.slope*x_prediction2 + second.intercept
    plt.plot(x_prediction2, y_prediction2, "r")

    # Add labels and title
    ax.set_xlabel("Year")
    ax.set_ylabel("Sea Level (inches)")
    ax.set_title("Rise in Sea Level")
    
    # Save plot and return data for testing (DO NOT MODIFY)
    plt.savefig('sea_level_plot.png')
    return plt.gca()


draw_plot()