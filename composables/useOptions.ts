import axios from "@/helpers/axios";
import { FooterOptions } from "~~/interfaces/footer-options";
import { HeaderOptions } from "~~/interfaces/header-options";
import { IndexOptions } from "~~/interfaces/Index-options";
import { PreFooterOptions } from "~~/interfaces/prefooter-options";
import { PreFooter } from "../.nuxt/components";

export default function () {
  const optionsForIndex = useState<IndexOptions>("optionsForIndex");
  const optionsForEmployees = useState("optionsForEmployees");
  const optionsForHeader = useState<HeaderOptions>("optionsForHeader");
  const optionsForPreFooter = useState<PreFooterOptions>("optionsForPreFooter");
  const optionsForFooter = useState<FooterOptions>("optionsForFooter");

  const setOptionsForIndex = async () => {
    const { data } = await axios.get("dmp/11?acf_format=standard");

    optionsForIndex.value = data;
  };

  const setOptionsForEmployees = async () => {
    const { data } = await axios.get("team_member?acf_format=standard");

    optionsForEmployees.value = data;
  };

  const setOptionsForHeader = async () => {
    const { data } = await axios.get("dmp/88?acf_format=standard");

    optionsForHeader.value = data;
  };

  const setOptionsForPreFooter = async () => {
    const { data } = await axios.get("dmp/127?acf_format=standard");

    optionsForPreFooter.value = data;
  };

  const setOptionsForFooter = async () => {
    const { data } = await axios.get("dmp/131?acf_format=standard");

    optionsForFooter.value = data;
  };

  return {
    optionsForIndex,
    setOptionsForIndex,
    optionsForEmployees,
    setOptionsForEmployees,
    optionsForHeader,
    setOptionsForHeader,
    optionsForPreFooter,
    setOptionsForPreFooter,
    optionsForFooter,
    setOptionsForFooter,
  };
}
