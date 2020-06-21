import mock from "mockjs";
// 这个一个获取URL参数的方法
import { getParams } from "./utils";

// 在这里编写你的逻辑代码
mock.mock(/\/lists/, ({ url }) => {
  const num = getParams(url, "num");
  const data = {
    status: 0,
    ["data|" + num]: [
      {
        "tid|+1": 1,
        title: "@title(2)",
        catalog: "@word",
        fav: /\d{2}/,
        created: "@datetime",
        "isEnd|0-1": 0,
        answer: /\d{2,3}/,
        user: {
          avatar: "@image(20x20)",
          name: "@cname",
          "isVip|0-1": 0,
          "level|0-99": 4,
        },
      },
    ],
    msg: "返回Mock数据",
  };
  return mock.mock(data);
});
