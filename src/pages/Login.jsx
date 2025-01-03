import React from 'react';
import { useForm } from 'react-hook-form';

function Login() {
    const form = useForm({
        defaultValues: {
            name: "",
            name: "",
            email: "default@gmail.com",
            password: ""

        }
    });
    const { register, handleSubmit, formState, reset } = form;
    const { errors, isDirty, isValid } = formState;
    const onSubmit = (data) => {
        console.log("Form submit", data);

    }
    return (
        <div className="w-screen h-screen bg-[url('https://i.redd.it/7aadu9ocfvx51.jpg')] bg-cover flex items-center justify-center">
            <div className="w-[90%] max-w-[500px] h-auto p-6 text-white font-bold flex flex-col items-center justify-center backdrop-blur-md bg-opacity-10 bg-white rounded-lg">
                <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <h1 className="text-center text-3xl">Log in</h1>
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm">First Name:</label>
                        <input className="w-full h-[40px] focus:outline-none rounded-md backdrop-blur-md bg-opacity-10 bg-white px-4" {...register("firstname",
                            {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                },
                                validate: (fieldvalue) => {
                                    return fieldvalue !== "admin" || "Enter another username"

                                }
                            }
                        )} />
                        {errors.firstname?.message && <p>{errors.firstname.message}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm">Last Name:</label>
                        <input className="w-full h-[40px] focus:outline-none rounded-md backdrop-blur-md bg-opacity-10 bg-white px-4" name="last name" {...register("lastname",
                            {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                }
                            }
                        )} />
                        {errors.lastname?.message && <p>{errors.lastname.message}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm">Email:</label>
                        <input className="w-full h-[40px] focus:outline-none rounded-md backdrop-blur-md bg-opacity-10 bg-white px-4" name="email" {...register("email",
                            {
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address"
                                }
                            }
                        )} />
                        {errors.email?.message && <p>{errors.email.message}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 text-sm">Password:</label>
                        <input className="w-full h-[40px] focus:outline-none rounded-md backdrop-blur-md bg-opacity-10 bg-white px-4" name="password" type="password" {...register("password",
                            {
                                required: {
                                    value: true,
                                    message: "password is required"
                                },
                                minLength: {
                                    value: 3,
                                    message: "password must be atleast 3 characters long"
                                }
                            }
                        )} />
                        {errors.password?.message && <p className='text-white'>{errors.password.message}</p>}
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label className="text-sm">Gender:</label>
                        <div className="flex items-center justify-around">
                            <label className="flex items-center gap-2">
                                Male
                                <input type="radio" name="gender" />
                            </label>
                            <label className="flex items-center gap-2">
                                Female
                                <input type="radio" name="gender" />
                            </label>
                            <label className="flex items-center gap-2">
                                Other
                                <input type="radio" name="gender" />
                            </label>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <button disabled={!isDirty || isValid} className="mt-6 backdrop-blur-md bg-opacity-10 bg-white text-white w-[110px] h-[40px] rounded-md hover:bg-sky-700">
                            Regiter
                        </button>
                        <button className="mt-6 backdrop-blur-md bg-opacity-10 ml-3 bg-white text-white w-[110px] h-[40px] rounded-md hover:bg-sky-700" type='button' onClick={() => reset()}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
