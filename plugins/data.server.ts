export default defineNuxtPlugin(async (nuxtApp) => {
  const {
    setOptionsForEmployees,
    setOptionsForIndex,
    setOptionsForHeader,
    setOptionsForPreFooter,
    setOptionsForFooter,
    setOptionsForServices,
    setOptionsForServicesPage,
  } = useOptions();

  await setOptionsForEmployees();
  await setOptionsForIndex();
  await setOptionsForHeader();
  await setOptionsForPreFooter();
  await setOptionsForFooter();
  await setOptionsForServices();
  await setOptionsForServicesPage();
});
