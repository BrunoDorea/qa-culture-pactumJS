const { spec } = require('pactum');

it('should get random male users', async () => {
  await spec()
    .get('https://randomuser.me/api')
    .withQueryParams('gender', 'male')
    .expectStatus(200)
    .expectJsonLike({
      "results": [
        {
          "gender": "male"
        }
      ]
    });
});
