import { configureStore } from "@reduxjs/toolkit";
import guitarReducer from "./guitarSlice";

export default configureStore({
	reducer: {
		guitar: guitarReducer,
	},
});
