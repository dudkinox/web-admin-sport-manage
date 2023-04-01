import { initializeApp } from "firebase/app";
import config from "./config";

const firebaseApp = () => {
  return initializeApp(config.firebaseConfig);
};

export default firebaseApp;
