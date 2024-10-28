
const initialState = {
    userName: null,
    email: null,
    password: null,
    confirmPassword: null
}
/*
const mysql = require('./mysql2.sql');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  pass: 123,
  database: 'test'
});
 
// simple query
connection.query(
  'SELECT * FROM `table',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
*/
const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PUT_REGISTRATION':
            return {
                ...state,
                userName: action.payload,
                email: action.payload,
                password: action.payload,
                confirmPassword: action.payload
            };
            case 'GET_REGISTRATION':
                return {
                    ...state,
                    userName: action.payload,
                    email: action.payload,
                    password: action.payload,
                    confirmPassword: action.payload
                };
        default:
            return state;
    }

}

export default registrationReducer;

