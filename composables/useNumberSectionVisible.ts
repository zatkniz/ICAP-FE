export default function () {
  const numberSectionVisible = useState<boolean>(
    "numberSectionVisible",
    () => false
  );

  const setNumberSectionVisible = (value: boolean) => {
    numberSectionVisible.value = value;
  };

  return {
    numberSectionVisible,
    setNumberSectionVisible,
  };
}
