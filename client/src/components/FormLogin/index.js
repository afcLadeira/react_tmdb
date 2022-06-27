import { useForm , Controller } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";




export default function LoginForm({onFormSubmit}) {

    const {
        control,
        reset,
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      
    return (
        <div style={{ maxWidth:400 }}>
        <Form onSubmit={handleSubmit(onFormSubmit)}>
          <Controller
            control={control}
            name="userName"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Form.Group className="mb-3" controlId="userName">
                <Form.Control
                  feedback="Error"
                  ref={ref}
                  onChange={onChange}
                  isInvalid={!!errors.userName}
                  as="input"
                  type="text"
                  placeholder="user name"
                  {...register("userName", {
                    required: "This is required",
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.userName && errors.userName.message}
                </Form.Control.Feedback>
              </Form.Group>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <Form.Group className="mb-3" controlId="password">
                <Form.Control
                  feedback="Error"
                  ref={ref}
                  onChange={onChange}
                  isInvalid={!!errors.password}
                  as="input"
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: "You must specify a password",
                    minLength: {
                      value: 5,
                      message: "Password must have at least 5 characters"
                    }
                  })}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password && errors.password.message}
                </Form.Control.Feedback>
              </Form.Group>
            )}
          />
         
         
  
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>Don't have an account?{" "}
          <Link to="/register">
            Sign up
            </Link>
          
          </p>
      </div>
    )

}