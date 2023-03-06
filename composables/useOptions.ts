import axios from "@/helpers/axios";
import { IndexOptions } from "~~/interfaces/Index-options";

export default function () {
  const optionsForIndex = useState<IndexOptions>("optionsForIndex");
  const optionsForEmployees = useState("optionsForEmployees");

  const setOptionsForIndex = async () => {
    const { data } = await axios.get("dmp?acf_format=standard");

    optionsForIndex.value = data[1];
  };

  const setOptionsForEmployees = async () => {
    const { data } = await axios.get("team_member");

    [, optionsForEmployees.value] = data;
  };

  return {
    optionsForIndex,
    setOptionsForIndex,
    optionsForEmployees,
    setOptionsForEmployees,
  };
}
