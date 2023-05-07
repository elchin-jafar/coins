function useTable(curData) {
  const rows = [
    { name: "Issuing Country", value: curData?.issuingCountry },
    { name: "Composition", value: curData?.composition },
    { name: "Quality", value: curData?.quality },
    { name: "Denomination", value: curData?.denomination },
    { name: "Year", value: curData?.year },
    { name: "Weight", value: curData?.weight },
    { name: "Price", value: curData?.price },
  ];
  return rows;
}

export default useTable;
