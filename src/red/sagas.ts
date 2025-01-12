import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } from "./usersSlice";

// Simulated API function to fetch users
const fetchUsersApi = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
};

// Worker saga: Handles the fetchUsersRequest action
function* fetchUsersSaga() {
  try {
    const users = yield call(fetchUsersApi); // Call the API
    yield put(fetchUsersSuccess(users)); // Dispatch success action with the data
  } catch (error) {
    yield put(fetchUsersFailure(error.message)); // Dispatch failure action with the error
  }
}

// Watcher saga: Watches for fetchUsersRequest and runs fetchUsersSaga
function* watchFetchUsersSaga() {
  yield takeEvery(fetchUsersRequest.type, fetchUsersSaga);
}

// Combine all sagas into a single root saga
export default function* rootSaga() {
  yield watchFetchUsersSaga();
  /*
  yield all([
    watchFetchUsersSaga(),
    watchFetchPostsSaga(), // Add the new watcher saga here
  ]);
  */
}
  