class CountUp {
    constructor(cities, countries, visitors, stages, followers) {
      this.cities = cities;
      this.countries = countries;
      this.visitors = visitors;
      this.stages = stages;
      this.followers = followers;
    }
  
    countUpCities() {
      return this.cities.map((city, index) => {
        return {
          id: index + 1,
          name: city,
          count: index + 1,
        };
      });
    }
  
    countUpCountries() {
      return this.countries.map((country, index) => {
        return {
          id: index + 1,
          name: country,
          count: index + 1,
        };
      });
    }
  
    countUpVisitors() {
      return this.visitors.map((visitor, index) => {
        return {
          id: index + 1,
          name: visitor,
          count: index + 1,
        };
      });
    }
  
    countUpStages() {
      return this.stages.map((stage, index) => {
        return {
          id: index + 1,
          name: stage,
          count: index + 1,
        };
      });
    }
  
    countUpFollowers() {
      return this.followers.map((follower, index) => {
        return {
          id: index + 1,
          name: follower,
          count: index + 1,
        };
      });
    }
  }
  

  console.log(countUp.countUpCities());
  console.log(countUp.countUpCountries());
  console.log(countUp.countUpVisitors());
  console.log(countUp.countUpStages());
  console.log(countUp.countUpFollowers());

