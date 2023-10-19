import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  text: string;
};

const NewPost = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("title")); // watch input value by passing the name of it

  return (
    <div className="flex flex-col">
      <form
        className="flex justify-center p-4 border rounded shadow-md max-w-lg mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col">
          <input
            className="p-4 border rounded shadow-md max-w-lg mx-auto"
            defaultValue="Title"
            {...register("title", { required: true })}
          />
          <input
            className="h-80 p-4 border rounded shadow-md max-w-lg mx-auto"
            defaultValue="Input text here..."
            {...register("text", { required: true })}
          />
          {errors.title && <span>This field is required</span>}
          {errors.text && <span>This field is required</span>}
        </div>

        <input
          className="p-4 border rounded shadow-md max-w-lg mx-auto"
          type="submit"
        />
      </form>
      <button
        className="p-4 border rounded shadow-md max-w-lg mx-auto"
        onClick={handleClick}
      >
        See posts
      </button>
    </div>
  );
};

export default NewPost;
