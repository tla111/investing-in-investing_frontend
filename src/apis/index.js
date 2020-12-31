import axios from 'axios';

// const url = 'http://127.0.0.1:8000/api';
const url = 'https://investing-in-investing.herokuapp.com/api';

export const createKitchenPost = (newKitchenPost) =>
  axios
    .post(
      `${url}/kitchen/`,
      {
        room_shape: newKitchenPost.room_shape,
        counter_top: newKitchenPost.counter_top,
        refrigerator_style: newKitchenPost.refrigerator_style,
      },
      {
        headers: {
          Authorization: `AUTHORIZATION_KEY`,
          'Content-Type': 'application/json',
        },
      }
    )
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

export const createLivingRoomPost = (newLivingRoomPost) =>
  axios
    .post(
      `${url}/livingroom/`,
      {
        sofas: newLivingRoomPost.sofas,
        televisions: newLivingRoomPost.televisions,
        chairs: newLivingRoomPost.chairs,
      },
      {
        headers: {
          Authorization: `AUTHORIZATION_KEY`,
          'Content-Type': 'application/json',
        },
      }
    )
    .then((res) => console.log(res))
    .catch((error) => console.log(error));

export const createBedRoomPost = (newBedRoomPost) =>
  axios
    .post(
      `${url}/bedroom/`,
      {
        beds: newBedRoomPost.beds,
        dressers: newBedRoomPost.dressers,
        desks: newBedRoomPost.desks,
      },
      {
        headers: {
          Authorization: `AUTHORIZATION_KEY`,
          'Content-Type': 'application/json',
        },
      }
    )
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
