const displaySolarFacts = (x) => {
    let randomNum =  Math.floor(Math.random() * 10);
    let questionNum = randomNum + 1;
    
    const solarFacts = [
        "The ideal conditions for solar panels to produce electricity are sunny and cold days, and some colder states are better for solar because of high electricity rates and state solar tax credits. ",
        
        "Solar increases the value of a home. In 2019, Zillow released a study showing that houses with solar panels sold for, on average, 4.1% more than similar houses without solar panels. For the median-valued house, this meant over $9,000 extra.",
        
        "Solar battery storage is becoming more popular. In the largest home solar survey, we found that only 11.5% of current residential solar installations included an energy storage system. However, this percentage is expected to rise quickly, as 60% of battery installations took place in the last 5 years.",
        
        "Solar is great for the environment but is also an excellent investment. The low cost and wide usability of solar panels will make them the go-to renewable energy source to help us reach net-zero carbon emissions by 2050.",
        
        "A solar energy system’s payback period can be under 5 years in a solar-friendly state. In California, the payback period on a solar installation is between 4.9 and 5.9 years. Part of the reason the payback period is so short is because California has some of the highest electricity prices compared to the rest of the country.",
        
        "The federal solar tax credit covers 26% of the cost if you install before 2023.",
        
        "The price for solar panels has dropped over 70% in the last 10 years. The price of solar will only go up as the value of the solar tax credit gets smaller. Right now, solar is the most economical it ever has been.",
        
        "Over 2 million solar energy systems have been installed in the U.S., which surpassed the 2 million-milestone in 2019, only 3 years after it installed 1 million systems - which took 40 years to accomplish.",
        
        "Producing solar power means you can avoid rising electricity prices. Grid power is getting more expensive and having a solar system will allow you to generate your own solar electricity, which, in turn, will provide you with a sort of insurance policy on any future rises in electricity prices.",
        
        "The first solar cell was made of selenium wafers in 1883, and in California, 19% of energy is generated from solar systems.",
    ];

    return [questionNum, solarFacts[randomNum]];
}

export default displaySolarFacts;