import axios from "axios";

export const userCart = async (cart, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cart`,
    { cart },
    {
      headers: {
        authtoken,
      },
    }
  );

export const getUserCart = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/user/cart`, {
    headers: {
      authtoken,
    },
  });

export const emptyUserCart = async (authtoken) =>
  await axios.delete(`${process.env.REACT_APP_API}/user/cart`, {
    headers: {
      authtoken,
    },
  });

export const saveUserAddress = async (authtoken, address) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/address`,
    { address },
    {
      headers: {
        authtoken,
      },
    }
  );

  export const saveUserName = async (authtoken, name) => 
    await axios.post(
      `${process.env.REACT_APP_API}/user/name`,
      { name },
      {
        headers: {
          authtoken,
        },
      }
    )

    export const saveUserLastName = async (authtoken, lastName) => 
    await axios.post(
      `${process.env.REACT_APP_API}/user/last-name`,
      { lastName },
      {
        headers: {
          authtoken,
        },
      }
    )

    export const saveUserUnitAddress = async (authtoken, unitAddress) => 
    await axios.post(
      `${process.env.REACT_APP_API}/user/unit-address`,
      { unitAddress },
      {
        headers: {
          authtoken,
        },
      }
    )

    export const saveUserCityAddress = async (authtoken, cityAddress) => 
    await axios.post(
      `${process.env.REACT_APP_API}/user/city-address`,
      { cityAddress },
      {
        headers: {
          authtoken,
        },
      }
    )

    export const saveUserStateAddress = async (authtoken, StateAddress) => 
    await axios.post(
      `${process.env.REACT_APP_API}/user/state-address`,
      { StateAddress },
      {
        headers: {
          authtoken,
        },
      }
    )

    export const saveUserZipAddress = async (authtoken, ZipAddress) => 
    await axios.post(
      `${process.env.REACT_APP_API}/user/zip-address`,
      { ZipAddress },
      {
        headers: {
          authtoken,
        },
      }
    )

    export const saveUserPhoneNumber = async (authtoken, PhoneNumber) => 
    await axios.post(
      `${process.env.REACT_APP_API}/user/phone-number`,
      { PhoneNumber },
      {
        headers: {
          authtoken,
        },
      }
    )


export const applyCoupon = async (authtoken, coupon) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cart/coupon`,
    { coupon },
    {
      headers: {
        authtoken,
      },
    }
  );

export const createOrder = async (stripeResponse, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/order`,
    { stripeResponse },
    {
      headers: {
        authtoken,
      },
    }
  );

export const getUserOrders = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/user/orders`, {
    headers: {
      authtoken,
    },
  });

export const getWishlist = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/user/wishlist`, {
    headers: {
      authtoken,
    },
  });

export const removeWishlist = async (productId, authtoken) =>
  await axios.put(
    `${process.env.REACT_APP_API}/user/wishlist/${productId}`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );

export const addToWishlist = async (productId, authtoken) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/wishlist`,
    { productId },
    {
      headers: {
        authtoken,
      },
    }
  );

export const createCashOrderForUser = async (
  authtoken,
  COD,
  couponTrueOrFalse
) =>
  await axios.post(
    `${process.env.REACT_APP_API}/user/cash-order`,
    { couponApplied: couponTrueOrFalse, COD },
    {
      headers: {
        authtoken,
      },
    }
  );
