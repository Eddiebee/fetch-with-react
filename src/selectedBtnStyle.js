const selectedBtnStyle = (selectedBtn, data) => {
  const style =
    selectedBtn === data
      ? { backgroundColor: "black", color: "#f7f7f7" }
      : null;
  return style;
};

export { selectedBtnStyle };
