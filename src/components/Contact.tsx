// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IContactProps {}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  return (
    <>
      <a href="mailto: borys.alessia@gmail.com">E-mail me!</a>
      <br />
      <a href="https://www.linkedin.com/in/alessiaborys/">LinkedIn</a>
    </>
  );
};

export default Contact;