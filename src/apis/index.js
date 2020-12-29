import axios from 'axios';

const url = 'http://127.0.0.1:8000/api';

// export const fetchKitchenPost = () => axios.get(`${url}/kitchen/`);

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
