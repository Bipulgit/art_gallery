const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://bipulkumar:Pubglite3384@cluster0.bfjvd1t.mongodb.net/bipul",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(`Connection Successsful`);
  })
  .catch((e) => {
    console.log(`no connection`);
  });
