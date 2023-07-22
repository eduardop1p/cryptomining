/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { Container } from './styled';
import Link from 'next/link';

import Loading from '../loading';

interface Body {
  email: string;
}

export default function FormPasswordReset() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Body>();

  const onSubmit: SubmitHandler<Body> = body => {
    toast.error('page under maintenance', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <h1>Reset Your Account</h1>
      <p>Please Insert your email address to retrieve your account.</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container-input">
          <input
            type="email"
            placeholder="Enter your email address"
            required={true}
            {...register('email')}
          />

          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <button
          type="submit"
          style={{ pointerEvents: loading ? 'none' : 'all' }}
        >
          Send password reset link {loading && <Loading />}
        </button>
        <span>
          {`Don't`} have an account yet?
          <Link href="/register">Create Account</Link>
        </span>
      </form>
    </Container>
  );
}
