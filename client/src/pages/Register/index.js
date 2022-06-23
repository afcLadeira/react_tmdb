import axios from "axios";
import RegisterForm from "../../components/FormRegister";

export default function Register() {
  const onFormSubmit = async (data) => {
    console.log(data);

    try {
      const response = await axios.post("/register", JSON.stringify(data), {
        header: {
          "Content-Type": "Application/json",
        },
        withCredentials: true,
      });

      console.log(response.data);
      console.log(response.accessToken);
    } catch (error) {
      console.log(error);

      if (!error?.response) {
        console.log("no server response");
      } else if (error.response?.status === 409) {
        console.log("username taken");
      } else {
        console.log("registration failed");
      }
    }
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Register</h1>
      <RegisterForm onFormSubmit={onFormSubmit}></RegisterForm>
    </div>
  );
}
