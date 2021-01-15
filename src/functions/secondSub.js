import axios from "axios";

export const getSecondSubs = async () =>
  await axios.get(`${process.env.REACT_APP_API}/secondSubs`);

export const getSecondSub = async (slug) =>
  await axios.get(`${process.env.REACT_APP_API}/secondSub/${slug}`);

export const removeSecondSub = async (slug, authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/secondSub/${slug}`, {
    headers: {
      authtoken,
    },
  });

export const updateSecondSub = async (slug, sub, authtoken) =>
  await axios.put(`${process.env.REACT_APP_API}/secondSub/${slug}`, sub, {
    headers: {
      authtoken,
    },
  });

export const createSecondSub = async (sub, authtoken) =>
  await axios.post(`${process.env.REACT_APP_API}/secondSub`, sub, {
    headers: {
      authtoken,
    },
  });
