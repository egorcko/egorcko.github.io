export default class SwapiService {
   _apiBase = 'https://swapi.co/api/';

   async getResource(url) {
      const response = await fetch(`${this._apiBase}${url}`);
      if (!response.ok) {
         throw new Error(`Could not fetch ${url}`);
      }
      return await response.json();
   }
   async getAllPeople() {
      return await this.getResource(`/people/`);
   }
   async getPerson(id) {
      return await this.getResource(`/people/${id}`);
   }
   async getAllPlanets() {
      return await this.getResource(`/planets/`);
   }
   async getPlanet(id) {
      return await this.getResource(`/planets/${id}`);
   }
   async getAllStarships() {
      return await this.getResource(`/starships/`);
   }
   async getStarship(id) {
      return await this.getResource(`/starships/${id}`);
   }
}
