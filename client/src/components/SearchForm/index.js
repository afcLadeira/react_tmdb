import React from "react";
import { useForm, Controller } from "react-hook-form";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
  let navigate = useNavigate();

  const {
    control,
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onFormSubmit(data) {
    reset();

    navigate(`/results?search=${data.searchText}`, {
      state: { multi: data.multi },
    });
  }

  const watchAllFields = watch();

  return (
    <div style={{ padding: 20 }}>
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <Controller
          control={control}
          name="searchText"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Form.Group className="mb-3" controlId="searchText">
              <Form.Control
                feedback="Error"
                ref={ref}
                onChange={onChange}
                isInvalid={!!errors.searchText}
                as="input"
                type="text"
                placeholder="Search"
                {...register("searchText", {
                  required: "This is required",
                })}
              />
              <Form.Control.Feedback type="invalid">
                {errors.searchText && errors.searchText.message}
              </Form.Control.Feedback>
            </Form.Group>
          )}
        />
        <Controller
          control={control}
          name="multi"
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Form.Group className="mb-3" controlId="muti">
              <Form.Check
                type="checkbox"
                label="All media types"
                ref={ref}
                value={value}
                onChange={onChange}
                isInvalid={!!errors.multi}
                {...register("multi")}
              />
            </Form.Group>
          )}
        />

        <Button variant="primary" type="submit">
          Search {watchAllFields.multi ? "all media" : "movie"}
        </Button>
      </Form>
    </div>
  );
}
