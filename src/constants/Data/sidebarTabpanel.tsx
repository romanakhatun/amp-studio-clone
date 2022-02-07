import Background from "../../components/background";
import Media from "../../components/media";
import Objects from "../../components/objects";
import Sharing from "../../components/sharing";
import Templates from "../../components/templates";
import Text from "../../components/text";

export const TabPanelData = [
  {
    index: 0,
    children: <Templates />,
  },
  {
    index: 1,
    children: <Background />,
  },
  {
    index: 2,
    children: <Text />,
  },
  {
    index: 3,
    children: <Media />,
  },
  {
    index: 4,
    children: <Objects />,
  },
  {
    index: 5,
    children: <Sharing />,
  },
];
