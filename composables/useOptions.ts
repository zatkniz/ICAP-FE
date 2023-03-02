import axios from "@/helpers/axios";

export default function () {
  const optionsForIndex = useState("optionsForIndex");
  const optionsForEmployees = useState("optionsForEmployees");

  const setOptionsForIndex = async () => {
    const { data } = await axios.get("dmp");

    [, optionsForIndex.value] = data;
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
