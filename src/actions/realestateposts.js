// import { CREATE_KITCHEN, FETCH_ALL_KITCHEN } from '../constants/actionTypes';
import * as api from '../apis';

// export const getKitchenPosts = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetchKitchenPost();

//     dispatch({ type: FETCH_ALL_KITCHEN, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const createKitchen = (post) => async (dispatch) => {
  try {
    await api.createKitchenPost(post);

    // const { data } = await api.createKitchenPost(post);

    // dispatch({
    //   type: CREATE_KITCHEN,
    //   payload: data,
    // });
  } catch (error) {
    console.log(error);
  }
};

export const createLivingRoom = (post) => async (dispatch) => {
  try {
    await api.createLivingRoomPost(post);

    // const { data } = await api.createLivingRoomPost(post);
  } catch (error) {
    console.log(error);
  }
};

export const createBedRoom = (post) => async (dispatch) => {
  try {
    await api.createBedRoomPost(post);

    // const { data } = await api.createBedRoomPost(post);
  } catch (error) {
    console.log(error);
  }
};
