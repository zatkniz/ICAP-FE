import axios from "@/helpers/axios";
import { EmployeesOptions } from "~~/interfaces/employees-options";
import { FooterOptions } from "~~/interfaces/footer-options";
import { HeaderOptions } from "~~/interfaces/header-options";
import { IndexOptions } from "~~/interfaces/Index-options";
import { PreFooterOptions } from "~~/interfaces/prefooter-options";
import { ServicesOptions } from "~~/interfaces/services-options";
import { ServicesPageOptions } from "~~/interfaces/services-page-options";
import { PreFooter } from "../.nuxt/components";

export default function () {
  const optionsForIndex = useState<IndexOptions>("optionsForIndex");
  const optionsForEmployees = useState<EmployeesOptions[]>(
    "optionsForEmployees"
  );
  const optionsForHeader = useState<HeaderOptions>("optionsForHeader");
  const optionsForPreFooter = useState<PreFooterOptions>("optionsForPreFooter");
  const optionsForFooter = useState<FooterOptions>("optionsForFooter");
  const optionsForServices = useState<ServicesOptions[]>("optionsForServices");
  const optionsForServicesPage = useState<ServicesPageOptions>(
    "optionsForServicesPage"
  );

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

  const setOptionsForServices = async () => {
    const { data } = await axios.get("services?acf_format=standard");

    optionsForServices.value = data;
  };

  const setOptionsForServicesPage = async () => {
    const { data } = await axios.get("dmp/161?acf_format=standard");

    optionsForServicesPage.value = data;
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
    optionsForServices,
    setOptionsForServices,
    optionsForServicesPage,
    setOptionsForServicesPage,
  };
}
