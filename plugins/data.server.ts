export default defineNuxtPlugin(async (nuxtApp) => {
  const { setOptionsForEmployees, setOptionsForIndex } = useOptions();

  await setOptionsForEmployees();
  await setOptionsForIndex();
});
