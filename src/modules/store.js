export default class Store {
  constructor() {
    this.data = [];
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uWRQxJuTjMgl76rtHZ6s/scores/';
    this.err = '404';
    this.headers = { 'Content-Type': 'application/json' };
  }

    // Create a new object and Add it to the API
    addNew = (userValue, scoreValue) => {
      this.item = {
        user: userValue,
        score: scoreValue,
      };
      const addData = async () => {
        try {
          const sendIt = await fetch(
            this.url,
            {
              method: 'POST',
              body: JSON.stringify(this.item),
              headers: this.headers,
            },
          );
          return sendIt;
        } catch {
          throw this.err;
        }
      };
      addData();
    }

    // Get the values from API
    getData = async () => {
      try {
        this.data = await fetch(
          this.url,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          },
        );
        const scores = await this.data.json();
        console.log(scores.result);
        // put the scores in order
        return scores.result;
      } catch {
        throw this.err;
      }
    };
}
