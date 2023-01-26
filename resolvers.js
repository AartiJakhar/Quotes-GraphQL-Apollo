import { users, quotes } from "./fakedb.js";
// ho query ko lega or response send krega
const resolvers = {
  Query: {
    users: () => {
      return users;
    },
    quotes: () => quotes,
    user: (parentundifenid, args) => users.find((user) => user.id == args.id),
    quote: (parentundifenid, ar) => quotes.filter((quote) => quote.by == ar.by),
  },
  Mutation: {
    signup: (_, { userNew }) => {
      const id = `${Math.random() * 10}`;
      const {firstName, lastName, email, password}=userNew
      users.push({ id, firstName, lastName, email, password });
      return users.find((user) => user.id == id);
    },
  },
  User: {
    quotes: (user) => quotes.filter((quote) => quote.by == user.id),
  },
  //yani user wale schema me query krne koi lge or ye query kre yani ye mangle to aqq use quotes ko filter kreke de skt ho
};
export default resolvers;
