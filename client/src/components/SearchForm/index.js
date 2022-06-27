import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { RESULTS_ROUTE } from "../../constants";
import SearchResults from "../SearchResults";
import useDebouncer from "../../hooks/useDebouncer";

import windowIcon from '../../assets/window.png'
import { Image } from "react-bootstrap";
import { useCreateList } from "../../api/lists";

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

  const mutation = useCreateList()

  function onFormSubmit(data) {
   
    //reset();


    navigate(`${RESULTS_ROUTE}${data.searchText}`, {
      state: { multi: data.multi === "true" ? true : false },
    });
  }

  const watchAllFields = watch();

  const debounceValue = useDebouncer(watchAllFields.searchText,watchAllFields.multi)


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
        <div style={{display:'flex' , justifyContent:'space-between'}}>
        <Controller
          control={control}
          name="multi"
          render={({ field: { onChange, onBlur, value, ref ,checked} }) => (
            <Form.Group className="mb-3" controlId="muti">
              <Form.Check
                type="checkbox"
                label="All media types"
                ref={ref}
                value={checked}
                onChange={onChange}
                isInvalid={!!errors.multi}
                {...register("multi")}
              />
            </Form.Group>
          )}
        />

        <Button variant="light" size="sm" type="submit"> <Image width={20} src={windowIcon}></Image>
         {/* Search {watchAllFields.multi ? "all media" : "movie"} */}
        </Button>
</div>


      </Form>

      <SearchResults searchString={debounceValue} multi={watchAllFields.multi}></SearchResults>
    </div>
  );
}
