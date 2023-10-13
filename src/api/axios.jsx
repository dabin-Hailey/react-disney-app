import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "ff051dd57eb66942a36398da456da695",
    // 강사님 api_key: "d20d691c4dcca268fa8e0c655d698616",
    language: "ko-KR",
  },
});

export default instance;
