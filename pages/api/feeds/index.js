import feeds from '../../../data/feeds';

export default async (req, res) => {
  res.status(200).json(feeds);
};
