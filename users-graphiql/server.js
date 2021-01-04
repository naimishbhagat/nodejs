const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const schema = require("./schema/schema");
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server started on ${port}`));
