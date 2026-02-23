import Chupai from "./Chupai";
import Guize from "./Guize";
import Mopai from "./mopai";
import Shanggong from "./Shanggong";
import Zhenying from "./Zhenying";
import Jiqiao from "./Jiqiao";

export default function Content({ type }) {
  return (
    <>
      {type === "摸牌" && <Mopai />}
      {type === "阵营" && <Zhenying />}
      {type === "出牌" && <Chupai />}
      {type === "规则" && <Guize />}
      {type === "上贡" && <Shanggong />}
      {type === "技巧" && <Jiqiao />}
    </>
  );
}
