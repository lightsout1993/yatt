// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const SUCCESS_STATUS = 200;

export default (req, res) => {
  res.statusCode = SUCCESS_STATUS;
  res.json({ name: 'John Doe' });
};
