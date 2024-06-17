type props = {
  label: string;
  specialStyles?: string;
};
function HeaderText({ label, specialStyles }: props) {
  return (
    <h1 className={`${specialStyles} font-montserrat text-3xl font-bold`}>
      {label}
    </h1>
  );
}

export default HeaderText;
