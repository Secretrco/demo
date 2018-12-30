// NOTE: These aren't real keys

const STRIPE_SECRET_KEY = 'sk_live_aAAaaA0AAa0aa0aaaaAaA0A0';
const STRIPE_PUBLISHABLE_KEY = 'pk_live_AA0AaaAaaAaAAAAAAAaAAaaa';

// Let's try again
const same = 'sk_live_aAAaaA0AAa0aa0aaaaAaA0A0';

export const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Go Serverless v1.0! ${(await message({ time: 1, copy: 'Your function executed successfully!'}))}`,
    }),
  };
};

const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (with a delay)/ You're key is ${STRIPE_PUBLISHABLE_KEY}`);
  }, time * 1000)
);
