/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { FaLock, FaLockOpen } from 'react-icons/fa';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { get } from 'lodash';

import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';

import { Container } from './styled';
import Link from 'next/link';

import Loading from '../loading';

interface Body {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

export default function FormRegister() {
  const [typePassword, setTypePassword] = useState('password');
  const [loading, setLoading] = useState(false);

  const redirect = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Body>();

  const onSubmit: SubmitHandler<Body> = async body => {
    // eslint-disable-next-line
    let errors = false;

    if (loading) return;

    if (body.name.length < 6) {
      setError('name', {
        type: 'minLength',
        message: 'The username must be at least 6 characters.',
      });
      errors = true;
    }
    if (body.password.length < 6) {
      setError('password', {
        type: 'minLength',
        message: 'The username must be at least 6 characters.',
      });
      errors = true;
    }
    if (body.password !== body.confirmPassword) {
      setError('password', {
        type: 'value',
        message: 'The password confirmation does not match.',
      });
      errors = true;
    }

    if (errors) return;

    try {
      setLoading(true);
      const { name, email, password, confirmPassword } = body;
      await axios.post(`${process.env.NEXT_PUBLIC_URL_API}/create-user`, {
        name,
        email,
        password,
        confirmPassword,
      });

      await axios.post(`${process.env.NEXT_PUBLIC_URL_API}/login`, {
        emailOrUserName: email,
        password: password,
      });
      redirect.push('/user/dasboard');
    } catch (err: any) {
      toast.error(
        get(err.response, 'data.message', false)
          ? err.response.data.message
          : 'internal server error 500',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        }
      );
    } finally {
      setLoading(false);
    }
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
      <h1>Create Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container-input">
          <input
            type="text"
            placeholder="Username"
            required={true}
            {...register('name')}
          />

          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className="container-input">
          <input
            type="email"
            placeholder="Email address"
            required={true}
            {...register('email')}
          />
        </div>
        <div className="container-input">
          <input
            type={typePassword}
            placeholder="Password"
            required={true}
            {...register('password')}
          />
          {typePassword === 'password' ? (
            <FaLock onClick={() => setTypePassword('text')} />
          ) : (
            <FaLockOpen onClick={() => setTypePassword('password')} />
          )}
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="container-input">
          <input
            type={typePassword}
            placeholder="Confirm password"
            required={true}
            {...register('confirmPassword')}
          />
        </div>
        <div className="acept-terms">
          <input
            type="checkbox"
            required={true}
            defaultChecked={false}
            {...register('terms')}
          />
          <span>Accepting all the terms & conditions</span>
        </div>
        <button
          type="submit"
          style={{ pointerEvents: loading ? 'none' : 'all' }}
        >
          Sign Up {loading && <Loading />}
        </button>
        <span>
          Already have an account? <Link href="/login">Login Now</Link>
        </span>
      </form>
    </Container>
  );
}
