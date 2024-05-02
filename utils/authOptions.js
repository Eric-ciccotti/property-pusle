import GoogleProvider from 'next-auth/providers/google';
import { HttpProxyAgent } from 'http-proxy-agent';

const agent = new HttpProxyAgent(process.env.http_proxy);


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  callbacks :  {
  //invocked in sucessfull login
  async signIn({profil}){
    //1. connect to db
    //2. check if user exists
    //3. if not add user to db
    //4. return true to allowed signin
  },
  //Modifies the session object
  async session({session}) {
    //1. get user from db
    //2. assign the user id to the session
    //3. return session
  }
},
};
