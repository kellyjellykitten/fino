import { createStore } from "vuex";
import { auth } from "./auth.module";
import { img } from "./image.module";

const store = createStore({
    modules: {
        auth,
        img
    }
})

export default store;