export default defineNuxtPlugin(async (nuxtApp) => {
  const {
    setOptionsForEmployees,
    setOptionsForIndex,
    setOptionsForHeader,
    setOptionsForPreFooter,
    setOptionsForFooter,
  } = useOptions();

  await setOptionsForEmployees();
  await setOptionsForIndex();
  await setOptionsForHeader();
  await setOptionsForPreFooter();
  await setOptionsForFooter();
});
