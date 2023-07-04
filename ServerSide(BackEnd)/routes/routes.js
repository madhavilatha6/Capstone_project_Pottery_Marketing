import { insertpotteryData,potterysearch,potterysort } from "../controllers/control.js"


app.get('/potterdata',insertpotteryData)

app.get('/search/:searchData',potterysearch)

app.get('/sort/:sortData',potterysort)

