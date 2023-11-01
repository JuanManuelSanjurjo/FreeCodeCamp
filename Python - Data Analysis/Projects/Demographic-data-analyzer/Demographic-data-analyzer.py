import pandas as pd


def calculate_demographic_data(print_data=True):
    # Read data from file
    df = pd.read_csv("adult.data.csv")
    recordCount = df.shape[0]

    # How many of each race are represented in this dataset? This should be a Pandas series with race names as the index labels.
    racesDF = df.groupby("race")
    races = df['race'].unique() 
    race_count = [ racesDF.get_group(race).shape[0] for race in races]
    # What is the average age of men?
    men = df[df["sex"] == "Male"]
    average_age_men = men["age"].mean()
    average_age_men = float(f"{average_age_men:.1f}")

    # What is the percentage of people who have a Bachelor's degree?
    bachelors = df[df["education"] == "Bachelors"]
    percentage_bachelors = bachelors.shape[0] / (recordCount / 100) 
    percentage_bachelors = float(f"{percentage_bachelors:.1f}")

    # What percentage of people with advanced education (`Bachelors`, `Masters`, or `Doctorate`) make more than 50K?
    # What percentage of people without advanced education make more than 50K?

    # with and without `Bachelors`, `Masters`, or `Doctorate`
    higher = df[(df["education"] == "Bachelors") | (df["education"] == "Masters") | (df["education"] == "Doctorate")]
    lower = df[(df["education"] != "Bachelors") & (df["education"] != "Masters") & (df["education"] != "Doctorate")]
    higher_education = higher.shape[0] /  100
    lower_education =  lower.shape[0] /  100

    # percentage with salary >50K
    higher_education_rich = higher[higher["salary"] == ">50K"].shape[0] / higher_education
    higher_education_rich =  float(f"{higher_education_rich:.1f}")
    lower_education_rich = lower[lower["salary"] == ">50K"].shape[0] / lower_education
    lower_education_rich =  float(f"{lower_education_rich:.1f}")

    # What is the minimum number of hours a person works per week (hours-per-week feature)?
    min_work_hours = df["hours-per-week"].min()

    # What percentage of the people who work the minimum number of hours per week have a salary of >50K?
    num_min_workers = df[(df["hours-per-week"] == min_work_hours) & (df["salary"] == ">50K") ]
    minWorkersDF=  df[(df["hours-per-week"] == min_work_hours)]

    rich_percentage = (num_min_workers.shape[0] / (minWorkersDF.shape[0] / 100)).__trunc__()

    # What country has the highest percentage of people that earn >50K?   
    grouped = df.groupby('native-country')
    countries = df['native-country'].unique()  # obtiene una lista de todos los países únicos en la columna 'native-country'
    country_dfs = {country: grouped.get_group(country) for country in countries}

    highest_earning_country_percentage = 0

    for country, value in country_dfs.items():
        total = value.shape[0]
        richest = value[value["salary"] == ">50K"].shape[0]
        calculation = richest / (total / 100)
        if highest_earning_country_percentage < calculation:
            highest_earning_country_percentage = calculation
            highest_earning_country_percentage =  float(f"{highest_earning_country_percentage:.1f}")
            highest_earning_country = country

        # if calculation > mayorPorcentaje:
        #     highest_earning_country= countries[country]

    # print(highest_earning_country, highest_earning_country_percentage)

    # Identify the most popular occupation for those who earn >50K in India.
    indiaDF = country_dfs["India"]
    india = indiaDF[indiaDF["salary"] == ">50K"]
    top_IN_occupation = india["occupation"].mode()[0]


    # DO NOT MODIFY BELOW THIS LINE

    if print_data:
        print("Number of each race:\n", race_count) 
        print("Average age of men:", average_age_men)
        print(f"Percentage with Bachelors degrees: {percentage_bachelors}%")
        print(f"Percentage with higher education that earn >50K: {higher_education_rich}%")
        print(f"Percentage without higher education that earn >50K: {lower_education_rich}%")
        print(f"Min work time: {min_work_hours} hours/week")
        print(f"Percentage of rich among those who work fewest hours: {rich_percentage}%")
        print("Country with highest percentage of rich:", highest_earning_country)
        print(f"Highest percentage of rich people in country: {highest_earning_country_percentage}%")
        print("Top occupations in India:", top_IN_occupation)

    return {
        'race_count': race_count,
        'average_age_men': average_age_men,
        'percentage_bachelors': percentage_bachelors,
        'higher_education_rich': higher_education_rich,
        'lower_education_rich': lower_education_rich,
        'min_work_hours': min_work_hours,
        'rich_percentage': rich_percentage,
        'highest_earning_country': highest_earning_country,
        'highest_earning_country_percentage':
        highest_earning_country_percentage,
        'top_IN_occupation': top_IN_occupation
    }


calculate_demographic_data()